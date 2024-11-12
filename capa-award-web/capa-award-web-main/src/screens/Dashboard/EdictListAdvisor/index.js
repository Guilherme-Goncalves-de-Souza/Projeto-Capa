import React, { useContext, useState } from "react";  

import {  
    DashboardAnimation,
    DashboardTitle,
    DashboardText,
    SearchContainer,

    EdictWrapper,
    EdictItem,
    EdictItemTitle,
    EdictItemSubtitle,
    EdictItemContentImage,
    EdictItemImage,
    EdictItemDescription,
    EdictItemDate,

    FilterIcon,
    FilterButton,

    FullPage,
    ActionsContainer,
    ContentTitle,
    ContentText,
    ActionsEnd,
    ActionsContainerEnd,                                                                                   
    ContentTableAction,
    ContentTableStatus
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import BasicTable from "components/Form/Table";
import { parseStrapiImage } from "utils";
import { CoreContext } from "context/CoreContext";
import useController from "./controller";
import useSearchExpression from "hooks/useSearchExpression";

export default function DashboardEdictListAdvisor(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`);  

    const { user } = useContext(CoreContext)

    const { loading, registers } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()

    const columns = [
        { title:'Edital', ref:'edict' },
        { title:'Instituição', ref:'instituition' },
        !user?.isAdmin ? null : { title:'Status', ref:'status' },
        { 
            title: 'Ações', 
            renderCell: ({ row }) => !row?.id ? null : <>
                <ContentTableAction> 
                    {
                        user?.isAdmin ? 
                            <Button secondary link nospace onClick={() => navigate(`activities/create/edicts/${ row.id }`)}>
                                Configurações
                            </Button> 
                        :
                            <Button secondary link nospace onClick={() => navigate(`activities/list/article/${ row.id }`)}>
                                Ver artigos
                            </Button> 
                    }
                </ContentTableAction>
            </>
        },
    ].filter(ff => ff)
    
    const rows = [
        // { edict:'Edital exemplo', instituition:'Instituição exemplo', status:'Aberto', id:1 },
        ...registers
    ]


    const filterReports = fit => {
        // return !filterReportOptions || fit?.vwEstrutura?.id === filterReportOptions
        return true
    }

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    {
                                        user?.isAdmin ? 
                                        <Button primary nospace onClick={() => navigate('activities/create/edicts')}>Novo edital</Button>
                                            :
                                        null
                                    }
                                        {/* <Button primary nospace onClick={() => null}>Relatórios</Button> */}
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Editais</DashboardTitle>
                            <SearchContainer>
                                <Input placeholder="Pesquisar" value={searchExpression} onChange={e => setSearchExpression(e.target.value)} />
                                <FilterButton>
                                    <Button primary nospace >
                                        <FilterIcon />
                                    </Button>
                                </FilterButton>
                            </SearchContainer>

                            <BasicTable loading={loading} columns={columns} rows={rows.filter(filterSearchExpression)} />
                            
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}