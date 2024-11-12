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
    DashboardTextList,
    DashboardLinkRow
    
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
import { turnOptions, weekOptions } from "utils/options";
import { Load, LoadCenter } from "ui/styled";
import UploadFile from "components/Form/UploadFile";
import { parseStrapiImage } from "utils";

export default function DashboardEdictAcessorForm(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { formValue, changeForm, loading, register, data, save, remove, addTo, removeTo, file, setFile } = useController()  
    
    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        {
                            loading ? <LoadCenter>
                                <Load />
                            </LoadCenter>   :
                            <FullPage>
                                <ActionsEnd>
                                    <ActionsContainerEnd>
                                        <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                    </ActionsContainerEnd>
                                </ActionsEnd>
                                <DashboardTitle centred>Inscrição para nova assessoria</DashboardTitle>
                                <ContentText> 
                                    Preencha os campos solicitados e selecione o dia de assessoria que deseja para prosseguir.
                                </ContentText>

                                <EdictWrapper> 
                                    <EdictItem> 
                                        <Radio label={"Marcar apenas uma assessoria"} checked={ formValue('howMany') === 'once' } onChange={() => changeForm('once', 'howMany')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Radio label={"Marcar frequência de assessorias"} checked={ formValue('howMany') === 'many' } onChange={() => changeForm('many', 'howMany')} />
                                    </EdictItem> 
                                    <EdictItem />  
                                    <EdictItem />  
                                    <EdictItem> 
                                        { formValue('howMany') === 'many' ? <Input type="number" placeholder="Quantidade" value={formValue('qtd')} onChange={e => changeForm(e.target.value, 'qtd')} /> : null }
                                    </EdictItem> 
                                    
                                    {
                                         formValue('howMany') === 'many'  ? <>  
                                            <EdictItem> 
                                                <Select placeholder="Dias da semana" options={(weekOptions || [])?.filter(ff => !(formValue('weekdays') || [])?.map(m => m.id)?.includes(ff.id) )} onChange={val => addTo("weekdays", (weekOptions || [])?.find( fnd => fnd.id == val ) )}  />
                                                {
                                                    (formValue('weekdays') || [])?.map((item, key) => 
                                                        <DashboardTextList key={key} onClick={() => removeTo("weekdays", item)}>
                                                            { item.title }
                                                            <DashboardRemoveIcon />
                                                        </DashboardTextList>
                                                    )
                                                }
                                            </EdictItem> 
                                         </> : <>
                                            <EdictItem> 
                                                <Select placeholder="Dia da semana" options={weekOptions}  value={formValue('weekDay')} onChange={val => changeForm(val, 'weekDay')} />
                                            </EdictItem> 
                                         </>
                                    }

                                    <EdictItem> 
                                        <Select placeholder="local" options={data?.instituition || []}  value={formValue('local')} onChange={val => changeForm(val, 'local')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Horário" options={turnOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Assessor" options={data?.advisors || []}  value={formValue('acessor')} onChange={val => changeForm(val, 'acessor')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Tipo de trabalho" options={data?.sectors || []}  value={formValue('workType')} onChange={val => changeForm(val, 'workType')} />
                                    </EdictItem> 
                                </EdictWrapper>


                                <DashboardSpacer />
                                <ContentTitle>Formulário</ContentTitle>
                                <EdictWrapper>
                                    <EdictItem> 
                                        <Input placeholder="Nome completo"  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Instituição" options={data?.instituition || []} value={formValue('institution')} onChange={val => changeForm(val, 'institution')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        {/* <Select placeholder="Nível de formação" options={genericOptions}  value={formValue('level')} onChange={val => changeForm(val, 'level')} /> */}
                                        <Input placeholder="Nível de formação"  value={formValue('level')} onChange={e => changeForm(e.target.value, 'level')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        {/* <Select placeholder="Motivo da assessoria" options={genericOptions}  value={formValue('reason')} onChange={val => changeForm(val, 'reason')} /> */}
                                        <Input placeholder="Motivo da assessoria"  value={formValue('reason')} onChange={e => changeForm(e.target.value, 'reason')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        {/* <Select placeholder="Estágio do trabalho" options={genericOptions}  value={formValue('workStage')} onChange={val => changeForm(val, 'workStage')} /> */}
                                        <Input placeholder="Estágio do trabalho"  value={formValue('workStage')} onChange={e => changeForm(e.target.value, 'workStage')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        {/* <Select placeholder="Como conheceu o centro" options={genericOptions}  value={formValue('howMeet')} onChange={val => changeForm(val, 'howMeet')} /> */}
                                        <Input placeholder="Como conheceu o centro"  value={formValue('howMeet')} onChange={e => changeForm(e.target.value, 'howMeet')} />
                                    </EdictItem> 
                                </EdictWrapper>
                                <EdictItem> 

                                    <UploadFile onChange={ setFile }>
                                        <Button primary>Upload de arquivo</Button>
                                    </UploadFile>
                                    {
                                        !file ? null :
                                        <DashboardLinkRow>
                                            <DashboardLink primary onClick={() => window.open(parseStrapiImage(file?.url))}>
                                                { file?.name }
                                            </DashboardLink>
                                            <DashboardRemoveIcon onClick={() => setFile(null)} />
                                        </DashboardLinkRow>
                                    }
                                </EdictItem> 


                                
                                <DashboardSpacer />
                                <DashboardContentCentred>
                                    <Check label="Estou de acordo com os" checked={ formValue('terms') } onChange={() =>  changeForm(!formValue('terms'), 'terms') } />
                                    <DashboardLink>Termos de uso</DashboardLink>
                                </DashboardContentCentred>

                                <ActionsContainer>
                                    <Button primary loading={loading} onClick={save}>Prosseguir</Button>
                                </ActionsContainer>

                                <DashboardSpacer />
                            </FullPage>
                        }
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}