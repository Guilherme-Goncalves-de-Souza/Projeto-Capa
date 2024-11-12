import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { ReadOne } from "services/blogs";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null) 

    const init = async () => {
        setLoading(true)
        const result = await ReadOne(id)
        if(result && !exposeStrapiError(result)){
            setRegister(result)
        }
        setLoading(false)
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])

    return {
        loading,
        register
    };
}