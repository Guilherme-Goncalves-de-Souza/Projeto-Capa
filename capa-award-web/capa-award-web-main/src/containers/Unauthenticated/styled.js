import styled from 'styled-components'  

export const SideBackgroundImageContainer = styled.div.attrs({ 
})`          
    background: ${ props => props.theme.palette.primary.main }; 
    min-height:calc(100vh - 24px);
    position: fixed;
    width: 58%;


    border-radius: 12px;
    

    @media(max-width: 767px){ 
        position: relative;
        min-height:initial; 
        width: 100%;
    }
`;
export const SideBackgroundImage = styled.div.attrs({ 
})`          
    background: white url(/images/login.png) no-repeat top +35% right +30% / cover;
    min-height:calc(100vh - 24px);
    
    border-radius: 12px;

    @media(max-width: 767px){ 
        position: absolute;
        height: -webkit-fill-available;
        min-height: 120px; 
        height: 100%;
        width: 100%;
        z-index: 1;
    }
`;
export const SideBackgroundImageDegree = styled.div.attrs({ 
})`          
    min-height:calc(100vh - 24px);
    background: -moz-linear-gradient(45deg, ${ props => props.theme.palette.primary.main } -40%, ${ props => props.theme.palette.colors.shadow } 200%);
    background: -webkit-linear-gradient(45deg, ${ props => props.theme.palette.primary.main } -40%, ${ props => props.theme.palette.colors.shadow } 200%);
    background: linear-gradient(45deg, ${ props => props.theme.palette.primary.main } -40%, ${ props => props.theme.palette.colors.shadow } 200%);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    border-radius: 12px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  flex-end;

    @media(max-width: 767px){  
        position: relative;
        min-height:initial; 
        padding-top: 20px;
        z-index: 2;
        min-height: 120px;  
    }
`;
export const FormContent = styled.div.attrs({ 
})`           
    min-height:calc(100vh - 130px);
    padding: 70px 5vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const AppLogo = styled.img.attrs({ 
    src:'/icons/logo.svg',
    height: 80
})`           
    margin: 0 auto 40px;
`; 

export const Content = styled.div.attrs({ 
})`           
    overflow:hidden;
    padding: 12px;
    background: ${ props => props.theme.palette.primary.light }; 
`; 

export const ContentIn = styled.div.attrs({ 
})`           
    overflow:hidden; 
    border-radius: 12px;
    background: ${ props => props.theme.palette.colors.white }; 
`; 


export const Touch = styled.div.attrs({ 
})`           
    cursor: pointer;
`; 