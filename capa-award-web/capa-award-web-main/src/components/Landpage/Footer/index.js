import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';

import {
    FooterContainer,
    
    FooterFlagUS
} from './styled' 

export default function Footer({ spaced }){ 
 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <> 
            <FooterContainer>
                <Container>

                    <Row>
                        <Col></Col>
                            { 
                                spaced ? <>
                                    <Col></Col>
                                </> : null 
                            }
                        <Col>
                            <FooterFlagUS /> 
                        </Col>
                        <Col></Col>
                    </Row>

                </Container>
            </FooterContainer>
        </>
    );
}