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
    ActionsContainerEnd,
    DashboardSpacer,
    DashboardContentCentred,
    DashboardLink,
    DashboardRemoveIcon,
    DashboardTextList
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
import Radio from "components/Form/Radio";
import Check from "components/Form/Check";
import useController from "./controller";

export default function DashboardEdictCreate(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { formValue, changeForm, loading, register, data, save, remove } = useController() 

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    { register?.id ? <Button primary nospace onClick={() => remove(register.id)}>Excluir edital</Button> : <EdictItem /> }
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Cadastrar/ Editar edital</DashboardTitle>
                            
                            <EdictWrapper>   
                                <EdictItem> 
                                    <Input placeholder="Nome do edital"  value={formValue('title')} onChange={e => changeForm(e.target.value, 'title')} />
                                </EdictItem>  
                                <EdictItem> 
                                    <Select placeholder="Instituição" options={data?.instituition || []}  value={formValue('local')} onChange={val => changeForm(val, 'local')} />
                                </EdictItem> 
                                <EdictItem> 
                                    {/* <Select placeholder="Status" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} /> */}
                                    <Input placeholder="Status"  value={formValue('status')} onChange={e => changeForm(e.target.value, 'status')} />
                                </EdictItem>  
                                {/* <EdictItem /> 
                                <EdictItem />  */}
                                <Input type="textarea" placeholder="Sobre o edital"  value={formValue('text')} onChange={e => changeForm(e.target.value, 'text')} />

                                <ActionsContainer>
                                    <Button primary loading={loading} onClick={save}>Salvar</Button>
                                </ActionsContainer>

                            </EdictWrapper>
  
                            <DashboardSpacer />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}