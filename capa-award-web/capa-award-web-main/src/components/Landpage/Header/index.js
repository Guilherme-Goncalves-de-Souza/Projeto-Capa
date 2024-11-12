import React, { useContext, useState } from 'react'

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';
 
import { 
    HeaderContainer,
    RowCenter,
    RowEnd,
    AppLogo,
    HeaderLeftMenu,
    HeaderMenuItem,
    HeaderMobile,
    MenuIcon,
    HeaderMobileMenu,
    HeaderMobileItem,
    HiddenMobile,
    LogoTouch,
    ButtonMenu
} from './styled';

import { 
    Touch,
    ButtonWhite
} from 'ui/styled';
import Button from 'components/Form/Button';
import { CoreContext } from 'context/CoreContext';

export default function Header(){
    
    const { user } = useContext(CoreContext)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const history = useHistory();

    const navigate = to => history.push(`/${ to }`);

    const options = {
        left:[
            { title:'Inicio', active:true, action:() => navigate('') },
            { title:'Sobre', action:() => navigate('about') }
        ],
        right:user?.name ? [
            { title:`Olá, ${ user?.name }`, button:true, outline:true, icon:true, action:() => navigate('dashboard') },
        ] : [ 
            { title:'Login', button:true, action:() => navigate('login') },
            { title:'Cadastre-se', button:true, outline:true, action:() => navigate('register') },
        ]
    }
    
    return (
        <>
            <HeaderContainer>
                <Container fluid>
                    <Row>
                        <Col md={{ size:5 }}>
                            {/* <RowEnd></RowEnd> */}
                            <HiddenMobile>
                                <RowCenter>
                                    {
                                        options?.right?.map((item, key) => item.button ? 
                                            <Button key={key} nospace link={item.outline} square primary onClick={item.action}>
                                                { item.icon ? <ButtonMenu /> : null }
                                                { item.title }
                                            </Button> 
                                                :
                                            <HeaderMenuItem key={key} className={item.active ? "active" : ""} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                        )
                                    } 
                                </RowCenter>
                            </HiddenMobile>
                        </Col>
                        <Col md={{ size:7 }}> 
                            <RowCenter>
                                <LogoTouch onClick={() => navigate('')}>
                                    <AppLogo />
                                </LogoTouch>
                                {/* <HeaderLeftMenu>
                                    {
                                        options?.left?.map((item, key) => item.button ? 
                                            <Button key={key} nospace outline={item.outline} onClick={item.action}>{ item.title }</Button> 
                                                :
                                            <HeaderMenuItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                        )
                                    } 
                                </HeaderLeftMenu> */}
                                <HeaderMobile>
                                    <Touch className="touch" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                        <MenuIcon />
                                    </Touch>
                                    {
                                        mobileMenuOpen ? 
                                            <HeaderMobileMenu>
                                                {
                                                    [...options?.left, ...options?.right]?.map((item, key) => item.button ? 
                                                        <HeaderMobileItem key={key} centred> 
                                                            <Button nospace outline={item.outline} nomargin onClick={item.action}>{ item.title }</Button> 
                                                        </HeaderMobileItem>
                                                            :
                                                        <HeaderMobileItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMobileItem>
                                                    )
                                                }  
                                            </HeaderMobileMenu>
                                        : null
                                    }
                                </HeaderMobile>
                            </RowCenter> 
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
        </>
    )
}