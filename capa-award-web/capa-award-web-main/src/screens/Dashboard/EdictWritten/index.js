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

export default function DashboardEdictWritten(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, registers, remove } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()

    const { user } = useContext(CoreContext)

    const columns = [
        { title:'Nome', ref:'name' },
        { title:'Quantidade de participantes', ref:'quantity' },
        { 
            title:'Status',
            renderCell: ({ row }) => !row?.status ? null : <>
                <ContentTableStatus status={row?.status}>
                    { row?.status }
                </ContentTableStatus>
            </>  
        },
        { 
            title: 'Ações', 
            renderCell: ({ row }) => !row?.id ? null : <>
                <ContentTableAction>
                    {
                        user?.isAdmin ? 
                            <Button secondary link nospace onClick={() => navigate(`activities/center/write/${ row.id }/edit`)}>
                                Ver grupo
                            </Button>
                                :
                            <Button secondary link nospace onClick={() => navigate(`activities/center/write/${ row.id }`)}>
                                Ver mais
                            </Button>
                    }
                </ContentTableAction>
            </>  
        },
    ]
    
    const rows = [
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
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            {
                                user?.isAdmin ? 
                                <DashboardTitle centred>Listagem de centros de escrita</DashboardTitle>
                                    :
                                <DashboardTitle centred>Centros de escrita</DashboardTitle>
                            }
                            <SearchContainer>
                                <Input placeholder="Pesquisar" value={searchExpression} onChange={e => setSearchExpression(e.target.value)}  />
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