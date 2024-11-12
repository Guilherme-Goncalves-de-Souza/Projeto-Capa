import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update } from "services/blogs";
import { exposeStrapiError } from "utils";

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { stateToHTML } from "draft-js-export-html";
import { CoreContext } from "context/CoreContext";

export default function useController(){ 
    
    const history = useHistory(); 
    
    const { user } = useContext(CoreContext)

    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [register, setRegister] = useState(null) 

    const [ form, setForm ] = useState({
        draft: EditorState.createEmpty()
    })
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;}  

    const init = async () => {
        setLoading(true)
        if( id && id !== "create" ){
            const result = await ReadOne(id)
            if(result && !exposeStrapiError(result)){
                setRegister(result) 
                setForm({ 
                    ...result,
                    draft: result?.draft ? EditorState.createWithContent( convertFromRaw(result?.draft) ) : EditorState.createEmpty(),
                    created_at: moment(result?.created_at)?.format("DD/MM/YYYY"),
                    date: moment(result?.date)?.format("DD/MM/YYYY"),
                    time: moment(result?.date)?.format("HH:mm"),
                    tags: result?.tag?.split(','),
                    tag: ""
                })
            }
        }
        setLoading(false)
    }

    const addTag = () => {
        setForm({
            ...form,
            tags: form?.tags ? [ ...form?.tags, form.tag ] : [ form.tag ],
            tag: ""
        })
    }
    
    const removeTag = (key) => {
        setForm({
            ...form,
            tags: form?.tags?.filter((f,k) => k !== key )
        })
    }

    const save = async () => {
        const dateSlices = form?.date?.split('/')
        const payload = {
            ...form,
            tag: `${ ( form?.tag?.length ? [ ...(form?.tags || []), form?.tag ] : [ ...(form?.tags || []) ] ).join(',') }`,
            date: `${dateSlices[2]}-${dateSlices[1]}-${dateSlices[0]}T${form?.time}`,
            image: form?.image?.id ? form?.image?.id : null,
            draft: convertToRaw(form?.draft?.getCurrentContent()),
            html: stateToHTML(form?.draft?.getCurrentContent()),
            text: form?.draft?.getCurrentContent().getPlainText(),
            user: user?.id
        }
        
        const result = id && id !== "create" ? await Update(payload, id) : await Create(payload)
        // const result = await Create(payload)
        if(result && !exposeStrapiError(result)){
            toast.success("Salvo!")
            history.goBack()
        }
    }

    useEffect(() => { if(!!id){ init() ;} }, [id])

    return {
        loading,
        register,
        formValue,
        changeForm,
        addTag,
        removeTag,
        save,
        form,
        setForm
    };
}