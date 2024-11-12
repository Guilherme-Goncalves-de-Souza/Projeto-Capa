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
    ${
        props => props.spaced ? `
            margin: 12px 0 32px;
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
    max-width: 240px;
    width: 100%; 
    ${
        props => props.big ? `
            max-width: 300px;
        ` : ``
    }
`;

export const ActionsEnd = styled.div.attrs({ 
})`
    display: flex;
    justify-content: flex-end; 
    margin-bottom: 32px;
    gap: 20px;
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






export const ComContent = styled.div.attrs({ 
})`
    padding: 16px;
    background: ${ props => props.theme.palette.primary.main };
    border-radius: 8px;
    // position: sticky;
    // top: 20px;
`;
export const ComContentHeader = styled.div.attrs({ 
})`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: ${ props => props.theme.palette.colors.white };
`;
export const ComContentHeaderClose = styled.img.attrs({ 
    src:'/icons/close-white.svg',
    width: 12
})`
`;
export const ComContentBody = styled.div.attrs({ 
})`
    margin-top: 16px;
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
`;
export const ComContentBodyDate = styled.div.attrs({ 
})`
    color: ${ props => props.theme.palette.colors.text }; 
    text-align: center;
    padding: 12px 0 6px;
    background: ${ props => props.theme.palette.colors.white }; 
`;
export const ComContentChat = styled.div.attrs({ 
})`
    padding: 12px;
    min-height: 50vh;
    max-height: 51vh;
    background: ${ props => props.theme.palette.colors.white }; 
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
export const ComContentChatBalloon = styled.div.attrs({ 
})`
    border: 1px solid ${ props => props.theme.palette.colors.shadow }; 
    padding: 6px;
    max-width: 70%;
    width: 100%;
    align-self: flex-start;
    margin-bottom: 20px;
    ${
        props => props.mine ? `
            background: ${ props.theme.palette.primary.main };
            align-self: flex-end;
            padding: 6px 12px;
        ` : ``
    }
`;
export const ComContentChatBalloonTitle = styled.div.attrs({ 
})`
    font-size: 18px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.blue };
    ${
        props => props.mine ? `
            color: ${ props.theme.palette.colors.white };
        ` : ``
    }
`;
export const ComContentChatBalloonText = styled.div.attrs({ 
})`
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.text };
    ${
        props => props.mine ? `
            color: ${ props.theme.palette.colors.white };
        ` : ``
    }
`;
export const ComContentChatBalloonDate = styled.div.attrs({ 
})`
    text-align: right;
    font-size: 12px;
    color: ${ props => props.theme.palette.colors.text };
    ${
        props => props.mine ? `
            color: ${ props.theme.palette.colors.white };
        ` : ``
    }
`;
export const ComContentChatForm = styled.div.attrs({ 
})`
    margin-top: 6px;
    padding: 6px;
    background: ${ props => props.theme.palette.colors.white }; 

    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ComContentChatFormButton = styled.div.attrs({ 
})`
    min-width: 50px;
    min-height: 50px;
    border-radius: 25px;
    border: 1px solid ${ props => props.theme.palette.colors.white }; 

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
`;

export const ComContentChatFormButtonIcon = styled.img.attrs({ 
    src:'/icons/sent.svg'
})`
`;






export const ContentAcessor = styled.div.attrs({ 
})`
    margin: 32px;
`;

export const ContentAcessorHeader = styled.div.attrs({ 
})`
    background: ${ props => props.theme.palette.primary.main }; 
    color: ${ props => props.theme.palette.colors.white }; 
    padding: 6px;
    text-align: center;
    display: flex;
    gap: 12px;
    justify-content: center;
`;

export const ContentAcessorHeaderIcon = styled.img.attrs({ 
    src: '/icons/acessor.svg'
})`
`;

export const ContentAcessorHeaderItem = styled.div.attrs({ 
})`
    background: ${ props => props.odd ? props.theme.palette.colors.backgroundgrey : props.theme.palette.colors.white }; 
    color: ${ props => props.theme.palette.colors.text }; 
    padding: 6px;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
`;
