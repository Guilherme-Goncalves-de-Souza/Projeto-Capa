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

export default function DashboardEdictWrittenFormEdit(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
    
    const { loading, register, accept, reject } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()

    const columns = [
        { title:'Nome', ref:'name' }, 
        { 
            title: 'Ações', 
            renderCell: ({ row }) => ( !row?.id || row.accepted !== null ) ? null : <>
                <ContentTableAction> 
                    <Button color={"green"} small nospace onClick={() => accept(row)}>
                        Aceitar
                    </Button> 
                    <Button color={"red"} small nospace onClick={() => reject(row)}>
                        Rejeitar
                    </Button> 
                </ContentTableAction>
            </>
        },
    ].filter(ff => ff)
    
    const rows = [ 
        ...(register?.participant?.filter(ff => !(ff.accepted === false) ) || [])
    ]
 

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    <Button primary nospace onClick={() => navigate(`activities/create/edicts/${ 1 }`)}>Configurações do grupo</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Centro de escrita exemplo</DashboardTitle>
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