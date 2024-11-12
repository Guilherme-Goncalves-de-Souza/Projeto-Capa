import React, { useState } from "react";  

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
    ActionsContainerEnd
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
import useController from "./controller";
import moment from "moment/moment";
import { adviceOptions } from "utils/options";

export default function DashboardAdvisorShow(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
  
    const genericOptions = [
        { title:'Option 1', id:1 },
        { title:'Option B', id:2 },
        { title:'Other', id:3 }
    ]

    const { formValue, changeForm, loading, register, data, save, remove, downloadArticle } = useController() 

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    <Button primary nospace onClick={() => null}>Comentários</Button>
                                    <Button primary nospace onClick={downloadArticle}>Download do artigo</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Assessoria</DashboardTitle>


                            <EdictWrapper>
                                <EdictItem> 
                                    <DashboardTitle>Nome assessorado</DashboardTitle>
                                    <ContentText> 
                                        { formValue('user')?.name }
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Nome assessor</DashboardTitle>
                                    <ContentText> 
                                        { formValue('advice')?.name }
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Local</DashboardTitle>
                                    <ContentText> 
                                        { formValue('local') }
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Data da assessoria</DashboardTitle>
                                    <ContentText> 
                                        { moment(formValue('date'))?.format("DD/MM/YYYY") }
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Horário da assessoria</DashboardTitle>
                                    <ContentText> 
                                        { `${ formValue('hour') || "" }`?.substring(0,5) }
                                    </ContentText>
                                </EdictItem>  
                            </EdictWrapper>
                            <DashboardTitle>Motivo</DashboardTitle>
                            <ContentText> 
                                { formValue('reason') }
                            </ContentText>


                            <EdictItem> 
                                <Select placeholder="Status" options={adviceOptions} value={formValue('status')} onChange={val => changeForm(val, 'status')} />
                            </EdictItem> 
                                
                            <EdictItem> 
                                {/* <Button primary onClick={() => navigate('activities/show/advisor/create')}>Respostas do formulário</Button> */}
                            </EdictItem> 

                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}