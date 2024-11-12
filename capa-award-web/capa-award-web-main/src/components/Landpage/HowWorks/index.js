import React, { useState } from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
 
import ToggleTab from 'components/Landpage/Toggle/Tab'
import HowWorksItem from './Item'

import {
    HowWorksContainer,
    HowWorksDecoration,
    HowWorksTitleContent,
    HowWorksTitle,
    HowWorksText
} from './styled'

export default function HowWorks(){

    const [activeTab, setActive] = useState(1)

    const tabOptions = [
        { title:'Lorem ipsum' },
        { title:'Dolor sit amet' }
    ]

    const optionsReady = [
        {
            number: '1',
            subtitle: 'Lorem ipsum dolor sit amet',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            number: '2',
            subtitle: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            number: '3',
            subtitle: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur <b>adipiscing elit</b> :)'
        },
        {
            number: '4',
            subtitle: 'Lorem',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]

    const optionsSchedule = [
        {
            number: '1',
            subtitle: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae hendrerit efficitur.'
        },
        {
            number: '2',
            subtitle: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. <b>Duis lobortis ante vitae</b> hendrerit efficitur :)'
        },
        {
            number: '3',
            subtitle: 'Lorem',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae hendrerit efficitur.'
        }
    ]

    return ( 
        <> 
            <HowWorksContainer>
                <HowWorksDecoration />
                <Container>
                    <Row>
                        <Col>
                            <HowWorksTitleContent>
                                <HowWorksTitle>Lorem ipsum dolor</HowWorksTitle>
                                <HowWorksText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl.</HowWorksText>
                            </HowWorksTitleContent>
                            <ToggleTab options={tabOptions} active={activeTab} onClick={setActive} /> 
                        </Col>
                    </Row>
                    <Row>
                        {
                            activeTab === 0 ? 
                                optionsSchedule.map((item, key) => 
                                    <Col key={key} md={{ size:4 }}>
                                        <HowWorksItem number={ item.number } subtitle={ item.subtitle } text={ item.text } variant={key} />
                                    </Col>
                                )
                            : null
                        } 
                        {
                            activeTab === 1 ? 
                                optionsReady.map((item, key) => 
                                    <Col key={key} md={{ size:3 }}>
                                        <HowWorksItem number={ item.number } subtitle={ item.subtitle } text={ item.text } variant={key} />
                                    </Col>
                                )
                            : null
                        } 
                    </Row>
                </Container>
            </HowWorksContainer>
        </>
    );
}