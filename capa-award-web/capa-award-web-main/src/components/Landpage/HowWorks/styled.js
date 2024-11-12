import styled from 'styled-components' 

export const HowWorksContainer = styled.div.attrs({ 
})`          
    position: relative;
`;
   
export const HowWorksDecoration = styled.img.attrs({ 
    src:`/icons/circle-1.svg`
})`           
    width: 539px;
    position: absolute;
    top: 60px;
    left: -308px;
`;

export const HowWorksTitleContent = styled.div.attrs({ 
})`            
    padding: 60px 0;
`;
   

export const HowWorksTitle = styled.div.attrs({ 
})`            
    font-size: 32px;
    color: ${ props => props.theme.palette.secondary.main };
    font-weight: bold;
`;

export const HowWorksText = styled.div.attrs({ 
})`            
    font-size: 20px;
    color: ${ props => props.theme.palette.colors.grey };
`;
   