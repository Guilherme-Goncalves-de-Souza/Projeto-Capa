import React from "react"; 
 
import { 
    BannerContainer, 
    BannerShadow,
    CentredContainer,
    BannerTitle, 
    ItemCardNews,
    ItemCardNewsHeader,
    ItemCardNewsBody,
    ItemCardNewsImage,
    ItemCardNewsrowInfos,
    ItemCardNewsrowInfosTitle,
    ItemCardNewsrowInfosContentBadges,
    ItemCardNewsrowInfosBadge, 
    ItemCardNewsBodyText
} from "./styled";

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import useController from "./controller";
import moment from "moment/moment";
import { Load, LoadCenter } from "ui/styled";
import { parseStrapiImage } from "utils";
import DOMPurify from "dompurify";
import { Editor, EditorState, convertFromRaw } from "draft-js";

export default function BlogDetails(){ 
 
    const { loading, register } = useController()
    
    return ( 
        <ContainerLandpage sided={'blog'}> 
            <BannerContainer>
                <BannerShadow>
                    <Container>
                            <Row>
                                <Col sm={12}>
                                    {
                                        loading  ? 
                                        <LoadCenter>
                                            <Load /> 
                                        </LoadCenter>
                                            :
                                        <CentredContainer simple>
                                            <ItemCardNewsrowInfos>
                                                <ItemCardNewsrowInfosTitle />
                                                <ItemCardNewsrowInfosContentBadges>
                                                    { 
                                                        register?.tag?.split(',')?.map((mm, key) => 
                                                            <ItemCardNewsrowInfosBadge key={key}>
                                                                { mm }
                                                            </ItemCardNewsrowInfosBadge>
                                                        ) 
                                                    }
                                                </ItemCardNewsrowInfosContentBadges>
                                            </ItemCardNewsrowInfos>
                                            <BannerTitle>
                                                { register?.title }
                                            </BannerTitle>   
                                            <ItemCardNewsrowInfos>
                                                <ItemCardNewsrowInfosTitle />
                                                <ItemCardNewsrowInfosContentBadges>
                                                    data de publicação: { moment(register?.date).format("DD/MM/YYYY") }
                                                </ItemCardNewsrowInfosContentBadges>
                                            </ItemCardNewsrowInfos>
                                            <ItemCardNews>
                                                <ItemCardNewsImage  src={ register?.image?.url ? parseStrapiImage(register?.image?.url) : "" } />
                                                <ItemCardNewsBody>
                                                <ItemCardNewsHeader> 
                                                    {/* <ItemCardNewsBodyText dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize( register?.html ) }} /> */}
                                                    { register?.draft ? <Editor editorState={EditorState.createWithContent(convertFromRaw(register?.draft))} readOnly={true} /> : null }
                                                    {/* <ItemCardNewsBodyText>
                                                        { register?.text }
                                                    </ItemCardNewsBodyText> */}
                                                </ItemCardNewsHeader>
                                                </ItemCardNewsBody>
                                            </ItemCardNews> 
                                            <ItemCardNewsrowInfos>
                                                <ItemCardNewsrowInfosTitle />
                                                <ItemCardNewsrowInfosContentBadges>
                                                    Autor: { register?.font }
                                                </ItemCardNewsrowInfosContentBadges>
                                            </ItemCardNewsrowInfos>
                                        </CentredContainer>
                                    }
                                </Col>
                            </Row>
                        </Container>

                </BannerShadow>
            </BannerContainer>
 
        </ContainerLandpage>
    );
}