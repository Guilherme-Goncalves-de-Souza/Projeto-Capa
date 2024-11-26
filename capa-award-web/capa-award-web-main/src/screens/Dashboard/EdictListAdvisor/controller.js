import { CoreContext } from "context/CoreContext";
import React, { useContext, useEffect, useState } from "react";  
import { Read } from "services/edicts";
import { exposeStrapiError, maxLength } from "utils";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const { user } = useContext(CoreContext)

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegisters(result?.map( item => ({
                ...item,
                edict: item?.title, 
                instituition: item?.instituition?.name
            })))
        }
        setLoading(false)
    }

    useEffect(() => { init() ;}, [])

    return {
        loading,
        registers,
        user
    };
}