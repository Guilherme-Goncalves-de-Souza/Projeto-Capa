import React, { useContext } from 'react'
import { ModalActionButton, ModalActions, ModalBody, ModalContainerIn, ModalContainerOut, ModalHeaderClose, ModalHeaderTitle } from './styled'
import Select from 'components/Form/Select'
import Button from 'components/Form/Button'
import { CoreContext } from 'context/CoreContext'

export default function ModalFilter(){

    const { setModal } = useContext(CoreContext)

    const options = [
        { title:'A', id:1 },
        { title:'B', id:2 },
        { title:'C', id:3 },
        { title:'D', id:4 },
        { title:'E', id:5 },
        { title:'F', id:6 }
    ]

    return (
        <>
            <ModalContainerOut>
                <ModalContainerIn>
                    <ModalHeaderClose onClick={() => setModal(null)} />
                    <ModalHeaderTitle>Filtrar busca</ModalHeaderTitle>
                    <ModalBody>
                        <Select placeholder={'Autor'} options={options}/>
                        <Select placeholder={'Data da postagem'} options={options}/>
                    </ModalBody>
                    <ModalActions>
                        <ModalActionButton>
                            <Button nospace primary>Filtrar</Button>
                        </ModalActionButton>
                    </ModalActions>
                </ModalContainerIn>
            </ModalContainerOut>
        </>
    )
}