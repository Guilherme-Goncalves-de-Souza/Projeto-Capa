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
    RemoveIcon,
    EditIcon,
    BlogImage,
    DashboardTextList,
    DashboardRemoveIcon,
    TextItem,

    EdictItemWrapper,
    ActionItem
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input, { MaskedInput } from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
 
import { Editor } from 'react-draft-wysiwyg'; 
import useController from "./controller";
import { parseStrapiImage } from "utils";
import UploadFile from "components/Form/UploadFile";

export default function DashboardAdminNewsForm(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { formValue, changeForm, addTag, removeTag, save, form, setForm } = useController()

    const changeImage = useCallback ( image =>  {
        setForm({ ...form, image })
    }, [ form ])


    return ( 
        <>
            <ContainerAuthenticated sided={"news"}> 
                <Row>
                    <Col>
                        <FullPage>
                            <ActionsEnd>
                                <ActionsContainerEnd>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Criar/ editar matéria</DashboardTitle>

                            <BlogImage image={ formValue('image')?.url ? parseStrapiImage(formValue('image')?.url) : null } />

                            <ActionsContainer>
                                {
                                    formValue('image')?.url ? <>
                                        <ActionItem> 
                                            <UploadFile onChange={ changeImage }>
                                                <Button link primary>
                                                    Editar imagem de capa
                                                    <EditIcon />
                                                </Button>
                                            </UploadFile>
                                        </ActionItem> 
                                        <ActionItem> 
                                            <Button link primary onClick={ () =>  changeForm(null, 'image') }>
                                                Excluir imagem de capa
                                                <RemoveIcon />
                                            </Button>
                                        </ActionItem> 
                                    </> : <>
                                        <ActionItem> 
                                            <UploadFile onChange={ changeImage}>
                                                <Button link primary>
                                                    Adicionar imagem de capa
                                                    <EditIcon />
                                                </Button>
                                            </UploadFile>
                                        </ActionItem> 
                                    </>
                                }
                            </ActionsContainer>
 
                            <EdictWrapper>
                                <EdictItem> 
                                    <Input placeholder="Título da matéria"  value={formValue('title')} onChange={e => changeForm(e.target.value, 'title')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Input placeholder="Nome do autor"  value={formValue('font')} onChange={e => changeForm(e.target.value, 'font')} />
                                </EdictItem> 
                                <EdictItem> 
                                    { formValue('created_at') ? <Input placeholder="Data de criação"  value={formValue('created_at')} onChange={e => changeForm(e.target.value, 'created_at')} disabled /> : null }
                                </EdictItem> 
                                <EdictItem /> 
                                <EdictItem> 
                                    <Input placeholder="Tags"  value={formValue('tag')} onChange={e => changeForm(e.target.value, 'tag')} onKeyDown={ev => ev.keyCode === 13 ? addTag() : null } />
                                    <EdictItemWrapper> 
                                        {
                                            (formValue('tags') || []).map((item, key) => 
                                                <DashboardTextList key={key}>
                                                    { item }
                                                    <DashboardRemoveIcon onClick={() => removeTag(key)} />
                                                </DashboardTextList>
                                            )
                                        }
                                    </EdictItemWrapper> 
                                </EdictItem> 
                                <EdictItem> 
                                    <MaskedInput mask={"99/99/9999"} placeholder="Data de postagem"  value={formValue('date')} onChange={e => changeForm(e.target.value, 'date')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <MaskedInput mask={"99:99"} placeholder="Hora de postagem"  value={formValue('time')} onChange={e => changeForm(e.target.value, 'time')} />
                                </EdictItem> 
                            </EdictWrapper>

                            <TextItem>
                                <Editor editorState={formValue('draft')} onEditorStateChange={e => changeForm(e, 'draft')} />
                            </TextItem>
                            
                            {/* <ContentText dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize( convertToHTML( formValue('text').getCurrentContent() ) ) }} /> */}

                            <ActionsContainer>
                                <Button primary onClick={save}>Salvar</Button>
                            </ActionsContainer>

                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}