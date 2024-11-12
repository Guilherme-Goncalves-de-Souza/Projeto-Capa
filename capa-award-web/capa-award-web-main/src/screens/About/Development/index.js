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




    ItemCardNews,
    ItemCardNewsHeader,
    ItemCardNewsBody,
    ItemCardNewsImage,
    ItemCardNewsrowInfos,
    ItemCardNewsrowInfosTitle,
    ItemCardNewsrowInfosContentBadges,
    ItemCardNewsrowInfosBadge,
    ItemCardNewsBodyTitle,
    ItemCardNewsBodyText,

    BodyContentCenter,


    CardAwards,
    CardAwardsHeader,
    CardAwardsHeaderIcon,
    CardAwardsBody,

    BodySearch,
    BodySearchItemIcon


} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Input from "components/Form/Input";
import useController from "./controller";
import { Load, LoadCenter } from "ui/styled";

export default function AboutDevelopment(){ 
 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

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