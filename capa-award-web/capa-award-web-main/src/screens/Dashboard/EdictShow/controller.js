import useChat from "hooks/useChat";
import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { FRONTEND_ENDPOINT } from "services/api";
import { ReadOne } from "services/articles";
import { SentEmail } from "services/core";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null) 

    const { chats, sentMessage } = useChat(id)

    const init = async () => {
        setLoading(true)
        const result = await ReadOne(id)
        if(result && !exposeStrapiError(result)){
            setRegister(result)
        }
        setLoading(false)
    }

    const notifyAll = async () => {
        console.log("Notify", register?.users?.map(m => m.email), register?.user?.email)

        const targets = [
            register?.user?.email,
            ...(register?.users||[])?.map(m => m.email)
        ]?.reduce((p,c) => p.includes(c) ? p : [...p,c], [])

        const emailPayload = {
            to: '',
            from: 'no.reply.xapps@gmail.com', // verified email
            subject: `CapaAward - Interação artigo ${ register?.title }`,
            // text: 'Hello world!',
            html: `<p>Uma nova interação foi detectada no artigo ${register?.title}, acesse a plataforma e confira</p><a href="${FRONTEND_ENDPOINT}activities/show/article/${register?.id}" target="new">Ver artigo</a>`,
        }

        const promises = targets?.map(email => SentEmail({
            ...emailPayload,
            to: email
        }))

        const result = await Promise.all(promises)

        console.log("targets", result)
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])

    return {
        loading,
        register,
        chats,
        sentMessage,
        notifyAll
    };
}