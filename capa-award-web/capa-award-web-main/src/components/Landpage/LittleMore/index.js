import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 

import {
    MoreContainer,
    MoreRow,
    MoreTitle,
    MoreLine,
    MoreText,
    MoreLogoCircle,
    MoreLogo,
    MoreDecoration
} from './styled' 

export default function LittleMore(){ 
 
    return ( 
        <> 
            <MoreContainer>
                <MoreRow>
                    <Container>
                        <Row>
                            <Col md={{size:7}}>
                                <MoreTitle>About</MoreTitle>
                                <MoreLine /> 
                                <MoreText>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae hendrerit efficitur. Quisque dolor magna, efficitur et nunc id, pretium porta mauris. Integer vel lobortis risus. Duis consectetur ac ante at ullamcorper. Nullam luctus sollicitudin odio, eu gravida lorem efficitur ac. Nam pulvinar consequat cursus. Maecenas convallis sagittis erat, at tristique lectus pharetra et. In eget metus nisl. Maecenas orci ipsum, sagittis non erat eleifend, dignissim suscipit mi. Ut a tellus quis enim pellentesque fringilla. Sed in malesuada felis, eget volutpat neque.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae hendrerit efficitur. Quisque dolor magna, efficitur et nunc id, pretium porta mauris. Integer vel lobortis risus. Duis consectetur ac ante at ullamcorper. Nullam luctus sollicitudin odio, eu gravida lorem efficitur ac. Nam pulvinar consequat cursus. Maecenas convallis sagittis erat, at tristique lectus pharetra et. In eget metus nisl. Maecenas orci ipsum, sagittis non erat eleifend, dignissim suscipit mi. Ut a tellus quis enim pellentesque fringilla. Sed in malesuada felis, eget volutpat neque.
                                    </p>
                                </MoreText> 
                            </Col>
                            <Col md={{size:5}}>
                                <MoreLogoCircle>
                                    <MoreLogo />
                                </MoreLogoCircle>
                            </Col>
                        </Row>
                    </Container>
                </MoreRow>
                <MoreDecoration />
            </MoreContainer>
        </>
    );
}