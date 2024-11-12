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
 
export const ItemCardNewsHeader = styled.div.attrs({ 
})`
    padding: 12px; 
    color:  ${ props => props.theme.palette.colors.text };

    font-size: 18px;
    font-weight: 600;
`;

export const ItemCardNewsBodyText = styled.div.attrs({ 
})`
    padding: 12px 8px 18px;
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 14px;

    margin-top: 12px;
    border-top: 2px solid  ${ props => props.theme.palette.primary.main };
`;