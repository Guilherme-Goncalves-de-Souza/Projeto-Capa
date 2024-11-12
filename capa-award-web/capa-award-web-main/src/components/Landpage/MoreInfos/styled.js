import styled from 'styled-components' 

export const MoreInfosContainer = styled.div.attrs({ 
})`          
    background: ${ props => props.theme.palette.colors.lightshadow };
    padding: 45px 0px;
    margin: 100px 0;
    position: relative;
`; 

export const MoreInfosDecoration = styled.img.attrs({ 
    src:'/icons/circle-1.svg'
})`          
    width: 793px;
    position: absolute;
    top: 0px;
    left: -279px;
`; 

export const MoreInfosTitle = styled.div.attrs({ 
})`          
    color: ${ props => props.theme.palette.primary.main };
    font-size: 32px;
    font-weight: bold;   
`; 

export const MoreInfosText = styled.div.attrs({ 
})`          
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 20px; 
`; 