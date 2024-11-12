import React, { useContext, useEffect, useState } from "react";  

import { Delete, Read } from "services/instituitions";
import { exposeStrapiError, numerize } from "utils";
import { CoreContext } from "context/CoreContext";
import moment from "moment/moment";

export default function useController(){ 

    const { user } = useContext(CoreContext)
    
    const [loading, setLoading] = useState(false) 
    const [registers, setRegisters] = useState([]) 

    const init = async () => {
        setLoading(true)
        const result = await Read()
        if(result && !exposeStrapiError(result)){
            setRegisters(
                result?.map( mm => ({ 
                    ...mm,
                    instituition: mm?.instituition?.name,
                    coordinator: mm?.coordinator?.name
                }) )
            )
        }
        setLoading(false)
    }

    const remove = async id => {
        const result = await Delete(id)
        if(result && !exposeStrapiError(result)){ init() ;}
    }

    useEffect(() => { init()  ;}, [])

    return {
        loading,
        registers,
        remove,
        init
    };
}