import React, { useContext, useEffect, useState } from "react";  

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
    ContentTableStatus,
    EditIcon,
    RemoveIcon
    
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

export default function DashboardAdminNews(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, registers, remove } = useController()

    const columns = [
        { title:'Notícia', ref:'name' },
        { title:'Autor', ref:'author' },
        { title:'Data postagem', ref:'date' },
        { title:'Hora postagem', ref:'time' }, 
        { 
            title: 'Ações', 
            renderCell: ({ row }) => !row?.id ? null : <>
                <ContentTableAction>
                    <Button secondary small link nospace onClick={() => edit(`${ row.id }`)}>
                        <EditIcon />
                    </Button>
                    <Button secondary small link nospace onClick={() => remove(`${ row.id }`)}>
                        <RemoveIcon />
                    </Button>
                </ContentTableAction>
            </>  
        },
    ]
    
    const rows = [ ...registers ]

    const edit = (id) => {
        navigate(`admin/news/${id}`)
    } 

    return ( 
        <>
            <ContainerAuthenticated sided={"news"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    <Button primary nospace onClick={() => navigate(`admin/news/form/create`)}>Nova matéria</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Listagem de notícias</DashboardTitle>

                            <BasicTable loading={loading} columns={columns} rows={rows} />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}