import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update } from "services/articles";
import { Read as ReadUsers } from "services/users";
import { Read as ReadGroups } from "services/groups";

import { exposeStrapiError } from "utils"; 
import { useHistory } from "react-router-dom"; 
import { CoreContext } from "context/CoreContext";
import { toast } from "react-toastify";

export default function useController(){ 
    
    const history = useHistory(); 
    
    const { user } = useContext(CoreContext)

    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [data, setData] = useState({}) 
    const [register, setRegister] = useState(null) 

    const [ form, setForm ] = useState({ })
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;}  

    const addTo = (formRef, item) => {
        setForm({
            ...form,
            [formRef]: [
                ...(form?.[formRef] || []),
                item
            ]
        })
    }

    const removeTo = (formRef, item) => {
        setForm({
            ...form,
            [formRef]: [
                ...(form?.[formRef] || [])?.filter(ff => ff.id !== item?.id )
            ]
        })
    }

    const init = async () => {
        setLoading(true)
        const result = await ReadOne(id)
        if(result && !exposeStrapiError(result)){
            setRegister(result) 
            setForm({ 
                ...result, 
                name: result?.edict?.title,
                number: result?.numberWords,
                published: result?.published ? 1 : 2
            })
        }
        setLoading(false)
    }

    const initData = async () => {
        let nxtData = {}
        const resultUsers = await ReadUsers()
        if(typeof resultUsers?.map === 'function'){
            nxtData = { 
                ...nxtData,
                advisors: resultUsers?.map(mm => ({
                    ...mm,
                    title: mm.name
                }))?.filter(ff => ff.isAdvisor)
            }
        }
        const resultGroups = await ReadGroups()
        if(typeof resultGroups?.map === 'function'){
            nxtData = { 
                ...nxtData,
                groups: resultGroups?.map(mm => ({
                    ...mm,
                    title: mm.name
                }))
            }
        } 
        setData(nxtData)
    }

    const save = async () => {
        const params = {
            users: (formValue('users') || []).map( mm => mm.id ),
            groups: (formValue('groups') || []).map( mm => mm.id ),
            status: form?.status,
            numberWords: form?.number,
            published: (form?.published === 1)
        }

        const result = await Update(params, id)
        if(result && !exposeStrapiError(result)){
            toast.success("Atualizado com sucesso")
            history.goBack()
        }
    }
 

    useEffect(() => { if(!!id){ init() ;} }, [id])
    useEffect(() => { initData() ;}, [])

    return {
        loading,
        register,
        formValue,
        changeForm, 
        data,
        addTo,
        removeTo,
        save
    };
}