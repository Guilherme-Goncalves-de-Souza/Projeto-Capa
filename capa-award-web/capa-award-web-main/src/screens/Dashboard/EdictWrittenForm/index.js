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
import { booleanOptions } from "utils/options";
import useController from "./controller";

export default function DashboardEdictWrittenForm(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { form, formValue, changeForm, instituitions, save, loading, user } = useController()
 

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
                            <DashboardTitle centred>Inscrição para centro de escrita</DashboardTitle>
                            <ContentText> 
                                <b>Sobre o grupo</b> <br />
                                { form?.description }
                            </ContentText>

                            {
                                form?.participant?.map(mm => mm?.user?.id).includes(user?.id) ? null : <>
                                    <EdictWrapper>
                                        <EdictItem> 
                                            <Input placeholder="Nome completo"  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Instituição" options={instituitions} value={formValue('institution')} onChange={val => changeForm(val, 'institution')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            {/* <Select placeholder="Nível de formação" options={genericOptions}  value={formValue('level')} onChange={val => changeForm(val, 'level')} /> */}
                                            <Input placeholder="Nível de formação"  value={formValue('level')} onChange={e => changeForm(e.target.value, 'level')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            {/* <Select placeholder="Ano de formação" options={genericOptions}  value={formValue('year')} onChange={val => changeForm(val, 'year')} /> */}
                                            <Input placeholder="Ano de formação"  value={formValue('year')} onChange={e => changeForm(e.target.value, 'year')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Deseja ser moderador" options={booleanOptions}  value={formValue('wannaBeModerator')} onChange={val => changeForm(val, 'wannaBeModerator')} />
                                        </EdictItem> 
                                    
                                    </EdictWrapper>
                                    <ActionsContainer>
                                        <Button primary onClick={save} loading={loading}>Inscrever-se</Button>
                                    </ActionsContainer>
                                </>
                            }

                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}