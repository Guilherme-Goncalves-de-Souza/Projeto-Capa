import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 

import Item from './Item'

import {
    MoreTitle,
    MoreText,
    KnowContent
} from './styled' 

export default function KnowMore(){ 

    const doctors = [
        {
            image: 'https://loremflickr.com/320/320/art,grafite?random=1',
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum',
            rate: 5,
            avaliations: 5,
            description: 'dolor sit amet',
            available: '19/01/2021'
        },
        {
            image: 'https://loremflickr.com/320/320/art,grafite?random=2',
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum',
            rate: 5,
            avaliations: 5,
            description: 'dolor sit amet',
            available: '19/01/2021'
        },
        {
            image: 'https://loremflickr.com/320/320/art,grafite?random=3',
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum',
            rate: 5,
            avaliations: 5,
            description: 'dolor sit amet',
            available: '19/01/2021'
        },
        {
            image: 'https://loremflickr.com/320/320/art,grafite?random=4',
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum',
            rate: 5,
            avaliations: 5,
            description: 'dolor sit amet',
            available: '19/01/2021'
        }
    ]
 
    return ( 
        <> 
            <KnowContent>
                <Container>
                    <Row>
                        <Col>
                            <MoreTitle>Know More :)</MoreTitle>
                            <MoreText>Lorem ipsum dolor sit amet, consectetur adipiscing <b>elit</b></MoreText>
                        </Col>
                    </Row> 
                    <Row>
                        {
                            doctors.map((item, key) => 
                                <Col key={key} md={{ size:6 }}> 
                                    <Item {...item} />
                                </Col>
                            )
                        }
                    </Row>  
                </Container> 
            </KnowContent>
        </>
    );
}