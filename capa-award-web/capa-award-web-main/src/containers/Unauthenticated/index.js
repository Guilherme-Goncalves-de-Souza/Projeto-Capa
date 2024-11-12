import React, { useEffect } from "react";  
import { useHistory } from 'react-router-dom';

import { Row, Col } from 'reactstrap';   
import { ReadObject } from "services/storage"; 
import { ThemedComponent } from "ui/theme";

import {
    SideBackgroundImageContainer,
    SideBackgroundImage,
    SideBackgroundImageDegree,

    FormContent,
    AppLogo,
    Content,
    ContentIn,
    Touch
} from './styled'
import Footer from "components/Landpage/Footer";
 

export default function ContainerUnauthenticated({ children }){   
    
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const init = () => {
        const authentication = ReadObject('authentication')
        if (authentication?.jwt) {
            completeNext()
        }
    }
 
    const completeNext = () => {
        navigate('dashboard')
    }

    useEffect(() => {  
        init() 
    }, [])
    
    useEffect(() => { window.scrollTo(0,0) ;},[])

    return ( 
        <> 
            <ThemedComponent>
                <Content>
                    <ContentIn>
                        <Row>
                            <Col md={{ size:7 }}>
                                <SideBackgroundImageContainer>
                                    <SideBackgroundImage />
                                    <SideBackgroundImageDegree />
                                </SideBackgroundImageContainer>
                            </Col>
                            <Col md={{ size:5 }}>
                                <FormContent>
                                    <Touch onClick={() => navigate('')}>
                                        <AppLogo /> 
                                    </Touch>
                                    { children }
                                </FormContent>
                                <Footer spaced />
                            </Col>
                        </Row>  
                    </ContentIn>
                </Content>
            </ThemedComponent>
        </>
    );
}