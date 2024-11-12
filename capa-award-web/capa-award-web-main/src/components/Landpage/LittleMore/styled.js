import styled from 'styled-components' 

export const MoreContainer = styled.div.attrs({ 
})`          
    padding: 80px 0 200px;
    position: relative;
`;
  
export const MoreRow = styled.div.attrs({ 
})`          
    padding: 20px 0 ;
    background: ${ props => props.theme.palette.primary.main };
`;
 
export const MoreTitle = styled.div.attrs({ 
})`          
    font-size: 32px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.white };
`;
 
export const MoreLine = styled.div.attrs({ 
})`          
    margin: 10px 0 20px;
    height: 2px;
    border-radius: 1px;
    background: ${ props => props.theme.palette.colors.white };
    margin-right: 150px;
`;
 
export const MoreText = styled.div.attrs({ 
})` 
    font-size: 16px; 
    color: ${ props => props.theme.palette.colors.white };
`;
 
export const MoreLogoCircle = styled.div.attrs({ 
})` 
    max-width: 398px;
    width: 100%;
    min-height: 398px;
    max-height: 398px;
    border-radius: 50%;
    background:  ${ props => props.theme.palette.secondary.main };
    box-shadow: 0px 14px 12px ${ props => props.theme.palette.colors.shadow };
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -50px 0 -50px auto;
    overflow: hidden;
`;
 
 
export const MoreLogo = styled.img.attrs({ 
    src:'/logo1024.png'
})` 
    width: 400px;
`;
 
export const MoreDecoration = styled.img.attrs({ 
    src:'/icons/circle-2.svg'
})` 
    width: 793px;
    position: absolute;
    bottom: 10px;
    right: -320px;
    z-index: -1;
`;
 