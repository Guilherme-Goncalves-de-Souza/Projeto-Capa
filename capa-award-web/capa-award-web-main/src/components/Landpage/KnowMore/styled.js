import styled from 'styled-components' 
 
 
export const KnowContent = styled.div.attrs({ 
})`          
    padding: 25px 0;
    background: ${ props => props.theme.palette.colors.lightshadow };
`;

export const MoreTitle = styled.div.attrs({ 
})`          
    font-size: 32px;
    font-weight: bold;
    color: ${ props => props.theme.palette.primary.main };
`;
  
export const MoreText = styled.div.attrs({ 
})` 
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 20px; 
`;
  