import React, { useContext, useEffect, useState } from 'react'
import { ModalActionButton, ModalActions, ModalBody, ModalContainerIn, ModalContainerOut, ModalHeaderClose, ModalHeaderTitle } from './styled'
import Select from 'components/Form/Select'
import Button from 'components/Form/Button'
import { CoreContext } from 'context/CoreContext'
import { Read, Create, Update, ReadOne } from 'services/users'
import { Read as ReadInstituitions } from 'services/instituitions'
import Input from 'components/Form/Input'
import { exposeStrapiError } from 'utils'
import { toast } from 'react-toastify'

export default function ModalUser(){

    const { setModal, modal } = useContext(CoreContext)
    
    const [options, setOptions] = useState([])
    const [ form, setForm ] = useState({ })

    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const init = async () => {
        const result = await ReadInstituitions()
        if( result && typeof result?.map === 'function' ){
            setOptions( result?.map(mm => ({ ...mm, title: mm?.name })) )
        }

        if(modal?.id){
            const result = await ReadOne(modal?.id)
            if(result){ setForm({ ...result, instituition: result?.instituition?.id }) ;}
        }
    }

    const save = async () => {
        const payload = { ...form }
        const result = modal?.id ? await Update(payload, modal?.id) : await Create(payload)
        if(result && !exposeStrapiError(result)){
            toast.success("Salvo!")
            if( typeof modal?.action === 'function' ){ modal?.action() ;}
            setModal(null)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <ModalContainerOut>
                <ModalContainerIn>
                    <ModalHeaderClose onClick={() => setModal(null)} />
                    <ModalHeaderTitle>Cadastrar/ editar usuário</ModalHeaderTitle>
                    <ModalBody>
                        <Input placeholder={'Nome'}  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                        <Input placeholder={'Email'}  value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')} />
                        <Select placeholder={'Instituição'} options={options} value={formValue('instituition')} onChange={val => changeForm(val, 'instituition')}  />
                    </ModalBody>
                    <ModalActions>
                        <ModalActionButton>
                            <Button nospace primary onClick={save}>Salvar</Button>
                        </ModalActionButton>
                    </ModalActions>
                </ModalContainerIn>
            </ModalContainerOut>
        </>
    )
}