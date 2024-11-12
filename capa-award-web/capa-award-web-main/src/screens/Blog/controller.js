import React, { useEffect, useState } from "react";  
import { Read } from "services/blogs";
import { exposeStrapiError } from "utils";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 
    const [selectedTag, setSelectedTag] = useState(null) 

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegisters(result)
        }
        setLoading(false)
    }

    const filterTag = item => {
        return !selectedTag || item?.tag?.split(',')?.includes(selectedTag)
    }

    useEffect(() => { init() ;}, [])

    return {
        loading,
        registers,
        selectedTag, setSelectedTag, filterTag
    };
}