import styled from 'styled-components'  

import {
    Animation
} from 'ui/styled'

export const DashboardTitle = styled.div.attrs({ 
})`            
    font-size: 22px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.black };
    margin-bottom: 12px;
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }
`;

export const DashboardText = styled.div.attrs({ 
})`            
    font-size: 16px;
    line-height: 26px;
    color: ${ props => props.theme.palette.colors.black };
    ${
        props => props.centred ? `
            text-align: center;
        ` : ``
    }
`;

export const DashboardAnimation = styled(Animation).attrs({ 
    width: '100%',
    height: 420
})`             
`;

export const SearchContainer = styled.div.attrs({ 
})`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 540px;
    width: 100%;
    margin: 32px auto ;
`;



export const EdictWrapper = styled.div.attrs({ 
})`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 64px 32px;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 32px; 
`;
export const EdictItem = styled.div.attrs({ 
})`
    width: 300px;
`;
export const EdictItemTitle = styled.div.attrs({ 
})`
    font-size: 18px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.black };
    text-align: center;
    margin: 0 0 12px;
`;
export const EdictItemSubtitle = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black };
    text-align: center;
`;
export const EdictItemContentImage = styled.div.attrs({ 
})`
    width: 300px;
    aspect-ratio: 1 / 1; 
    box-shadow: 0px 3px 6px ${ props => props.theme.palette.colors.shadow };

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;
export const EdictItemImage = styled.img.attrs({ 
    width: 146,
    src: '/icons/file.svg'
})`
`;
export const EdictItemDescription = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black };
    text-align: center;
    margin: 0 0 12px;
`;
export const EdictItemDate = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black };
    text-align: center;
`;

export const FilterButton = styled.div.attrs({ 
})`
    width: 48px;
`;

export const FilterIcon = styled.img.attrs({ 
    src:'/icons/filter.svg'
})`
`;

export const FullPage = styled.div.attrs({ 
})`
    width: 100%;
`;


export const ActionsContainer = styled.div.attrs({ 
})`
    max-width: 240px;
    width: 100%;
    margin: 32px auto 0;
`;

export const ActionsContainerEnd = styled.div.attrs({ 
})`
    max-width: 360px;
    width: 100%; 
    display: flex;
    gap: 20px;
`;

export const ActionsEnd = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 32px;
`;





export const ContentTitle = styled.div.attrs({ 
})`
    font-size: 18px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.black };
    padding: 0 0 12px;
    margin: 32px 0 12px;
    border-bottom: 4px solid ${ props => props.theme.palette.primary.main };
`;
export const ContentText = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black }; 
`;


export const ContentTableAction = styled.div.attrs({ 
})`            
    max-width: 180px;
    min-width: 160px;
    margin-left: auto;
`;

export const ContentTableStatus = styled.div.attrs({ 
})`            
    max-width: 180px;
    margin-left: auto;
    border-radius: 4px;
    padding: 4px;
    text-align: center;
    font-size: 14px;
    border: 1px solid black;
    color: black;

    ${
        props => props.status === 'Aceito' ? `
            border: 1px solid ${ props.theme.palette.colors.statusGreen };
            color: ${ props.theme.palette.colors.statusGreen };
        ` : ``
    }
    
    ${
        props => props.status === 'Em triagem' ? `
            border: 1px solid ${ props.theme.palette.colors.statusBlue };
            color: ${ props.theme.palette.colors.statusBlue };
        ` : ``
    }

    ${
        props => props.status === 'Não contemplado' ? `
            border: 1px solid ${ props.theme.palette.colors.statusGrey };
            color: ${ props.theme.palette.colors.statusGrey };
        ` : ``
    }

`;