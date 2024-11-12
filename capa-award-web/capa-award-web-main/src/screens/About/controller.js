import React, { useEffect, useState } from "react";  
import { Read } from "services/about";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null) 

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegister(result?.aboutContent?.find(ff => ff.type === "written_groups"))
        }
        setLoading(false)
    }

    useEffect(() => { init() }, [])

    return {
        loading,
        register
    };
}