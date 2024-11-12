import styled from 'styled-components' 

export const MoreInfosItemContent = styled.div.attrs({ 
})`    
    margin-top: 27px;
    border-radius: 23px;
    background: ${ props => props.theme.palette.primary.main };
    ${
        props => props.secondary ? `
            background: ${ props.theme.palette.secondary.main };
        ` : ``
    }
    padding-bottom: 20px; 
`; 
 
export const MoreInfosImage = styled.div.attrs({ 
})`    
    height: 327px;
    border-radius: 23px 23px 50% 50%; 
    background: rgba(255,255,255,.1) url(${props => props.image}) no-repeat center center / cover;
`; 
 
 
export const MoreInfosItemText = styled.div.attrs({ 
})`    
    font-size: 20px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.white };
    text-align: center;
    margin: 20px 30px 0;
`; 
 