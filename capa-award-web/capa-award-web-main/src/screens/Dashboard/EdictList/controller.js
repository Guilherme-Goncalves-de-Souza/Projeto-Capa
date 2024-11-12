import { CoreContext } from "context/CoreContext";
import React, { useContext, useEffect, useState } from "react";  
import { Read, ReadById } from "services/articles";
import { exposeStrapiError } from "utils";
import { parseEdict } from "utils/parsers";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const { user } = useContext(CoreContext)

    const init = async () => {
        setLoading(true)
        const result = await ReadById(user?.id)
        if(result && !exposeStrapiError(result)){
            setRegisters(result.map(parseEdict))
        }
        setLoading(false)
    }

    useEffect(() => { init() ;}, [])

    return {
        loading,
        registers
    };
}