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
    const sideOptions = [
      {
        title: "Atividades",
        page:
          user?.access_level === "Coordenador"
            ? "activities/list/edicts"
            : user?.isAdmin
            ? "dashboard/admin"
            : "activities",
        sided: "activities",
        options: user?.isAdmin
          ? [
              { title: "Assessorias", page: "activities/list/acessor" },
              { title: "Editais", page: "activities/list/edicts" },
              { title: "Artigos", page: "activities/list/article" },
              { title: "Grupos de escrita", page: "activities/center/write" },
              { title: "Instituições", page: "institution/list" },
              { title: "Áreas e departamentos", page: "area/list" },
              { title: "Usuários", page: "user/list" },
              { title: "Assessores", page: "advisor/list" },
              { title: "Grupos", page: "groups/list" },
              { title: "Estatísticas", page: "dashboard/admin" },
            ]
          : user?.access_level === "Coordenador"
          ? [
              { title: "Editais", page: "activities/list/edicts" },
              { title: "Assessoria", page: "activities/list/acessor" },
            ]
          : [
              { title: "Editais", page: "activities" },
              { title: "Histórico de artigos", page: "activities/list/article" },
              { title: "Grupos de escrita", page: "activities/center/write" },
              { title: "Assessoria", page: "activities/list/acessor" },
            ],
      },
      {
        title: "Notícias",
        page: user?.isAdmin ? "admin/news" : "news",
        sided: "news",
        options: user?.isAdmin
          ? [
              { title: "Minhas matérias", page: "admin/news" },
              { title: "Notícias", page: "news" },
            ]
          : [],
      },
      {
        title: "Blog",
        page: user?.access_level === "Coordenador" || user?.isAdmin ? "advisor/blog" : "blog",
        sided: "blog",
        options:
          user?.access_level === "Coordenador" || user?.isAdmin
            ? [
                { title: "Minhas matérias", page: "advisor/blog" },
                { title: "Blog", page: "blog" },
              ]
            : [],
      },
      {
        title: "Sobre",
        page: "about",
        sided: "about",
        options: [
          { title: "Grupos de escrita", page: "about" },
          { title: "Development editing", page: "about/development" },
          { title: "Rede AWARD", page: "about/network" },
          { title: "Universidades participantes", page: "about/universities" },
        ],
      },
      {
        title: "Perfil",
        page: "dashboard/me",
        options: [],
      },
      !user ? null : { title: "Sair", action: () => exit() },
    ].filter((ff) => ff);
 

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