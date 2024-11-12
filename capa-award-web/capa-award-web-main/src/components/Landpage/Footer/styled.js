import styled from 'styled-components' 

export const FooterContainer = styled.div.attrs({ 
})`          
    background: ${ props => props.theme.palette.colors.white }; 
    padding: 12px 0;
`;


export const FooterCopyright = styled.div.attrs({  
})`          
    font-size: 20px;
    font-weight: 300;
    color: ${ props => props.theme.palette.colors.white }; 
    text-align: center;
`;


export const FooterFlagUS = styled.img.attrs({  
    src: `/icons/us.svg`
})`           
`;