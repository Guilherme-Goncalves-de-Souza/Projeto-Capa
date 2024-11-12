import React from "react"; 
 
import { 
    BannerContainer, 
    BannerShadow,
    CentredContainer, 
    BannerTitle, 
    ScrollItemsRow, 
    BodySearch,
    BodySearchItemIcon
} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import Button from "components/Form/Button";
import CardNews from "components/Landpage/Card/News";
import Input from "components/Form/Input";
import useController from "./controller";
import useSearchExpression from "hooks/useSearchExpression";
import { Load } from "ui/styled";

export default function News(){ 

    const { loading, registers } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()
 
    return ( 
        <ContainerLandpage sided={'news'}> 
            <BannerContainer banner={'banner-3'}>
                <BannerShadow white>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <CentredContainer simple>
                                    <BannerTitle white>
                                        Notícias
                                    </BannerTitle>   
                                    <BodySearch>
                                        <Input placeholder="Pesquisar" value={searchExpression} onChange={e => setSearchExpression(e.target.value)} />
                                        <Button primary square nospace>
                                            <BodySearchItemIcon />
                                        </Button>
                                    </BodySearch>
                                    <ScrollItemsRow gapped>
                                        {
                                            loading ? <Load /> :
                                            registers?.filter(filterSearchExpression)?.map((item, key) => 
                                                <CardNews key={key} item={item} /> 
                                            )
                                        }
                                    </ScrollItemsRow>      
                                </CentredContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerShadow>
            </BannerContainer>
        </ContainerLandpage>
    );
}