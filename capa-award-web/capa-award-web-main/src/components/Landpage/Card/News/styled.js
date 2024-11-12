import styled from 'styled-components' 
 



export const ItemCardNews = styled.div.attrs({ 
})`
    min-width: 400px;
    width: 400px;
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
    text-align: right;
`;
export const ItemCardNewsBody = styled.div.attrs({ 
})`
`;
export const ItemCardNewsImage =  styled.img.attrs({ 
    width: '100%'
})`
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
    padding: 4px 8px 18px;
    color:  ${ props => props.theme.palette.colors.text };
    font-size: 14px;
`;
 