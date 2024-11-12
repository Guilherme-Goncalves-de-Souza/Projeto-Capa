import React, { useCallback, useState } from "react";  

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

    ContentFileUploaded,
    ContentFileUploadedRemove
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
import useController from "./controller";
import { booleanOptions } from "utils/options";
import UploadFile from "components/Form/UploadFile";
import { parseStrapiImage } from "utils";

export default function DashboardEdictForm(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
 
    const { 
        formValue, 
        changeForm, 
        save, 
        credtis, 
        instituitions, 
        sectors, 
        coauthors, 
        addCoAuthor, 
        removeCoAuthor, 
        form, 
        setForm, 
        file, 
        setFile, 
        knowledgementTerm, 
        setKnowledgementTerm, 
        model,
        loading
    } = useController()  

    const changeKnowledgement = useCallback( f =>  {
        setKnowledgementTerm(f)
    }, [ form ])

    const changeArticle = useCallback( f =>  {
        console.log("setFile", f )
        setFile( f )
    }, [ form ])

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
                            <DashboardTitle centred>Envio de artigo</DashboardTitle>

                            <DashboardTitle>Autor</DashboardTitle>
                            <EdictWrapper>
                                <EdictItem> 
                                    <Input placeholder="Nome autor principal"  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Instituição" options={instituitions} value={formValue('institution')} onChange={val => changeForm(val, 'institution')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="CRediT" options={credtis}  value={formValue('credit')} onChange={val => changeForm(val, 'credit')} />
                                </EdictItem>
                                <EdictItem> 
                                    <Input placeholder="ORCiD"  value={formValue('orcid')} onChange={e => changeForm(e.target.value, 'orcid')} />
                                </EdictItem> 
                                
                                {/* 
                                <EdictItem>
                                    <Select placeholder="Setor/ Departamento" options={genericOptions}  value={formValue('sector')} onChange={val => changeForm(val, 'sector')} />
                                </EdictItem>
                                */}

                                <EdictItem> 
                                    <Input placeholder="PPG"  value={formValue('ppg')} onChange={e => changeForm(e.target.value, 'ppg')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Área de atuação" options={formValue('institution') ? sectors.filter(ff => ff?.instituition?.id == formValue('institution') ) : []}  value={formValue('area')} onChange={val => changeForm(val, 'area')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Input placeholder="E-mail"  value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')} />
                                </EdictItem> 
                            </EdictWrapper>

                            {
                                coauthors?.map((item, key) => <>
                                    <ContentTitle></ContentTitle>
                                    <DashboardTitle>Co autor</DashboardTitle>
                                    <EdictWrapper>
                                        <EdictItem> 
                                            <Input placeholder="Nome co autor"  value={formValue(`co_name${ key }`)} onChange={e => changeForm(e.target.value, `co_name${ key }`)} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Instituição" options={instituitions} value={formValue(`co_institution${ key }`)} onChange={val => changeForm(val, `co_institution${ key }`)} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="CRediT" options={credtis}  value={formValue(`co_credit${ key }`)} onChange={val => changeForm(val, `co_credit${ key }`)} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Input placeholder="ORCiD"  value={formValue(`co_orcid${ key }`)} onChange={e => changeForm(e.target.value, `co_orcid${ key }`)} />
                                        </EdictItem> 
                                        
                                        <EdictItem> 
                                            <Select placeholder="É orientador?" options={booleanOptions}  value={formValue(`is_supervisor${ key }`)} onChange={val => changeForm(val, `is_supervisor${ key }`)} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Área de atuação" options={formValue(`co_institution${ key }`) ? sectors.filter(ff => ff?.instituition?.id == formValue(`co_institution${ key }`) ) : []}  value={formValue(`co_area${ key }`)} onChange={val => changeForm(val, `co_area${ key }`)} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Input placeholder="E-mail"  value={formValue(`co_email${ key }`)} onChange={e => changeForm(e.target.value, `co_email${ key }`)} />
                                        </EdictItem> 
                                    </EdictWrapper>
                                    <ActionsContainer>
                                        <Button link primary onClick={() => removeCoAuthor(item.id) }>Excluir co autor</Button>
                                    </ActionsContainer>
                                </>)
                            }
                            
                            <ContentTitle></ContentTitle>
                            <ActionsContainer>
                                <Button primary onClick={addCoAuthor}>Adicionar autor</Button>
                            </ActionsContainer>
 
                            <ContentText> 
                                Faça o download de um modelo de Termo de ciência para obter a referência de preenchimento do seu modelo.
                            </ContentText>
                            <EdictItem>
                                <Button primary onClick={() => model?.file?.url ? window.open(parseStrapiImage(model?.file?.url)) : null } >Modelo de Termo de ciência</Button>
                            </EdictItem>
                            <ContentText small> 
                                Insira o seu termo de ciência preenchido através do botão abaixo.
                            </ContentText>
                            <EdictItem>
                                <UploadFile onChange={ changeKnowledgement }>
                                    <Button primary>Termo de ciência</Button>
                                </UploadFile>
                            </EdictItem>

                            {
                                !knowledgementTerm?.name ? null :
                                    <ContentFileUploaded>
                                        <ContentText link onClick={() => window.open(`${ parseStrapiImage(knowledgementTerm?.url) }`)}> 
                                            {knowledgementTerm?.name }
                                        </ContentText>
                                        <ContentFileUploadedRemove onClick={() => setKnowledgementTerm( null ) } />
                                    </ContentFileUploaded>
                            }
                            <EdictItem>
                                <UploadFile accept={"application/pdf"} onChange={ changeArticle }>
                                    <Button primary>Upload do artigo</Button>
                                </UploadFile>
                            </EdictItem>

                            {
                                !file ? null : 
                                    <ContentFileUploaded>
                                        <ContentText link onClick={() => window.open(`${ parseStrapiImage(file?.url) }`)}> 
                                            { file?.name }
                                        </ContentText>
                                        <ContentFileUploadedRemove onClick={() => setFile( null ) } />
                                    </ContentFileUploaded>
                            }

                            <ContentTitle></ContentTitle>


                            {/* <EdictWrapper>
                                <EdictItem> 
                                    <Select placeholder="Tipo" options={genericOptions} value={formValue('type')} onChange={val => changeForm(val, 'type')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Input placeholder="Número de palavras"  value={formValue('numberWords')} onChange={e => changeForm(e.target.value, 'numberWords')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Certificado" options={genericOptions}  value={formValue('certificate')} onChange={val => changeForm(val, 'certificate')} />
                                </EdictItem>
                            </EdictWrapper> */}


                            <ActionsContainer>
                                <Button primary loading={loading} onClick={save}>Prosseguir</Button>
                            </ActionsContainer>

                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}