import { CoreContext } from "context/CoreContext";
import React, { useContext, useEffect, useState } from "react";  
import { Read } from "services/edicts";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const { user } = useContext(CoreContext)

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegisters(result)
        }
        setLoading(false)
    }

    useEffect(() => { init() ;}, [user])

    return {
        loading,
        registers,
        user
    };
}