import styled from 'styled-components' 

export const CentredRow = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    margin-bottom: 30px;
`;
    

export const TabsContainer = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    margin-bottom: 30px;
`;

export const TabItem = styled.div.attrs({ 
})`          
    width: 220px; 
    min-height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 17px;
    color: ${ props => props.theme.palette.colors.grey };
    cursor: pointer;

    background: ${ props => props.theme.palette.colors.backgroundgrey };

    ${
        props => props.active ? `
            background: ${ props.theme.palette.primary.main };
            color: ${ props.theme.palette.colors.white };
        ` : ``
    }
`;
    