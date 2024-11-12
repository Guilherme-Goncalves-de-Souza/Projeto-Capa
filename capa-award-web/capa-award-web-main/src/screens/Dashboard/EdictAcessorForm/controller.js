import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { Create, ReadOne, Update, Delete } from "services/activities";
import { Read as ReadUsers } from "services/users";
import { Read as ReadGroups } from "services/groups";
import { Read as ReadInstitutions } from "services/instituitions";
import { Read as ReadSectors } from "services/sectors";
import { Create as CreateArticle } from "services/articles"; 
import { Read as ReadAdvices,  Create as CreateAdvince } from "services/advice-pages";

import { exposeStrapiError, parseStrapiDate, parseStrapiImage } from "utils"; 
import { useHistory } from "react-router-dom"; 
import { CoreContext } from "context/CoreContext";
import { toast } from "react-toastify";
import { turnOptions } from "utils/options";
import { ReadFile } from "services/any-text";
import moment from "moment/moment";

export default function useController(){ 
    
    const history = useHistory(); 
    
    const { user } = useContext(CoreContext)

    const { id } = useParams()
    const [loading, setLoading] = useState(false) 
    const [data, setData] = useState({}) 
    const [register, setRegister] = useState(null) 
    const [file, setFile] = useState(null) 

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
                    ...result?.data,
                    howMany: result?.type === "mark_frequency_accessory" ? "many" : "once"
                })
                setFile( result?.file )
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
        const resultSectors = await ReadSectors()
        if(typeof resultSectors?.map === 'function'){
            nxtData = { 
                ...nxtData,
                sectors: resultSectors?.map(mm => ({
                    ...mm,
                    title: mm.name
                }))
            }
        } 
        setData(nxtData)
    }


    const valid = (verbose = false) => {  

        if(!formValue('terms')){ 
            if(verbose){ toast.error('Aceite os termos') ;}
            return false; 
        }  

        if(!formValue('howMany')){ 
            if(verbose){ toast.error('Escolha a frequencia das acessorias') ;}
            return false; 
        }  
        
        if(formValue('howMany') === 'once'){
            if( !formValue('weekDay')  ){ 
                if(verbose){ toast.error('Selecione o dia da semana para a acessoria') ;}
                return false; 
            }
        }
        
        if(formValue('howMany') === 'many'){
            if( !formValue('qtd') || !formValue('qtd')?.length ){ 
                if(verbose){ toast.error('Informe a quantidade de acessorias') ;}
                return false; 
            }  
            if( !formValue('weekdays') || !formValue('weekdays')?.length ){ 
                if(verbose){ toast.error('Selecione os dias da semana para a acessoria') ;}
                return false; 
            }  
        }
        
        if( !formValue('local') ){ 
            if(verbose){ toast.error('Selecione o local') ;}
            return false; 
        }

        if( !formValue('hour') ){ 
            if(verbose){ toast.error('Selecione o horário') ;}
            return false; 
        }

        if(!formValue('acessor')){ 
            if(verbose){ toast.error('Selecione o Assessor') ;}
            return false; 
        }  

        if(!formValue('workType')){ 
            if(verbose){ toast.error('Selecione o Tipo de trabalho') ;}
            return false; 
        }  

        if(!formValue('name')){ 
            if(verbose){ toast.error('Informe o nome') ;}
            return false; 
        }  

        if(!formValue('reason')){ 
            if(verbose){ toast.error('Informe o motivo') ;}
            return false; 
        }  

        if(!file){ 
            if(verbose){ toast.error('Envie o arquivo') ;}
            return false; 
        }  

        return true
    } 

    const save = async () => {
        if(!valid(true)){ return false ;}
        const params = {
            file: file.id,
            data: {
                ...form
            },
            type: form?.howMany === "once" ? "mark_only_one_accessory" : "mark_frequency_accessory"
        }

        const result = id ? await Update(params, id) :  await Create(params)
        if(result && !exposeStrapiError(result)){

            if(!id){
                const res = await createFormAdvinces()
                // console.log(res)
            }

            toast.success("Sucesso")
            history.goBack()
        }
    }

    const sleep = ts => new Promise((resolve) => {
        setTimeout(() => { resolve() ;}, ts)
    })

    const createFormAdvinces = async () => {

        const advices = await ReadAdvices() 
        const adviceAdvices = advices?.filter(ff => ff?.advice?.id === form?.acessor)
        const article = await CreateArticle({ 
            user: user?.id,
            file: file?.id, 
            font: form?.name,
            status: "in_screening", 
            title: `${ file?.name || "" }`.split('.')?.[0],
            // edict: edict_id,
            // text: `${ openedFile?.result || "" }`?.replace(/\n/g, "")
        })

        if(article?.id){
            sleep(1000)
            await ReadFile({ url: parseStrapiImage(file?.url), id: article?.id })
        }

        const hour = turnOptions.find(fnd => fnd.id === form?.hour)?.title
        
        let payload = {
            user: user.id,
            title: `Assessoria ${ form?.name }`,
            local: data?.instituition?.find(fnd => fnd.id === form?.local)?.name,
            status: "scheduled",
            email: user?.email,
            advice: form?.acessor,
            article: article?.id,
            hour: `${hour}:00`,
            reason: form?.reason
        }

        const payloads = []

        // console.log("formtype", form?.howMany, adviceAdvices)

        if(form?.howMany === "once"){
            const nxtPayload = {
                ...payload,
                date: parseStrapiDate(nextAvailableDate(adviceAdvices, form?.weekDay, hour))?.split("T")?.[0]
            }
            payloads.push(nxtPayload)
        } else {
            let already = []
            let day = 0;
            for( let i = 0; i < form?.qtd ; i++ ){
                const weekday = form?.weekdays?.[day]
                const nxtDate = nextAvailableDate(adviceAdvices, weekday.id, hour, already)
                already.push(nxtDate)
                day = (day + 1) < form?.weekdays?.length ? day + 1 : 0
                const nxtPayload = {
                    ...payload,
                    date: parseStrapiDate(nxtDate)?.split("T")?.[0]
                }
                payloads.push(nxtPayload)
            }
        }

        // console.log("payloads", payloads)

        const promises = payloads?.map(p => CreateAdvince(p) )
        const result = await Promise.all(promises)

        return result;
    }

    const nextAvailableDate = (advinces, weekday, hour, ignores = []) => {
        const unavailableDates = [
            ...advinces?.map(mm => new Date(`${mm.date}T${mm.hour}`) ),
            ...ignores
        ];
        
        const targetDayOfWeek = weekday - 1; 
        const targetHour = parseInt(hour?.split(':')?.[0]); 
        const today = new Date(); 
        today.setHours(targetHour,0,0)

        // console.log(advinces, advinces?.map(mm => new Date(`${mm.date}T${mm.hour}`) ) )

        let nextAvailableDatetime = null;

        for(let i = 0; i < 1000; i++){
            // while( nextAvailableDatetime === null ){
                // console.log( unavailableDates?.map(mm => `${ parseStrapiDate(mm)}`) , `${ parseStrapiDate(today) }`)
                if ( today.getDay() === targetDayOfWeek && !unavailableDates?.map(mm => `${ parseStrapiDate(mm)}`).includes(`${ parseStrapiDate(today) }`) ) {
                    nextAvailableDatetime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), targetHour, 0, 0 );
                } else{
                    today.setDate( today.getDate() + 1)
                }
            // }
        }
        
        // console.log("nextAvailableDatetime", nextAvailableDatetime)
        return nextAvailableDatetime;        
    }

    const remove = async id => {
        const result = await Delete(id)
        if(result && !exposeStrapiError(result)){ init() ;}
    }
  
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
        
        addTo,
        removeTo,
        file, setFile
    };
}