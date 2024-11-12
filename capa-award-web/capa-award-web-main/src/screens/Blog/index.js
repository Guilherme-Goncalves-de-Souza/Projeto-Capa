import React from "react"; 
 
import { 
    BannerContainer, 
    BannerShadow,
    CentredContainer,
    BannerTitle,
    ScrollItemsRow,
    ItemCardNews,
    ItemCardNewsHeader,
    ItemCardNewsBody,
    ItemCardNewsImage,
    ItemCardNewsrowInfos,
    ItemCardNewsrowInfosTitle,
    ItemCardNewsrowInfosContentBadges,
    ItemCardNewsrowInfosBadge,
    ItemCardNewsBodyText,
    BodySearch,
    BodySearchItemIcon,
    HorizontalScroll,
    ItemTag
} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Input from "components/Form/Input";
import useController from "./controller";
import useSearchExpression from "hooks/useSearchExpression";
import { Load } from "ui/styled";
import { maxLength } from "utils";

export default function Blog(){ 
 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, registers, selectedTag, setSelectedTag, filterTag } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()
    
    return ( 
        <ContainerLandpage sided={'blog'}>
            <BannerContainer>
                <BannerShadow>
                    <Container>
                            <Row>
                                <Col sm={12}>
                                    <CentredContainer simple>
                                        <BannerTitle>
                                            Blog
                                        </BannerTitle>   
                                        <BodySearch>
                                            <Input placeholder="Pesquisar" value={searchExpression} onChange={e => setSearchExpression(e.target.value)}  />
                                            <Button primary square nospace>
                                                <BodySearchItemIcon />
                                            </Button>
                                        </BodySearch>

                                        <HorizontalScroll>
                                            {
                                                registers?.map(m => m?.tag?.split(','))
                                                ?.reduce((p, c) => [...p, ...c] ,[])
                                                ?.reduce((p, c) => p.includes(c) ? p : [...p, c] , [])
                                                ?.map((item, key) => 
                                                    <ItemTag key={key} active={item === selectedTag} onClick={() => setSelectedTag( item === selectedTag ? null : item)} >{item}</ItemTag>
                                                )
                                            }
                                        </HorizontalScroll>

                                        <ScrollItemsRow gapped>
                                            {
                                                loading ? <Load /> :
                                                registers?.filter(filterTag)
                                                ?.filter(filterSearchExpression)?.map((item, key) => 
                                                    <ItemCardNews key={key} onClick={() => navigate(`blog/${ item?.id }`)}>
                                                        <ItemCardNewsBody>
                                                            <ItemCardNewsImage />
                                                            <ItemCardNewsHeader>
                                                                { item?.title }
                                                                <ItemCardNewsBodyText>
                                                                    { maxLength(item?.text, 360) }
                                                                </ItemCardNewsBodyText>
                                                                <ItemCardNewsrowInfos>
                                                                    <ItemCardNewsrowInfosTitle> </ItemCardNewsrowInfosTitle>
                                                                    <ItemCardNewsrowInfosContentBadges>
                                                                        {
                                                                            item?.tag?.split(',')?.map((mm, key) => 
                                                                                <ItemCardNewsrowInfosBadge key={key}>
                                                                                    { mm }
                                                                                </ItemCardNewsrowInfosBadge>
                                                                            ) 
                                                                        }
                                                                    </ItemCardNewsrowInfosContentBadges>
                                                                </ItemCardNewsrowInfos>
                                                            </ItemCardNewsHeader>
                                                        </ItemCardNewsBody>
                                                    </ItemCardNews>
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