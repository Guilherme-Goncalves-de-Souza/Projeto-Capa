import React, { useContext, useEffect } from "react";  

import Header from 'components/Landpage/Header'
import Footer from 'components/Landpage/Footer' 

import { 
    Content, 
    ContentSided,

    HeaderLandpage,
    BodyLandpage,
    BodyLandpageSide,
    BodyLandpageSideItem,
    BodyLandpageSideItemIcon,
    BodyLandpageBody,
    HeaderLandpageItem
    
} from "./styled"; 
import { ThemedComponent } from "ui/theme";
import { useHistory } from "react-router-dom";
import SideHeader from "components/SideHeader";
import { CoreContext } from "context/CoreContext";
import { DoLogout } from "services/authentication";

export default function ContainerLandpage({ children, sided }){ 
 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { user } = useContext(CoreContext)

    console.log('landuser', user)

    const sideOptions = [
        !user ? null : { 
            title:'Atividades', 
            page: user?.isAdvisor ? 'activities/list/edicts' : user?.isAdmin ? 'dashboard/admin' :  'activities',
            sided:'activities',
            options:[
                { title:'Editais', page:'activities' },
                { title:'Histórico de editais', page:'activities/edicts/history' },
                { title:'Grupos de escrita', page:'activities/writing-group' },
                { title:'Assessoria', page:'about/advisory' }
            ] 
        },
        { 
            title:'Notícias', 
            page: user?.isAdmin ? 'admin/news' :  'news', 
            sided:'news', 
            options: user?.isAdmin ? [
                { title:'Minhas matérias', page:'admin/news' },
                { title:'Notícias', page:'news' }
            ] : []
        },
        { 
            title:'Blog', 
            page: user?.isAdvisor || user?.isAdmin? 'advisor/blog' : 'blog' ,
            sided: 'blog',
            options: user?.isAdvisor || user?.isAdmin ? [
                { title:'Minhas matérias', page:'advisor/blog' },
                { title:'Blog', page:'blog' }
            ] : []
        },
        { 
            title:'Sobre', 
            page:'about', 
            options:[
                { title:'Grupos de escrita', page:'about' },
                { title:'Development editing', page:'about/development' },
                { title:'Rede AWARD', page:'about/network' },
                { title:'Universidades participantes', page:'about/universities' }
            ] 
        },
        !user ? null : { title:'Sair', action:() => exit() }
    ].filter(ff => ff) 
  
    const exit = async () => {
        await DoLogout()
        navigate('login')
    }

    useEffect(() => { window.scrollTo(0,0) ;},[])

    return ( 
        <ThemedComponent>
            <Content>
                <Header />
                {
                    !sided ? children : <SideHeader sided={sided} sideOptions={sideOptions}>
                        { children }
                    </SideHeader> 
                }
                <Footer /> 
            </Content>
        </ThemedComponent>
    );
}