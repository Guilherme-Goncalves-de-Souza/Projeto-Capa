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
    margin: 32px auto 0;
`;



export const EdictWrapper = styled.div.attrs({ 
})`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 64px 32px;
    margin: 32px 0;  
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
    max-width: 240px;
    width: 100%; 
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
    margin: 32px 0;
    border-bottom: 1px solid ${ props => props.theme.palette.colors.shadow };
`;
export const ContentText = styled.div.attrs({ 
})`
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.black }; 
    margin: 32px 0;
    ${
        props => props.small ? `
            margin: 12px 0;
        ` : ``
    }
    ${
        props => props.link ? `
            margin: 12px 0;
            color: ${ props => props.theme.palette.main.primary }; 
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        ` : ``
    }
`;

export const RemoveIcon = styled.img.attrs({ 
    src:'/icons/remove.svg'
})`
    margin-left: 12px;
`;

export const EditIcon = styled.img.attrs({ 
    src:'/icons/edit.svg'
})`
    margin-left: 12px;
`;


export const BlogImage = styled.div.attrs({ 
})`    
    width: 588px;
    height: 361px;
    background: ${ props => props.theme.palette.colors.backgroundgrey } url(${ props => props.image }) no-repeat center center / cover;;
    margin: 20px auto 0;
`;
export const DashboardTextList = styled.div.attrs({ 
})`
    font-size: 16px;
    color: ${ props => props.theme.palette.colors.black };  
    margin: 12px 0;
`;
export const DashboardRemoveIcon = styled.img.attrs({ 
    src:'/icons/remove.svg'
})`
    margin: 0 0 0 12px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1)
    }
`;

export const TextItem = styled.div.attrs({ 
})`
    border: 1px solid ${ props => props.theme.palette.colors.shadow }; 
`;
export const SimpleRow = styled.div.attrs({ 
})`
    display: flex;
    margin: 16px 0 32px;
    gap: 12px;
    flex-wrap: wrap;
`;


export const ActionItem = styled.div.attrs({ 
})`
`;

export const EdictItemWrapper = styled.div.attrs({ 
})`
    display: flex;
    margin: 16px 0 32px;
    gap: 12px;
    flex-wrap: wrap;
`;