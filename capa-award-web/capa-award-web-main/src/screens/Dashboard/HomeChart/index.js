import React, { useContext, useEffect, useState } from "react";  

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
    FilterButton
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import { Chart } from "react-google-charts";
import Select from "components/Form/Select";
import { SimpleRow } from "../AdvisorBlogForm/styled";
import { Read, ReadById } from "services/articles";
import { numerize } from "utils";
import { Load, LoadCenter } from "ui/styled";
import { CoreContext } from "context/CoreContext";

export default function DashboardHomeChart(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { user } = useContext(CoreContext)

    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const [registers, setRegisters] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // const data = [
    //   ["Ano", "Quantidade"],
    //   ["Jan. 2022", 1000],
    //   ["Fev. 2022", 1170],
    //   ["Mar. 2022", 660],
    //   ["Abr. 2022", 1030], 
    //   ["Mai. 2022", 1000],
    //   ["Jun. 2022", 1170],
    //   ["Jul. 2022", 660],
    //   ["Ago. 2022", 1030], 
    //   ["Set. 2022", 1000],
    //   ["Out. 2022", 1170],
    //   ["Nov. 2022", 660],
    //   ["Dez. 2022", 1030], 
    // ];
    
    const options = {
    //   chart: {
    //     title: "Company Performance",
    //     subtitle: "Sales, Expenses, and Profit: 2014-2017",
    //   },
      colors:["#13416B"]
    };

    const [verticalData, setVerticalData] = useState([])
    // const verticalData = [
    //     ["Autor", "Quantidade"],
    //     ["Sophia Mendes da Silva", 1000],
    //     ["Gabriel Fernandes dos Santos", 1170],
    //     ["Isabella Almeida da Costa", 660],
    //     ["Lucas Oliveira Souza", 1030], 
    //     ["Juliana Rodrigues da Cruz", 1000],
    //     ["Rafaela Santos de Oliveira", 1170],
    //     ["Matheus Pereira da Silva", 660],
    //     ["Letícia Ribeiro dos Santos", 1030], 
    //     ["Pedro Henrique Costa e Silva", 1000],
    // ];

    const verticalDataArea = [
        ["Área", "Quantidade"],
        ["Medicina", 1000],
        ["Engenharia", 1170],
        ["Direito", 660],
        ["Administração de empresas", 1030], 
        ["Arquitetura", 1000],
        ["Contabilidade", 1170],
        ["Marketing", 660],
        ["Tecnologia da informação", 1030],
        ["Recursos humanos", 1000]
    ];
    

      
    const verticalOptions = {
        // chart: {
        //   title: "Population of Largest U.S. Cities",
        //   subtitle: "Based on most recent and previous census data",
        // },
        hAxis: {
          title: " ",
          minValue: 0,
        },
        vAxis: {
          title: " ",
        },
        bars: "horizontal",
        axes: {
          y: {
            0: { side: "right" },
          },
        },
        colors:[ "#13416B" ]
    };
    
    const genericOptions = [
        { title:'Option 1', id:1 },
        { title:'Option B', id:2 },
        { title:'Other', id:3 }
    ]

    const init = async () => {
        setLoading(true)
        const result = await ReadById(user?.id)

        const today = new Date();
        const currentYear = today.getFullYear()


        const worksByDate = [
            'Jan', 'Fev', 'Mar',
            'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set',
            'Out', 'Nov', 'Dez'
        ].map((item, key) => [`${ item }. ${ currentYear }`, result?.filter(ff => new Date(ff.created_at).getFullYear() === currentYear && key === new Date(ff.created_at).getMonth() )?.length || 0 ] )

        const worksByUser = result?.reduce((p, c) => p?.map(m => m.id)?.includes(c?.user?.id) ? [ ...p ] : [ ...p, c?.user ], [])
                                .map((item, key) => [`${ item?.name || "N/I" }`, result?.filter(ff => ff?.user?.id === item?.id )?.length || 0 ] )

        setData([
            ["Ano", "Quantidade"],
            ...worksByDate
        ])
        
        setVerticalData([
            ["Autor", "Quantidade"],
            ...worksByUser
        ])

        setRegisters(result)

        setLoading(false)
    }

    useEffect(() => {
        init()
    }, [])

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    {
                        loading ? <Col>
                            <LoadCenter>
                                <Load />
                            </LoadCenter>
                        </Col>
                        :
                        <Col>
                            <DashboardTitle centred>Estatísticas</DashboardTitle>


                            <EdictWrapper>
                                <EdictItemTitle>Número de trabalhos realizados</EdictItemTitle>
                                <EdictItemTitle text>{ numerize(registers?.length || 0) } trabalhos realizados</EdictItemTitle>
                            </EdictWrapper>

                            <EdictWrapper>
                            <EdictItemTitle>Número de trabalhos submetidos por período</EdictItemTitle>
                                {/* <EdictItem half> 
                                    <EdictItemSubtitle>De</EdictItemSubtitle>
                                    <SimpleRow>
                                        <EdictItem> 
                                            <Select placeholder="Mês" options={genericOptions} value={formValue('start_month')} onChange={val => changeForm(val, 'start_month')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Ano" options={genericOptions} value={formValue('start_year')} onChange={val => changeForm(val, 'start_year')} />
                                        </EdictItem> 
                                    </SimpleRow>
                                </EdictItem> 
                                <EdictItem half> 
                                    <EdictItemSubtitle>Até</EdictItemSubtitle>
                                    <SimpleRow>
                                        <EdictItem> 
                                            <Select placeholder="Mês" options={genericOptions} value={formValue('end_month')} onChange={val => changeForm(val, 'end_month')} />
                                        </EdictItem> 
                                        <EdictItem> 
                                            <Select placeholder="Ano" options={genericOptions} value={formValue('end_year')} onChange={val => changeForm(val, 'end_year')} />
                                        </EdictItem> 
                                    </SimpleRow>
                                </EdictItem>  */}

                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    height="400px"
                                    data={data}
                                    options={options}
                                />
                            </EdictWrapper>

                            <EdictWrapper>
                                <EdictItemTitle>Número de trabalhos submetidos por autor</EdictItemTitle>
                                {/* <EdictItem half> 
                                    <EdictItemSubtitle>Filtrar por</EdictItemSubtitle>
                                    <SimpleRow>
                                        <EdictItem> 
                                            <Select placeholder="Ordem alfabética" options={genericOptions} value={formValue('sorter')} onChange={val => changeForm(val, 'sorter')} />
                                        </EdictItem>  
                                    </SimpleRow>
                                </EdictItem>   */}

                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    height="400px"
                                    data={verticalData}
                                    options={verticalOptions}
                                />
                            </EdictWrapper>
                            
                            
                            {/* <EdictWrapper>
                                <EdictItemTitle>Número de trabalhos submetidos por área</EdictItemTitle>
                                <EdictItem half> 
                                    <EdictItemSubtitle>Filtrar por</EdictItemSubtitle>
                                    <SimpleRow>
                                        <EdictItem> 
                                            <Select placeholder="Ordem alfabética" options={genericOptions} value={formValue('sorter')} onChange={val => changeForm(val, 'sorter')} />
                                        </EdictItem>  
                                    </SimpleRow>
                                </EdictItem>  

                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    height="400px"
                                    data={verticalDataArea}
                                    options={verticalOptions}
                                />
                            </EdictWrapper> */}

                            
                        </Col>
                    }
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}  