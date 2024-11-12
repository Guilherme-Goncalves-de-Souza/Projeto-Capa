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
    DashboardTextList,
    DashboardRemoveIcon
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
import useController from "./controller";
import { articleStatusOptions, booleanOptions } from "utils/options";
import { STATUS_ARTICLES } from "utils/parsers";

export default function DashboardArticleEditForm(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { formValue, changeForm, loading, register, data, addTo, removeTo, save } = useController() 

    const genericOptions = [
        { title:'Option 1', id:1 },
        { title:'Option B', id:2 },
        { title:'Other', id:3 }
    ]

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
                            <DashboardTitle centred>Configurações de  artigo</DashboardTitle>
                            

                            <EdictWrapper>
                                <EdictItem> 
                                    <Input placeholder="Nome do edital" disabled  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Input placeholder="Número de palavras"  value={formValue('number')} onChange={e => changeForm(e.target.value, 'number')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Status do artigo" options={articleStatusOptions} value={formValue('status')} onChange={val => changeForm(val, 'status')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Publicado" options={booleanOptions}  value={formValue('published')} onChange={val => changeForm(val, 'published')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Atribuir assessores" options={(data?.advisors || [])?.filter(ff => !formValue('users')?.map(m => m.id)?.includes(ff.id) )}  value={formValue('advisor')} onChange={val => addTo("users", (data?.advisors || [])?.find( fnd => fnd.id == val ) )} />
                                    {
                                        (formValue('users') || []).map((item, key) => 
                                            <DashboardTextList key={key}>
                                                { item?.name }
                                                <DashboardRemoveIcon onClick={() => removeTo("users", item)} />
                                            </DashboardTextList>
                                        )
                                    }
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Atribuir grupo" options={(data?.groups || [])?.filter(ff => !formValue('groups')?.map(m => m.id)?.includes(ff.id) )}  value={formValue('group')} onChange={val => addTo("groups", (data?.groups || [])?.find( fnd => fnd.id == val ) )}  />
                                    {
                                        (formValue('groups') || []).map((item, key) => 
                                            <DashboardTextList key={key}>
                                                { item?.name }
                                                <DashboardRemoveIcon onClick={() => removeTo("groups", item)} />
                                            </DashboardTextList>
                                        )
                                    }
                                </EdictItem> 
                            </EdictWrapper>
                            
                            <ContentTitle />

                            <DashboardTitle centred>Informações do artigo</DashboardTitle>

                            <EdictWrapper>
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Autor</b> <br />
                                        { formValue('author')?.name || formValue('font') }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Universidade/ Empresa</b> <br />
                                        { formValue('author')?.instituition?.name }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>PPG</b> <br />
                                        { formValue('author')?.ppg }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Área de atuação/ CAPES</b> <br />
                                        {formValue('author')?.sector?.name }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Nível de titulação</b> <br />
                                        { formValue('author')?.level }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>ORCiD</b> <br />
                                        { formValue('orcid') }
                                        { formValue('author')?.orcid }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>E-mail</b> <br />
                                        { formValue('author')?.email }
                                    </ContentText>
                                </EdictItem> 
                            </EdictWrapper>

                                <ContentTitle />
                                {
                                    (formValue('coauthors') || []).map((item, key) => <>
                                        <EdictWrapper key={key}>
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>Co autor</b> <br />
                                                    { item?.name }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>Universidade/ Empresa</b> <br />
                                                    { item?.instituition?.name }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>Área de atuação/ CAPES</b> <br />
                                                    { item?.sector?.name }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>ORCiD</b> <br />
                                                    { item?.orcid }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>Nível de titulação</b> <br />
                                                    { item?.level }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>Orientador</b> <br />
                                                    { item?.isAdvisor ? "Sim" : "Não" }
                                                </ContentText>
                                            </EdictItem> 
                                            <EdictItem> 
                                                <ContentText> 
                                                    <b>E-mail</b> <br />
                                                    { item?.email }
                                                </ContentText>
                                            </EdictItem> 
                                        </EdictWrapper>
                                        <ContentTitle />
                                    </>
                                    )
                                }  


                            <EdictWrapper>
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Tipo</b> <br />
                                        { formValue('type') }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Número de palavras</b> <br />
                                        { formValue('numberWords') }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Certificado</b> <br />
                                        { formValue('isCertified') ? "Sim" : "Não" }
                                    </ContentText>
                                </EdictItem> 
                            </EdictWrapper>

                            <ContentTitle />
                            
                            <EdictWrapper>
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Status</b> <br />
                                        { STATUS_ARTICLES[formValue('status')] || "" }
                                    </ContentText>
                                </EdictItem> 
                                <EdictItem> 
                                    <ContentText> 
                                        <b>Publicado</b> <br />
                                        { formValue('published') === 1 ? "Sim" : "Não" }
                                    </ContentText>
                                </EdictItem> 
                            </EdictWrapper>
                            
                            <ActionsContainer>
                                <Button primary loading={loading} onClick={save}>Salvar</Button>
                            </ActionsContainer>

                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}