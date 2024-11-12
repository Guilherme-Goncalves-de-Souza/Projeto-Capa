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
import { Read as ReadInstitutions } from "services/instituitions";

export default function useController(){ 
    
    const history = useHistory(); 
    
    const { user } = useContext(CoreContext)

    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null) 
    const [instituitions, setIntituitions] = useState([]) 

    const [ form, setForm ] = useState({
        draft: EditorState.createEmpty()
    })
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;}  

    const init = async () => {
        setLoading(true)
        const result = await ReadOne(id)
        if(result && !exposeStrapiError(result)){
            setRegister(result) 
            setForm({ 
                description: result?.description,
                participant: result?.participant || [],
            })
            console.log({ 
                description: result?.description,
                participant: result?.participant || [],
            })
        }
        setLoading(false)
    } 

    const initData = async () => {  
        const resultInstituitions = await ReadInstitutions()  
        if(resultInstituitions){ setIntituitions(resultInstituitions?.map( mm => ({ ...mm, title: mm?.name }) )) ;} 
    }

    const save = async () => {
        const payload = {
            participant: [
                ...form?.participant,
                { ...form, instituition: form?.institution , user: user?.id },
            ]
        }
        const result = id ? await Update(payload, id) : await Create(payload)
        if(result && !exposeStrapiError(result)){
            toast.success("Salvo!")
            history.goBack()
        }
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])
    useEffect(() => { initData() }, [])

    return {
        loading,
        register,
        formValue,
        changeForm, 
        
        save,
        form,
        setForm,

        instituitions,
        user
    };
}