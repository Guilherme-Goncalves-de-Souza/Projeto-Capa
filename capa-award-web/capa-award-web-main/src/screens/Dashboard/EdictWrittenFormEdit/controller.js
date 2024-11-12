import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update } from "services/written-groups";
import { exposeStrapiError } from "utils";

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { stateToHTML } from "draft-js-export-html";
import { CoreContext } from "context/CoreContext";

export default function useController(){ 
    
    const history = useHistory();  

    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null)  

    const init = async () => {
        setLoading(true)
        if( id && id !== "create" ){
            const result = await ReadOne(id)
            if(result && !exposeStrapiError(result)){
                setRegister(result)  
            }
        }
        setLoading(false)
    }  
    

    const reject = async item => {
        updateAccepted(item, false)
    }

    const accept = async item => {
        updateAccepted(item, true)
    }
    
    const updateAccepted = async (item, accepted) => {
        setLoading(true)
        const result = await Update({ 
            ...register, 
            participant: register?.participant?.map(mm => ( mm.id === item.id ? { ...mm, accepted } : { ...mm } )) || []
        }, id )
        if(result && !exposeStrapiError(result)){
            toast.success("Aceito")
            init()
        } else {
            setLoading(false)
        }
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])

    return {
        loading,
        register,
        accept,
        reject
    };
}