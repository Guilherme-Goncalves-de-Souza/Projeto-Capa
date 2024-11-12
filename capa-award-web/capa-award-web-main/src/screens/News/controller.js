import React, { useEffect, useState } from "react";  
import { Read } from "services/news-pages";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegisters(result)
        }
        setLoading(false)
    }

    useEffect(() => { init() ;}, [])

    return {
        loading,
        registers
    };
}