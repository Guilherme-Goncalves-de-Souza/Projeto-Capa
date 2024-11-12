import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 
 
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
export const CentredContent = styled.div.attrs({ 
})`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${
        props => props.two ? `
            background: url('/icons/circle-decoration.svg') no-repeat center center / contain ;
        ` : ``
    }
`;
 


export const ContentPlus = styled.div.attrs({ 
})`
    padding: 16px;
    background: rgba(104, 113, 209, 0.2);
    border-radius: 50px;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 12px;
    margin-bottom: 20px;

`;
export const PlusCircle = styled.div.attrs({ 
})`
    width: 34px;
    height: 34px;
    min-width: 34px;
    min-height: 34px;
    max-width: 34px;
    max-height: 34px;
    border-radius: 17px;
    background: ${ props => props.theme.palette.colors.violet };
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const PlusIcon = styled.img.attrs({ 
    src: '/icons/plus.svg'
})`
`;
export const PlusText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.white };
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




export const BannerText = styled.div.attrs({ 
})` 
    font-size: 16px;
    font-weight: 500;
    color: ${ props => props.theme.palette.colors.white };
    margin-bottom: 10px;
`;
export const BannerActions = styled.div.attrs({ 
})` 
    width: 100%;
`;



export const BannerDecoration = styled.img.attrs(props => ({ 
    src: props.two ? '/images/decoration-2.png' : '/images/decoration-1.png',
    width: 400
}))` 
    @media(max-width: 767px){
        width: 100%;
        max-width: 400px;
    }
`;








export const ScrollItems = styled.div.attrs({ 
})`
    overflow:auto;
    margin: 20px 0 0;
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
export const ItemCard = styled.div.attrs({ 
})`
    min-width: 298px;
    width: 298px;
    background:  ${ props => props.theme.palette.colors.white };
    border-radius: 12px;
    overflow: hidden;
`;
export const ItemCardHeader = styled.div.attrs({ 
})`
    padding: 12px;
    background:  ${ props => props.theme.palette.primary.main };
    color:  ${ props => props.theme.palette.colors.white };
    
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;
export const ItemCardBody = styled.div.attrs({ 
})`
    padding: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 240px;
`;
export const ItemCardIcon = styled.img.attrs({ 
    src:'/icons/item-icon.svg'
})` 
    margin: 0 0 12px;
`;
export const ItemCardBodyText = styled.div.attrs({ 
})`
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 16px;
    text-align: center;
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
export const ItemCardNewsBodyTitle = styled.div.attrs({ 
})`
    padding: 0 8px;
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 16px;
    font-weight: 900;
`;
export const ItemCardNewsBodyText = styled.div.attrs({ 
})`
    padding: 12px 8px 18px;
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 14px;

    margin-top: 12px;
    border-top: 2px solid  ${ props => props.theme.palette.primary.main };
`;


export const BodyContentCenter = styled.div.attrs({ 
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 40px;
`;









export const CardAwards = styled.div.attrs({ 
})` 
`;
export const CardAwardsHeader = styled.div.attrs({ 
})` 
    padding: 18px 12px;
    display: flex;
    justify-content: center;
    background: ${ props => props.theme.palette.primary.light }; 
`;
export const CardAwardsHeaderIcon = styled.img.attrs({ 
    src: '/icons/logo-white.svg'
})` 
`;
export const CardAwardsBody = styled.div.attrs({ 
})` 
    padding: 24px 36px; 
    background: ${ props => props.theme.palette.colors.white }; 
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 14px;
`;
