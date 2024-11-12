import React from "react";  

import { useHistory } from 'react-router-dom';

import {  

    DashboardMenuContainer,
    DashboardMenu,
    DashboardMenuHeader,
    DashboardMenuHeaderIcon,

    DashboardMenuHeaderUserContent,
    DashboardMenuHeaderUserImage, 

    DashboardMenuOption,
    DashboardMenuContent,
    DashboardMenuFooter,
    
    DashboardVersionContent,
    DashboardVersionText

} from "./styled"; 

import Button from "components/Form/Button";
import { DoLogout } from "services/authentication";

export default function DashboardSide({ opened, setOpened }){ 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
    
    const verifyClose = e => {
        if(!e.target.closest('.menu-contant')){
            setOpened(false)
        }
    }

    const exit = async () => {
        await DoLogout()
        navigate('login')
    }

    return ( 
        <>  
            {
                !opened ? null :
                <DashboardMenuContainer onClick={verifyClose}>
                    <DashboardMenu> 
                        <DashboardMenuHeader onClick={() => setOpened(false)}>
                            <DashboardMenuHeaderIcon src={'/icons/close-white.svg'} />
                            fechar
                        </DashboardMenuHeader> 
                        <DashboardMenuHeaderUserContent>
                            <DashboardMenuHeaderUserImage /> 
                        </DashboardMenuHeaderUserContent> 

                        <DashboardMenuContent>
                            <DashboardMenuOption onClick={() => navigate('dashboard/me')}> 
                                Meu Perfil
                            </DashboardMenuOption>
                        </DashboardMenuContent>
                        
                        <DashboardMenuFooter>
                            <Button primary outline onClick={exit} centred>
                                Sair
                            </Button>   
                            <DashboardVersionContent>
                                <DashboardVersionText>1.0.0</DashboardVersionText>
                                <DashboardVersionText>1.10.1.101</DashboardVersionText>
                            </DashboardVersionContent>
                        </DashboardMenuFooter>

                    </DashboardMenu>
                </DashboardMenuContainer>
            } 
        </>
    );
}