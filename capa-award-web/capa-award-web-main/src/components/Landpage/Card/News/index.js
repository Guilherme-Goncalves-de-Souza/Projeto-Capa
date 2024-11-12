import React from "react"; 
 
import {   

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
    
} from "./styled"; 
import { useHistory } from "react-router-dom";
import moment from "moment/moment";
import { maxLength, parseStrapiImage } from "utils";

export default function CardNews({ blog, item }){ 
 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 
 
    return (
        <ItemCardNews onClick={() => navigate(`${ blog ? 'blog' : 'news' }/${ item?.id }`)}>
            <ItemCardNewsHeader>
                { moment(item?.date).format("DD/MM/YYYY") }
            </ItemCardNewsHeader>
            <ItemCardNewsBody>
                <ItemCardNewsImage src={ item?.image?.url ? parseStrapiImage(item?.image?.url) : "" } />
                <ItemCardNewsrowInfos>
                    <ItemCardNewsrowInfosTitle>{ item?.font }</ItemCardNewsrowInfosTitle>
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
                <ItemCardNewsBodyTitle>
                    { item?.title }
                </ItemCardNewsBodyTitle>
                <ItemCardNewsBodyText>
                    { maxLength(item?.text) }
                </ItemCardNewsBodyText>
            </ItemCardNewsBody>
        </ItemCardNews>
    );
}