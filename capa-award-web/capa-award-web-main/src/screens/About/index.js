import React from "react"; 
 
import { 
    BannerContainer, 
    BannerShadow,
    CentredContainer,
    BannerTitle,
    ItemCardNewsHeader,
    ItemCardNewsBodyText,
} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import useController from "./controller";
import { Load, LoadCenter } from "ui/styled";

export default function About(){ 
    
    const { loading, register } = useController()
    
    return ( 
        <ContainerLandpage sided={'about'}> 
            <BannerContainer>
                <BannerShadow>
                    <Container>
                            <Row>
                                <Col sm={12}>
                                    <CentredContainer simple>
                                        <BannerTitle>
                                            Sobre
                                        </BannerTitle>    
                                        {
                                            loading ? 
                                            <LoadCenter>
                                                <Load />
                                            </LoadCenter>
                                                :
                                            <ItemCardNewsHeader>
                                                { register?.title }
                                                <ItemCardNewsBodyText>
                                                    { register?.text }
                                                </ItemCardNewsBodyText>
                                            </ItemCardNewsHeader> 
                                        }
                                    </CentredContainer>
                                </Col>
                            </Row>
                        </Container>
                </BannerShadow>
            </BannerContainer>
        </ContainerLandpage>
    );
}