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

export default function DashboardAdvisorScheduleForm(){

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
                                    <Button primary nospace onClick={() => null}>Horários</Button>
                                    <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                </ActionsContainerEnd>
                            </ActionsEnd>
                            <DashboardTitle centred>Configurações de horários</DashboardTitle>
                            <ContentText> 
                                Informe as datas e horários disponíveis para assessoria
                            </ContentText>

                            <EdictWrapper> 
                                <EdictItem> 
                                    <Radio label={"Marcar apenas um dia disponível"} checked={ formValue('howMany') === 'once' } onChange={() => changeForm('once', 'howMany')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Radio label={"Marcar frequência de dias disponíveis"} checked={ formValue('howMany') === 'many' } onChange={() => changeForm('many', 'howMany')} />
                                </EdictItem> 
                                <EdictItem />  
                                <EdictItem />  
                                
                                <EdictItem> 
                                    <Select placeholder="Dias da semana" options={genericOptions} value={formValue('weekDay')} onChange={val => changeForm(val, 'weekDay')} />
                                    {
                                        [
                                            'Segunda-feira',
                                            'Terça-feira'
                                        ].map((item, key) => 
                                            <DashboardTextList key={key}>
                                                { item }
                                                <DashboardRemoveIcon />
                                            </DashboardTextList>
                                        )
                                    }
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="local" options={genericOptions}  value={formValue('local')} onChange={val => changeForm(val, 'local')} />
                                </EdictItem> 
                                <EdictItem> 
                                    <Select placeholder="Horário" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} />
                                </EdictItem> 
                                {/* <EdictItem> 
                                    <Select placeholder="Assessor" options={genericOptions}  value={formValue('acessor')} onChange={val => changeForm(val, 'acessor')} />
                                </EdictItem>   */}
                            </EdictWrapper>
  
                            <DashboardSpacer />
                        </FullPage>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}