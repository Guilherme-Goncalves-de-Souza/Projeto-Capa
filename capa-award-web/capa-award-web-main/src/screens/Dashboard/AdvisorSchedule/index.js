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

export default function DashboardAdvisorSchedule(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const [loading, setLoading] = useState(false)
    const { user } = useContext(CoreContext)

    const columns = [
        { title:'Data', ref:'date' },
        { 
            title: 'Ações', 
            renderCell: ({ row }) => !row?.id ? null : <>
                <ContentTableAction>
                    <Button secondary link nospace onClick={() => navigate(`activities/config/advisor/${ row.id }`)}>
                        Horários
                    </Button>
                </ContentTableAction>
            </>  
        },
    ]
    
    const rows = [
        { date:'00/00/0000', id:1 },
        { date:'00/00/0000', id:2 },
        { date:'00/00/0000', id:3 },
        { date:'00/00/0000', id:4 },
        { date:'00/00/0000', id:5 },
        { date:'00/00/0000', id:6 },
        { date:'00/00/0000', id:7 },
        { date:'00/00/0000', id:8 },
        { date:'00/00/0000', id:9 },
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
                                    <Button primary nospace onClick={() => navigate(`activities/config/advisor/create`)}>Nova disponibilidade</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                                <DashboardTitle centred>Meus horários</DashboardTitle>
                            <SearchContainer>
                                <Input placeholder="Pesquisar" />
                                <FilterButton>
                                    <Button primary nospace >
                                        <FilterIcon />
                                    </Button>
                                </FilterButton>
                            </SearchContainer> 
                            <BasicTable loading={loading} columns={columns} rows={rows.filter(filterReports)} />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}