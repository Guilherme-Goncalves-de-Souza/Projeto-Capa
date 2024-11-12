import React from "react"; 
 
import { 
    BannerContainer, BannerShadow,

    CentredContainer,

    ContentPlus,
    PlusCircle,
    PlusIcon,
    PlusText,
    BannerTitle,
    BannerText,
    CentredContent,
    BannerDecoration,
    BannerActions,

    ScrollItems,
    ScrollItemsRow,
    ItemCard,
    ItemCardHeader,
    ItemCardBody,
    ItemCardIcon,
    ItemCardBodyText,

    BodyContentCenter,

    CardAwards,
    CardAwardsHeader,
    CardAwardsHeaderIcon,
    CardAwardsBody

} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import CardNews from "components/Landpage/Card/News";
import useController from "./controller";
import { maxLength } from "utils";

export default function Landpage(){ 
 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, about, blogs, edicts, news } = useController()

    console.log("about", about)
    
    return ( 
        <ContainerLandpage> 
            
            <BannerContainer banner={'banner-1'}>
                <BannerShadow>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} >
                                <CentredContainer>
                                    <CentredContent>
                                        <ContentPlus>
                                            <PlusCircle>
                                                <PlusIcon />
                                            </PlusCircle>
                                            <PlusText>Comunique-se com os revisores durante todo o processo</PlusText>
                                        </ContentPlus>

                                        <BannerTitle>
                                            Conheça nossos editais e agende sua assessoria
                                        </BannerTitle>
                                        <BannerText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                        </BannerText>
                                        
                                        <BannerActions>
                                            <Button secondary square onClick={() => window.scrollTo(0, document.getElementById("edict-section").offsetTop )}> Ver mais </Button>
                                        </BannerActions>
                                    </CentredContent>
                                </CentredContainer>
                            </Col>
                            <Col sm={12} md={6} >
                                <CentredContainer>
                                    <CentredContent>
                                        <BannerDecoration />
                                    </CentredContent>
                                </CentredContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerShadow>
            </BannerContainer>
            
            <BannerContainer banner={'banner-2'}>
                <BannerShadow>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <CentredContainer simple id="edict-section">
                                    <BannerTitle>
                                        Editais ativos
                                    </BannerTitle>   
                                    <ScrollItems>
                                        <ScrollItemsRow>
                                            {
                                                edicts?.map((item, key) => 
                                                    <ItemCard key={key} onClick={() => navigate(`activities/${ item?.id }`)}>
                                                        <ItemCardHeader>
                                                            { item?.title }
                                                        </ItemCardHeader>
                                                        <ItemCardBody>
                                                            <ItemCardIcon />
                                                            <ItemCardBodyText>
                                                                { maxLength(item?.text) }
                                                            </ItemCardBodyText>
                                                        </ItemCardBody>
                                                    </ItemCard>
                                                )
                                            }
                                        </ScrollItemsRow>
                                    </ScrollItems>
                                </CentredContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerShadow>
            </BannerContainer>
            
            <BannerContainer banner={'globe'}>
                <BannerShadow>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <CentredContainer simple>
                                    <CardAwards>
                                        <CardAwardsHeader>
                                            <CardAwardsHeaderIcon />
                                        </CardAwardsHeader>
                                        <CardAwardsBody>
                                            { about?.text }
                                        </CardAwardsBody>
                                    </CardAwards>
                                </CentredContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerShadow>
            </BannerContainer>
            
            <BannerContainer banner={'banner-3'}>
                <BannerShadow white>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <CentredContainer simple>
                                    <BannerTitle white>
                                        Notícias
                                    </BannerTitle>   
                                    <ScrollItemsRow gapped>
                                        {
                                            news?.map((item, key) => 
                                                <CardNews key={key} item={item} />
                                            )
                                        }
                                    </ScrollItemsRow> 
                                    <BodyContentCenter>
                                        <Button primary square onClick={() => navigate('news')}> Ver Noticias </Button>
                                    </BodyContentCenter>
                                </CentredContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerShadow>
            </BannerContainer>
            
            <BannerContainer banner={'banner-4'}>
                <BannerShadow>
                    <Container>
                            <Row> 
                                <Col sm={12} md={6} >
                                    <CentredContainer>
                                        <CentredContent two>
                                            <BannerDecoration two />
                                        </CentredContent>
                                    </CentredContainer>
                                </Col>
                                <Col sm={12} md={6} >
                                    <CentredContainer>
                                        <CentredContent>
                                            <BannerTitle>
                                                Centros de escrita
                                            </BannerTitle>
                                            <BannerText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                            </BannerText>
                                            <BannerActions>
                                                <Button secondary square onClick={() => navigate('activities/center/write')}> Ver mais </Button>
                                            </BannerActions>
                                        </CentredContent>
                                    </CentredContainer>
                                </Col>
                            </Row>
                        </Container>
                </BannerShadow>
            </BannerContainer>
            
            <BannerContainer banner={'banner-5'}>
                <BannerShadow>
                    <Container>
                            <Row>
                                <Col sm={12}>
                                    <CentredContainer simple>
                                        <BannerTitle>
                                            Blog
                                        </BannerTitle>
                                        <ScrollItemsRow gapped>
                                            {
                                                blogs?.map((item, key) => 
                                                    <CardNews blog key={key} item={item} /> 
                                                )
                                            }
                                        </ScrollItemsRow> 
                                        <BodyContentCenter>
                                            <Button secondary square onClick={() => navigate('blog')}> Ver blog </Button>
                                        </BodyContentCenter>
                                    </CentredContainer>
                                </Col>
                            </Row>
                        </Container>
                </BannerShadow>
            </BannerContainer>
 
        </ContainerLandpage>
    );
}