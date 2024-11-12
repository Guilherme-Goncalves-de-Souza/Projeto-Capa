import React, { useContext, useEffect } from "react";  
 
import Header from 'components/Landpage/Header'  
import Footer from 'components/Landpage/Footer' 
  
import { 
    DashboardPage,
    DashboardBody,
    DashboardBodyContent,
    Content
} from "./styled";
import { ReadObject } from "services/storage";
import { useHistory } from "react-router-dom";
import { ThemedComponent } from "ui/theme";
import SideHeader from "components/SideHeader";
import { CoreContext } from "context/CoreContext";
import { DoLogout } from "services/authentication";

export default function ContainerAuthenticated({ children, sided }){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { user, setUser } = useContext(CoreContext)

    const init = () => {
        const authentication = ReadObject('authentication')
        if (!authentication?.jwt) {
            completeNext()
        }
    }

    // console.log('user', user)

    const sideOptions = ([
        { 
            title:'Atividades', 
            page: user?.isAdvisor ? 'activities/list/edicts' : user?.isAdmin ? 'dashboard/admin' : 'activities',
            sided: 'activities',
            options: user?.isAdmin ? [
                { title:'Assessorias', page:'activities/list/acessor' },
                { title:'Editais', page:'activities/list/edicts' },
                { title:'Artigos', page:'activities/list/article' },
                { title:'Grupos de escrita', page:'activities/center/write' },
                { title:'Instituições', page:'institution/list' },
                { title:'Áreas e departamentos', page:'area/list' },
                { title:'Usuários', page:'user/list' },
                { title:'Assessores', page:'advisor/list' },
                { title:'Grupos', page:'groups/list' },
                { title:'Estatísticas', page:'dashboard/admin' }
            ] :  user?.isAdvisor ? [
                { title:'Editais', page:'activities/list/edicts' }, 
                { title:'Assessoria', page:'activities/list/acessor' }
            ] : [
                { title:'Editais', page:'activities' },
                { title:'Histórico de editais', page:'activities/list/article' },
                { title:'Grupos de escrita', page:'activities/center/write' },
                { title:'Assessoria', page:'activities/list/acessor' }
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
        !user ? null : { title:'Sair', action:() => exit() },
    ]).filter(ff => ff)
 

    const exit = async () => {
        await DoLogout()
        setUser({})
        navigate('login')
    }

    const completeNext = () => {
        navigate('login')
    }

    useEffect(() => {  
        init() 
    }, [])

    useEffect(() => { window.scrollTo(0,0) ;},[])

    return ( 
        <>
            <ThemedComponent>
                <Content>
                    <DashboardPage>
                        <Header authenticated /> 
                        <SideHeader sided={sided} sideOptions={sideOptions}>
                            <DashboardBody> 
                                <DashboardBodyContent>                     
                                    { children }
                                </DashboardBodyContent>
                            </DashboardBody>  
                        </SideHeader>
                        <Footer />
                    </DashboardPage> 
                </Content>
            </ThemedComponent>
        </>
    );
}