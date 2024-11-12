import styled from 'styled-components'

export const UploadFileContent = styled.div.attrs(props => ({ 
}))`   
`;


export const UploadFileDemo = styled.div.attrs({ 
})`            
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #ababab ${ props => props.image ? `url(${ props.image }) no-repeat center center / cover` : '' };
`; 