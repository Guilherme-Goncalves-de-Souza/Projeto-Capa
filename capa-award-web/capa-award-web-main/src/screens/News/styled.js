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
    display: block;
`;

export const BannerTitle = styled.div.attrs({ 
})`
    font-size: 22px;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
    color: ${ props => props.white ?  props.theme.palette.colors.text : props.theme.palette.colors.white };
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