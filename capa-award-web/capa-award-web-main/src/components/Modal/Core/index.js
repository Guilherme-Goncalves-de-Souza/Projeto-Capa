import React, { useContext } from 'react'
import { CoreContext } from 'context/CoreContext'
import { ThemedComponent } from 'ui/theme'

import ModalInstituition from '../Instituition'
import ModalFilter from '../Filter'
import ModalSector from '../Sector'
import ModalUser from '../User'
import ModalAdvisor from '../Advisor'
import ModalTerms from '../Terms'
import ModalPrivacityPolicy from '../PrivacityPolicy'

export default function ModalCore(){

    const { modal } = useContext(CoreContext)

    return (
        <>
            <ThemedComponent>
                { modal?.type === 'filter' ? <ModalFilter /> : null }
                { modal?.type === 'instituition' ? <ModalInstituition /> : null }
                { modal?.type === 'sector' ? <ModalSector /> : null }
                { modal?.type === 'users' ? <ModalUser /> : null }
                { modal?.type === 'advisor' ? <ModalAdvisor /> : null }
                { modal?.type === 'terms' ? <ModalTerms /> : null }
                { modal?.type === 'privacity-policy' ? <ModalPrivacityPolicy /> : null }
            </ThemedComponent>
        </>
    )
}