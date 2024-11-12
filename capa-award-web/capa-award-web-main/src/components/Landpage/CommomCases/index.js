import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
  
import {
    CommomContainer,
    CommomDecoration,
    CommomTitle,
    CommomList,
    CommomListItem,
    CommomAnimation
} from './styled'

export default function CommomCases(){ 

    const commomLeft = [
        { title: 'Lorem ipsum dolor sit amet'},
        { title: 'Consectetur adipiscing elit'},
        { title: 'Curabitur ut congue nisl'},
        { title: 'Duis lobortis ante'},
        { title: 'Vitae hendrerit efficitur'},
        { title: 'Quisque dolor magna'},
        { title: 'Efficitur et nunc id'},
        { title: 'Pretium porta mauris'},
        { title: 'Integer vel lobortis risus'},
        { title: 'Duis consectetur ac ante at ullamcorper'},
        { title: 'Nullam luctus sollicitudin odio'}
    ]

    const commomRight = [ 
        { title: 'Nullam luctus sollicitudin odio'},
        { title: 'Duis consectetur ac ante at ullamcorper'},
        { title: 'Integer vel lobortis risus'},
        { title: 'Pretium porta mauris'},
        { title: 'Efficitur et nunc id'},
        { title: 'Quisque dolor magna'},
        { title: 'Vitae hendrerit efficitur'},
        { title: 'Duis lobortis ante'},
        { title: 'Curabitur ut congue nisl'},
        { title: 'Consectetur adipiscing elit'},
        { title: 'Lorem ipsum dolor sit amet'},
    ]

    return ( 
        <> 
            <CommomContainer> 
                <CommomDecoration />
                <Container>
                    <Row>
                        <Col>
                            <CommomTitle> Lorem ipsum dolor sit amet</CommomTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:7}}>
                            <Row>
                                <Col md={{size:6}}>
                                    <CommomList>
                                        {
                                            commomLeft.map((item, key) => 
                                                <CommomListItem key={key}>
                                                    { item.title }
                                                </CommomListItem>
                                            )
                                        }
                                    </CommomList>
                                </Col>
                                <Col md={{size:6}}>
                                    <CommomList>
                                        {
                                            commomRight.map((item, key) => 
                                                <CommomListItem key={key}>
                                                    { item.title }
                                                </CommomListItem>
                                            )
                                        }
                                    </CommomList>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{size:5}}>
                            <CommomAnimation animationData={require('assets/lotties/particles.json')} />
                            {/* <img src={'/images/taon-illustration1.svg'} className="commom-cases-image"/> */}
                        </Col>
                    </Row>
                </Container>
            </CommomContainer>
        </>
    );
}