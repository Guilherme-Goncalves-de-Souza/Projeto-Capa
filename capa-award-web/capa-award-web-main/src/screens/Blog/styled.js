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
 
export const ScrollItemsRow = styled.div.attrs({ 
})`
    display: flex;
    gap: 20px;
    ${ 
        props => props.gapped ? `
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 30px;
        ` : ``
    }
`;

export const ItemCardNews = styled.div.attrs({ 
})`

    width: 100%;
    background:  ${ props => props.theme.palette.colors.white };
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
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
    src: '/images/blog.png',
    width: '100%'
})`
    max-width: 240px;
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
    margin-top: 12px;
    border-top: 2px solid  ${ props => props.theme.palette.primary.main };
`;

export const BodySearch = styled.div.attrs({ 
})`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
`;

export const BodySearchItemIcon = styled.img.attrs({ 
    src:'/icons/filter.svg'
})`
`;

export const HorizontalScroll = styled.div.attrs({ 
})`
    display: flex;
    overflow: auto;
    padding-top: 25px;
    gap: 12px;
`;

export const ItemTag = styled.div.attrs({ 
})`
    border: 1px solid ${ props => props.theme.palette.primary.main };
    padding: 4px 10px;
    cursor: pointer;
    transition: all .3s ease;
    border-radius: 4px;
    ${
        p => p.active ? `
            background: ${ p.theme.palette.primary.main };
            color: ${ p.theme.palette.colors.white };
        ` : ``
    }
`;
