import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 
export const ContentBody = styled.div.attrs({ 
})`          
    min-height: 47vh;
`;
  
export const ContentAnimation = styled.div.attrs({ 
})`          
    padding: 160px 0 160px;
`;

export const ContentSided = styled.div.attrs({ 
})`
    background: ${ props => props.theme.palette.colors.backgroundgrey };
    
`;









export const HeaderLandpage = styled.div.attrs({ 
})`  
    padding: 10px 11vw;
    background: ${ props => props.theme.palette.primary.main };
    display: flex;
    flex-wrap: wrap;
    transition: all .3s ease;
`;
export const HeaderLandpageItem = styled.div.attrs({ 
})`
    padding: 0 12px;
    color:  ${ props => props.theme.palette.colors.white };
    font-size: 16px;

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
    
`;
export const BodyLandpage = styled.div.attrs({ 
})`  
    display: flex;

`;
export const BodyLandpageSide = styled.div.attrs({ 
})`  
    background: ${ props => props.theme.palette.colors.hilightgrey };
    min-width: 220px;
    @media(max-width: 767px){
        min-width: 86px;
    }
`;
export const BodyLandpageSideItem = styled.div.attrs({ 
})`  
    margin: 3px 0;
    padding: 10px;
    color:  ${ props => props.theme.palette.colors.white };
    font-size: 16px;
    background: ${ props => props.active ? props.theme.palette.primary.main : props.theme.palette.colors.lightprimary };

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;
export const BodyLandpageSideItemIcon = styled.div.attrs({ 
})`  
`;
export const BodyLandpageBody = styled.div.attrs({ 
})`  
    width: 100%;
`;