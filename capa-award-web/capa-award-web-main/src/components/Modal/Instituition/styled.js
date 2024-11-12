import styled from 'styled-components'  

export const ModalContainerOut = styled.div.attrs({ 
})`
    position: fixed;
    inset: 0 0 0 0;
    z-index: 1;
    background: ${ props => props.theme.palette.colors.shadow };
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
`;

export const ModalContainerIn = styled.div.attrs({ 
})`
    width: 100%;
    max-width: 720px;
    padding: 25px;
    background: ${ props => props.theme.palette.colors.white };
    display: flex;
    flex-direction: column;
`;

export const ModalHeaderClose = styled.img.attrs({ 
    src:  '/icons/close.svg',
    width: 16
})`
    margin-left: auto;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
`;

export const ModalHeaderTitle = styled.div.attrs({ 
})`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${ props => props.theme.palette.colors.black };
`;

export const ModalBody = styled.div.attrs({ 
})`
    margin: 20px 0;
    display: flex;
    gap: 20px;
`;

export const ModalActions = styled.div.attrs({ 
})`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0 0;
`;

export const ModalActionButton = styled.div.attrs({ 
})`
`;