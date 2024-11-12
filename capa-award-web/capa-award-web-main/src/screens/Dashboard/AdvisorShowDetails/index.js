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


    ContentNote,
    ContentNoteHeader,
    ContentNoteRemove,
    ContentNoteBody,
    ContentNoteBodyHeader,
    
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";

export default function DashboardAdvisorShowDetails(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

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
                            <DashboardTitle centred>Nome assessorado exemplo</DashboardTitle>

                            <EdictWrapper>
                                <EdictItem> 
                                    <DashboardTitle>Universidade/ Empresa</DashboardTitle>
                                    <ContentText> 
                                        Exemplo
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>PPG</DashboardTitle>
                                    <ContentText> 
                                        Exemplo
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Área de atuação/ CAPES</DashboardTitle>
                                    <ContentText> 
                                        Exemplo
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>Nível de titulação</DashboardTitle>
                                    <ContentText> 
                                        Exemplo
                                    </ContentText>
                                </EdictItem>  
                                <EdictItem> 
                                    <DashboardTitle>ORCiD</DashboardTitle>
                                    <ContentText> 
                                        Exemplo
                                    </ContentText>
                                </EdictItem>  
                            </EdictWrapper>



                            <ContentTitle>Notas sobre o cliente</ContentTitle>


                            <ContentNote>
                                <ContentNoteHeader>
                                    <ContentNoteRemove />
                                </ContentNoteHeader>
                                <ContentNoteBody>
                                    <ContentNoteBodyHeader>
                                        <ContentTitle line>Nome Assessor exemplo</ContentTitle>
                                        <ContentText> 00/00/0000 </ContentText>
                                    </ContentNoteBodyHeader>
                                    <ContentText> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci in convallis feugiat, nisi risus auctor tortor, ut egestas nulla nisl suscipit dui. Phasellus nec nunc sed massa maximus ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci in convallis feugiat, nisi risus auctor tortor, ut egestas nulla nisl suscipit dui. Phasellus nec nunc sed massa maximus ullamcorper.
                                    </ContentText>
                                </ContentNoteBody>
                            </ContentNote>

                            <ActionsContainer>
                                <Button primary>Adicionar nota</Button>
                            </ActionsContainer>


                            
                            <ContentTitle>Notas sobre o cliente</ContentTitle>


                            <ContentNote>
                                <ContentNoteHeader>
                                    <ContentNoteRemove />
                                </ContentNoteHeader>
                                <ContentNoteBody>
                                    <ContentNoteBodyHeader>
                                        <ContentTitle line>Nome Assessor exemplo</ContentTitle>
                                        <ContentText> 00/00/0000 </ContentText>
                                    </ContentNoteBodyHeader>
                                    <ContentText> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci in convallis feugiat, nisi risus auctor tortor, ut egestas nulla nisl suscipit dui. Phasellus nec nunc sed massa maximus ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, orci in convallis feugiat, nisi risus auctor tortor, ut egestas nulla nisl suscipit dui. Phasellus nec nunc sed massa maximus ullamcorper.
                                    </ContentText>
                                </ContentNoteBody>
                            </ContentNote>


                            <ActionsContainer>
                                <Button primary>Adicionar nota</Button>
                            </ActionsContainer>
 
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}