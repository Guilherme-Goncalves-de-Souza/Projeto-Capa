import React, { useContext, useEffect, useState } from 'react'
import { ModalActionButton, ModalActions, ModalBody, ModalContainerIn, ModalContainerOut, ModalHeaderClose, ModalHeaderTitle } from './styled'
import Select from 'components/Form/Select'
import Button from 'components/Form/Button'
import { CoreContext } from 'context/CoreContext'
import { Read, Create, Update, ReadOne } from 'services/instituitions'
import { Read as ReadUser } from 'services/users'
import Input from 'components/Form/Input'
import { exposeStrapiError } from 'utils'
import { toast } from 'react-toastify'

export default function ModalInstituition(){

    const { setModal, modal } = useContext(CoreContext)
    
    const [options, setOptions] = useState([])
    const [ form, setForm ] = useState({ })

    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const init = async () => {
        const result = await ReadUser()
        if( result && typeof result?.map === 'function' ){
            setOptions(result?.map(mm => ({ ...mm, title: mm?.name }) ))
        }

        if(modal?.id){
            const result = await ReadOne(modal?.id)
            if(result){ setForm({ ...result, coordinator: result?.coordinator?.id }) ;}
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
                    <ModalHeaderTitle>Cadastrar / Editar IES</ModalHeaderTitle>
                    <ModalBody>
                        <Input placeholder={'Nome IES'}  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                        <Select placeholder={'Coordenador'} options={options} value={formValue('coordinator')} onChange={val => changeForm(val, 'coordinator')}  />
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