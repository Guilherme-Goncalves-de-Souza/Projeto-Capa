import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update, Delete } from "services/advice-pages";
import { Read as ReadUsers } from "services/users";
import { Read as ReadGroups } from "services/groups";
import { Read as ReadInstitutions } from "services/instituitions";

import { exposeStrapiError, parseStrapiImage } from "utils"; 
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

    const init = async () => {
        setLoading(true)
        if(id){
            const result = await ReadOne(id)
            if(result && !exposeStrapiError(result)){
                setRegister(result) 
                setForm({ 
                    ...result,
                    local: result?.instituition?.id
                })
            }
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
                }))
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
        const resultInstituition = await ReadInstitutions()
        if(typeof resultInstituition?.map === 'function'){
            nxtData = { 
                ...nxtData,
                instituition: resultInstituition?.map(mm => ({
                    ...mm,
                    title: mm.name
                }))
            }
        } 
        setData(nxtData)
    }

    const save = async () => {
        const params = {
            ...form,
            instituition: form?.local
        }

        const result = id ? await Update(params, id) :  await Create(params)
        if(result && !exposeStrapiError(result)){
            toast.success("Sucesso")
            history.goBack()
        }
    }

    const remove = async id => {
        const result = await Delete(id)
        if(result && !exposeStrapiError(result)){ init() ;}
    }

    const downloadArticle = () => {
        if(register?.article?.file?.url){
            window.open(parseStrapiImage(register?.article?.file?.url))
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
        save,
        remove,
        downloadArticle
    };
}