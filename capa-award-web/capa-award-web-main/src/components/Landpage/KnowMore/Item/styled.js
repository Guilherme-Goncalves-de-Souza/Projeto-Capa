import styled from 'styled-components' 
 
 
export const KnowItem = styled.div.attrs({ 
})`           
    display: flex;
    background: ${ props => props.theme.palette.colors.white };
    margin-top: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 6px ${ props => props.theme.palette.colors.shadow };
`; 
 
export const KnowItemImage = styled.div.attrs({ 
})`   
    height: 205px;
    width: 200px;
    min-width: 80px;
    border-bottom-right-radius: 43px; 
    overflow: hidden;        
    ${ props => props.image ? `background: ${ props.theme.palette.colors.lightshadow } url(${ props.image }) center center / cover;` : `` }
`; 
 
export const KnowItemContent = styled.div.attrs({ 
})`   
    padding: 20px 30px 10px;
`; 
 
export const KnowItemContentTitle = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.secondary.main };
    font-size: 24px;
    font-weight: 600;   
`; 
export const KnowItemContentText = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 15px; 
`; 
export const KnowItemContentRate = styled.div.attrs({ 
})`   
    display: flex;
    align-items: center;
    margin: 6px 0;
`; 
export const KnowItemContentRateText = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 13px; 
`; 
export const KnowItemContentRateIcon = styled.img.attrs(props => ({ 
    src: `/icons/star-${ props.rated ? `on` : `off` }.svg`
}))`   
margin-right: 8px ;
`; 
export const KnowItemContentDescription = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.lightgrey };
    font-size: 14px;
    text-transform: uppercase;
`; 
export const KnowItemContentAvailable = styled.div.attrs({ 
})`   
    margin-top: 40px;
    color: ${ props => props.theme.palette.secondary.main };
    font-size: 14px;
`; 