import React, { useContext, useEffect, useState } from "react";  

import { Delete, Read } from "services/news-pages";
import { exposeStrapiError } from "utils";
import { CoreContext } from "context/CoreContext";
import moment from "moment/moment";

export default function useController(){ 

    const { user } = useContext(CoreContext)
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const init = async () => {
        setLoading(true)
        const result = await Read(`?user=${ user?.id }`)
        if(result && !exposeStrapiError(result)){
            setRegisters(
                result?.map(mm => ({ 
                    ...mm,
                    name: mm?.title, 
                    author: mm?.font, 
                    date: moment(mm?.date)?.format("DD/MM/YYYY"), 
                    time: moment(mm?.date)?.format("HH:mm")
                }))
            )
        }
        setLoading(false)
    }

    const remove = async id => {
        const result = await Delete(id)
        if(result && !exposeStrapiError(result)){ init() ;}
    }

    useEffect(() => { if(user?.id){ init() } ;}, [user])

    return {
        loading,
        registers,
        remove
    };
}