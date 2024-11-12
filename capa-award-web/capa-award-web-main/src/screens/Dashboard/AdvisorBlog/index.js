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

export default function DashboardAdvisorBlog(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, registers, remove } = useController()

    const columns = [
        { title:'Matéria', ref:'name' },
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
        navigate(`advisor/blog/${id}`)
    }

    return ( 
        <>
            <ContainerAuthenticated sided={"blog"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    <Button primary nospace onClick={() => navigate(`advisor/blog/create`)}>Nova matéria</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Controle de blog</DashboardTitle>

                            <BasicTable loading={loading} columns={columns} rows={rows} />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}