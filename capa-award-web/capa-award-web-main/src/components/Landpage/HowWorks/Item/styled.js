import styled from 'styled-components' 

export const HowWorkStep = styled.div.attrs({ 
})`          
    margin: 30px 0;
`; 

export const HowWorkStepNumber = styled.div.attrs({ 
})`          
    font-size: 100px;
    line-height: 100px;
    font-weight: bold;
    color: ${ props => props.theme.palette.secondary.main };
    ${
        props => props.variant === 1 ? `
            opacity: .84;
        ` : ``
    }
    ${
        props => props.variant === 2 ? `
            opacity: .70;
        ` : ``
    }
    ${
        props => props.variant === 3 ? `
            opacity: .56;
        ` : ``
    }
`; 
export const HowWorkStepTitle = styled.div.attrs({ 
})`          
    font-size: 20px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.grey };
    min-height: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`; 
export const HowWorkStepLine = styled.div.attrs({ 
})`          
    height: 2px;
    border-radius: 1px;
    background: ${ props => props.theme.palette.secondary.main };
    margin: 12px 90px 24px 0;
`; 
export const HowWorkStepText = styled.div.attrs({ 
})`          
    font-size: 16px;
    color: ${ props => props.theme.palette.colors.grey };
    b{
        font-weight: bold;
        color: ${ props => props.theme.palette.primary.main };
    }
`; 