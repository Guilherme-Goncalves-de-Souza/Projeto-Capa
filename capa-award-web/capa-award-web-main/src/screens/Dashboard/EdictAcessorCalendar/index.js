import React, { useEffect, useState } from "react";  

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



    DashboardCalendar,
    DashboardCalendarTitle,
    DashboardCalendarSelectors,
    DashboardCalendarWrapper,
    DashboardCalendarItem,
    DashboardCalendarItemDay,
    DashboardCalendarItemSchedule,
    DashboardCalendarItemWeek
    
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
import { Load, LoadCenter } from "ui/styled";
import { monthOptions } from "utils/options";

export default function DashboardEdictAcessorCalendar(){

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
 
    const [ formM, setFormM ] = useState({})
    const formValueM = ref => { return formM?.[ref] ? formM?.[ref] : '' ;}
    const changeFormM = ( value, ref ) => { setFormM({ ...formM, [ref]: value }) ;}  

    const [ yearOptions, setYearOptions ] = useState([])
    const [ currentMonth, setCurrentMonth ] = useState([])
    const { loading, registers, remove } = useController()

    const printCurrentMonth = () => {
        const now = new Date();
        const yrs = []
        let beginsYear = 2021
        for(let i = beginsYear; i <= now.getFullYear(); i++){
            yrs.push({ title:`${i}`, id: i })
        }
        setYearOptions(yrs)
        setFormM({
            ...formM,
            month: now.getMonth()+1,
            year: now.getFullYear(),
        })
    }

    const fullMatchDate = (date1, date2) => {
        return date1.getDate() === date2.getDate()
        && date1.getMonth() === date2.getMonth()
        && date1.getFullYear() === date2.getFullYear()
    }

    const printMonth = (y,m) => {
        const now = new Date()
        const currentMonth = new Date( y, m, 0)
        const nextMonth = new Date( y, m+1, 0)
        const daysOfMonth = []
        while(currentMonth.getTime() < nextMonth.getTime()){
            daysOfMonth.push({
                date: currentMonth.getDate(),
                month: currentMonth.getMonth(),
                year: currentMonth.getFullYear(),
                timestamp: currentMonth.getTime(),
                events: registers.filter( ff => {
                    const evDate = new Date(ff.date) 
                    return fullMatchDate(evDate, currentMonth)
                } ), 
                today: fullMatchDate(currentMonth, now)
            })
            currentMonth.setDate(currentMonth.getDate()+1)
        }
        setCurrentMonth(daysOfMonth)
    }


    useEffect(() => {
        printCurrentMonth()
    }, [registers])

    useEffect(() => {
        if( formM.month && formM.year ){
            printMonth(formM.year, formM.month-1)
        }
    }, [formM])

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        {
                            loading ? <LoadCenter>
                                <Load />
                            </LoadCenter> : 
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

                                {/* <EdictWrapper> 
                                    <EdictItem> 
                                        <Select placeholder="local" options={genericOptions}  value={formValue('local')} onChange={val => changeForm(val, 'local')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Horário" options={genericOptions}  value={formValue('hour')} onChange={val => changeForm(val, 'hour')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Assessor" options={genericOptions}  value={formValue('acessor')} onChange={val => changeForm(val, 'acessor')} />
                                    </EdictItem> 
                                </EdictWrapper> */}

                                <DashboardSpacer />

                                {/* Calendar */}
                                <DashboardCalendar>
                                    <DashboardCalendarTitle>Calendário</DashboardCalendarTitle>

                                    <DashboardCalendarSelectors>
                                        <EdictItem> 
                                            <Select placeholder="Ano" options={yearOptions}  value={formValueM('year')} onChange={val => changeFormM(val, 'year')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Mês" options={monthOptions}  value={formValueM('month')} onChange={val => changeFormM(val, 'month')} />
                                        </EdictItem> 
                                    </DashboardCalendarSelectors>
                                    <DashboardCalendarWrapper>
                                        {
                                            [
                                                'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
                                            ].map((item, key) => 
                                                <DashboardCalendarItemWeek key={key}>
                                                    { item }
                                                </DashboardCalendarItemWeek>
                                            )
                                        }
                                        {
                                            currentMonth.map((item, key) => 
                                                <DashboardCalendarItem key={key} today={item.today}>
                                                    <DashboardCalendarItemDay today={item.today}>
                                                        { item.date }
                                                    </DashboardCalendarItemDay>
                                                    {
                                                        item.events?.map((mit, mik) => 
                                                            <DashboardCalendarItemSchedule key={mik}>
                                                                { mit.title }
                                                            </DashboardCalendarItemSchedule>
                                                        )
                                                    }
                                                </DashboardCalendarItem>
                                            )
                                        }
                                    </DashboardCalendarWrapper>

                                </DashboardCalendar>


                                {/* <EdictWrapper>
                                    <EdictItem> 
                                        <Select placeholder="Tipo de trabalho" options={genericOptions}  value={formValue('workType')} onChange={val => changeForm(val, 'workType')} />
                                    </EdictItem> 
                                </EdictWrapper>
                                <ContentTitle>Formulário</ContentTitle>
                                <EdictWrapper>
                                    <EdictItem> 
                                        <Input placeholder="Nome completo"  value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Instituição" options={genericOptions} value={formValue('institution')} onChange={val => changeForm(val, 'institution')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Nível de formação" options={genericOptions}  value={formValue('level')} onChange={val => changeForm(val, 'level')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Motivo da assessoria" options={genericOptions}  value={formValue('reason')} onChange={val => changeForm(val, 'reason')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Estágio do trabalho" options={genericOptions}  value={formValue('workStage')} onChange={val => changeForm(val, 'workStage')} />
                                    </EdictItem> 
                                    <EdictItem> 
                                        <Select placeholder="Como conheceu o centro" options={genericOptions}  value={formValue('howMeet')} onChange={val => changeForm(val, 'howMeet')} />
                                    </EdictItem> 
                                </EdictWrapper>
                                <EdictItem> 
                                    <Button primary>Upload de arquivo</Button>

                                    <DashboardLink primary>
                                        arquivoparaassessoria.pdf
                                        <DashboardRemoveIcon />
                                    </DashboardLink>
                                </EdictItem>  */}


                                
                                <DashboardSpacer />
                                {/* <DashboardContentCentred>
                                    <Check label="Estou de acordo com os" />
                                    <DashboardLink>Termos de uso</DashboardLink>
                                </DashboardContentCentred>
                                <ActionsContainer>
                                    <Button primary>Prosseguir</Button>
                                </ActionsContainer> */}

                                <DashboardSpacer />
                            </FullPage>
                        }
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}