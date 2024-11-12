import styled from 'styled-components' 

export const BannerImage = styled.div.attrs({ 
})`           

    position: relative;
    min-height: 770px;
    width: 100%;

    background: white url(https://loremflickr.com/1920/1024/art,grafite?random=8) no-repeat top +35% right +30% / cover;

    border-bottom-left-radius: 50% 80px;
    border-bottom-right-radius: 50% 80px;
    overflow: hidden;
`; 

export const BannerOut = styled.div.attrs({ 
})`            
    min-height: 770px;
    width: 100%;

    background: ${props => props.theme.palette.colors.shadow }; 
    mix-blend-mode: multiply;
`; 

export const BannerContent = styled.div.attrs({ 
})`           
    min-height: 770px;
    width: 100%; 

    background: -moz-linear-gradient(90deg, ${ props => props.theme.palette.secondary.main } 17%, rgba(41,28,68,0) 60%);
    background: -webkit-linear-gradient(90deg, ${ props => props.theme.palette.secondary.main } 17%, rgba(41,28,68,0) 60%);
    background: linear-gradient(90deg, ${ props => props.theme.palette.secondary.main } 17%, rgba(41,28,68,0) 60%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${ props => props.theme.palette.secondary.main }",endColorstr="rgba(41,28,68,0)",GradientType=1);
    position: absolute;
    top: 0;
    left: 0;
`; 

export const BannerCard = styled.div.attrs({ 
})`           
`; 