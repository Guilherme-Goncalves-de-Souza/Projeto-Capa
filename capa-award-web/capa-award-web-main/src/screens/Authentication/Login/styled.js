import styled from 'styled-components'  
 
export const FormTitle = styled.div.attrs({ 
})`           
    color: ${ props => props.theme.palette.primary.main }; 
    font-weight: bold;
    font-size: 20px; 

    margin: 50px 0 10px;
`;
export const FormText = styled.div.attrs({ 
})`           
    font-size: 15px; 
    color: ${ props => props.theme.palette.colors.grey };

    max-width: 240px;
    margin-bottom: 30px;
`;

export const FormSpacer = styled.div.attrs({ 
})`           
    margin-top: 40px;
`;

export const RegisterForgot = styled.div.attrs({ 
})`           
    margin-top: 40px;
    font-size: 15px; 
    color: ${ props => props.theme.palette.colors.grey };
    display: flex;
    align-items: center;
    gap: 20px;
    ${
        props => props.lined ? `
            border-top: 1px solid ${ props.theme.palette.primary.main };
            padding-top: 20px;
        ` : ``
    }
`;

export const ForgotLink = styled.div.attrs({ 
})`           
    margin-left: 6px;
    color: ${ props => props.theme.palette.primary.main };
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

export const RegisterCall = styled.div.attrs({ 
})`           
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 15px;
    font-weight: bold;
`;