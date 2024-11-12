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
import useSearchExpression from "hooks/useSearchExpression";

export default function DashboardListGroups(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
 
    const { loading, registers, remove } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()

    const columns = [
        { title:'Nome equipe', ref:'name' },
        { title:'Participantes', ref:'members' }, 
        // { 
        //     title: 'Ações', 
        //     renderCell: ({ row }) => !row?.id ? null : <>
        //         <ContentTableAction>
        //             <Button secondary small link nospace onClick={() => edit(`${ row.id }`)}>
        //                 <EditIcon />
        //             </Button>
        //             <Button secondary small link nospace onClick={() => remove(`${ row.id }`)}>
        //                 <RemoveIcon />
        //             </Button>
        //         </ContentTableAction>
        //     </>  
        // },
    ]
    
    const rows = [
        // { name:'Equipe exemplo', members:'João, Felipe, Marcos', id:1 },
        ...registers
    ]

    const edit = (id) => {
        // navigate(`advisor/blog/${id}`)
    } 

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    {/* <Button primary nospace onClick={() => null}>Novo grupo</Button> */}
                                    <Button link nospace />
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Listagem de grupos</DashboardTitle>
                            <SearchContainer>
                                <Input placeholder="Pesquisar" value={searchExpression} onChange={e => setSearchExpression(e.target.value)}  />
                                <FilterButton>
                                    <Button primary nospace >
                                        <FilterIcon />
                                    </Button>
                                </FilterButton>
                            </SearchContainer>

                            <BasicTable loading={loading} columns={columns} rows={rows?.filter(filterSearchExpression)} />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}