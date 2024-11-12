import React, { useContext, useEffect, useState } from "react";  

import { Read, Create } from "services/chats";
import { exposeStrapiError } from "utils";
import { CoreContext } from "context/CoreContext";

export default function useChat(id){  

    const { user } = useContext(CoreContext)
    
    const [chats, setChats] = useState([]) 
    const [loading, setLoading] = useState(false) 

    const init = async () => {
        setLoading(true)
        const result = await Read(id)
        if(result && !exposeStrapiError(result)){
            setChats(
                result
                ?.map( mm => ({ ...mm, mine: mm?.sender?.id === user?.id }))
                ?.sort((a,b) => new Date(a.created_at)?.getTime() - new Date(b.created_at)?.getTime())
            )
        }
        setLoading(false)
    }

    const sentMessage = async message => {
        const result = await Create({ article:id, sender: user?.id, message })
        if( result && !exposeStrapiError(result) ){ init() ;}
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])

    return {
        chats,
        loading,
        sentMessage
    };
}