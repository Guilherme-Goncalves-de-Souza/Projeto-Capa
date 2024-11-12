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

export default function DashboardAdvisorListConfig(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
    
    const { formValue, changeForm, loading, register, data, save, remove, downloadArticle } = useController() 

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
                            <DashboardTitle centred>Configurações de assessorias</DashboardTitle>
                            
                            <EdictWrapper>  
                                <EdictItem> 
                                    <ContentTitle centred>Virtual - UFPR</ContentTitle>
                                    <Input placeholder="UFPR"  value={formValue('VirtualUFPR')} onChange={e => changeForm(e.target.value, 'VirtualUFPR')} />
                                    {/* <Select placeholder="" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} /> */}
                                </EdictItem>  
                                <EdictItem> 
                                    <ContentTitle centred>Presencial - UFPR</ContentTitle>
                                    <Input placeholder="UFPR"  value={formValue('FaceToFaceIFPR')} onChange={e => changeForm(e.target.value, 'FaceToFaceIFPR')} />
                                    {/* <Select placeholder="" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} /> */}
                                </EdictItem>  
                                <EdictItem> 
                                    <ContentTitle centred>Virtual - UEPG</ContentTitle>
                                    <Input placeholder="UEPG"  value={formValue('VirtualUEPG')} onChange={e => changeForm(e.target.value, 'VirtualUEPG')} />
                                    {/* <Select placeholder="" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} /> */}
                                </EdictItem>  
                            </EdictWrapper>
  
                            <DashboardSpacer />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}