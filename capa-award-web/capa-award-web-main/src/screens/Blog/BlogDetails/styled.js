import styled from 'styled-components' 

export const BannerContainer = styled.div.attrs({ 
})`           
    width: 100%;
    min-height: calc( 100vh - 73px );
`;

export const BannerShadow = styled.div.attrs({ 
})`           

    min-height: calc( 100vh - 73px );
    width: 100%;
    padding: 30px;
`;

export const CentredContainer = styled.div.attrs({ 
})` 
    width: 100%; 
`;
export const BannerTitle = styled.div.attrs({ 
})`
    font-size: 22px;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
    color: ${ props => props.theme.palette.colors.text };
    margin-bottom: 20px;
    width: 100%;
`;
export const ItemCardNews = styled.div.attrs({ 
})`

    width: 100%; 
    border-radius: 12px;
    overflow: hidden;
    @media(max-width: 767px){ 
        min-width: 100%;
        width: 100%;
        max-width: 400px;
    }
`;
export const ItemCardNewsHeader = styled.div.attrs({ 
})`
    padding: 12px; 
    color:  ${ props => props.theme.palette.colors.text };

    font-size: 18px;
    font-weight: 600;
`;
export const ItemCardNewsBody = styled.div.attrs({ 
})`
    display: flex;
`;
export const ItemCardNewsImage =  styled.img.attrs({ 
    width: '100%'
})` 
    margin: 6px 8px;
`;
export const ItemCardNewsrowInfos = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
    padding: 8px;
`;
export const ItemCardNewsrowInfosTitle = styled.div.attrs({ 
})`
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 16px;
    flex:1;
`;
export const ItemCardNewsrowInfosContentBadges = styled.div.attrs({ 
})`
    display: flex;
    align-items: center;
`;
export const ItemCardNewsrowInfosBadge = styled.div.attrs({ 
})`
    padding: 3px 6px;
    border: 1px solid ${ props => props.theme.palette.colors.shadow };
    margin-left: 6px;
    border-radius: 5px;
`;
export const ItemCardNewsBodyText = styled.div.attrs({ 
})`
    padding: 12px 8px 18px;
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 14px;
 
`;