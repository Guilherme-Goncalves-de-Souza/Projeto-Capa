import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
 
import CardSelect from 'components/Landpage/Card/Select'

import { 
    BannerImage,
    BannerOut,
    BannerContent
} from "./styled"; 

export default function Banner(){
    return ( 
        <> 
            <BannerImage>
                <BannerOut />
                <BannerContent>
                    <Container>
                        <Row>
                            <Col md={{ size: 6 }}> 
                                <CardSelect /> 
                            </Col>
                        </Row>
                    </Container>
                </BannerContent>
            </BannerImage>
        </>
    );
}