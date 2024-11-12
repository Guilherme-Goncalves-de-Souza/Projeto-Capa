import styled from 'styled-components' 

export const HeaderContainer = styled.div.attrs({ 
})`          
    background-color: ${ props => props.theme.palette.colors.white };
    min-height: 73px;
    width: 100%; 

    box-shadow: 0px 3px 6px ${ props => props.theme.palette.colors.shadow };
`;

export const RowCenter = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    height: 73px;

    @media(max-width: 767px){ 
        justify-content: space-between; 
    }
`;

export const RowEnd = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 73px;
    gap: 0 20px;

    @media(max-width: 767px){ 
        display: none;
    }
`;

export const LogoTouch = styled.div.attrs({ 
})`          
    margin-left: auto;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

export const AppLogo = styled.img.attrs({ 
    src:'/icons/logo.svg',
    height: 40
})`          
    margin-left: auto;
    margin-right: 60px;
     
    @media(max-width: 869px){
        margin-right: 20px; 
    }

    @media(max-width: 767px){ 
        margin-right: 60px;
    }
`;

export const HeaderLeftMenu = styled.ul.attrs({ 
})`        
    list-style: none;
    padding:0;
    margin:0; 
    height: 100%;
 
    @media(max-width: 767px){ 
        display: none;
    }

`;

export const HeaderMenuItem = styled.li.attrs({ 
})`    
    display: inline-flex; 
    height: 100%;
    align-items: center;
    padding: 0 15px;
    cursor: pointer; 
    color: ${ props => props.theme.palette.colors.white };
    font-size: 15px;  

    ${
        props => props.active ? `
            background-color: ${ props => props.theme.palette.colors.shadow };
            font-weight: bold;
        ` : ``
    }

    :hover{
        opacity: .8;
    }

    @media(max-width: 769px){ 
        padding: 0 12px; 
    }        
`;

export const HeaderMobile = styled.div.attrs({ 
})`           
    display: none;
    position: relative;
    z-index: 1;

    @media(max-width: 767px){ 
        display: block;
        padding: 20px;
    }
`;

export const HiddenMobile = styled.div.attrs({ 
})`           
    display: block;
    @media(max-width: 767px){ 
        display: none;
    }
`;


export const MenuIcon = styled.img.attrs({ 
    src:'/icons/menu.svg'
})`           
`;

export const HeaderMobileMenu = styled.ul.attrs({ 
})`           
    position: absolute;
    right: 0;
    top: 69px;
    width: 200px;

    background-color: ${ props => props.theme.palette.primary.main };
    list-style: none;
    padding:0;
    margin:0;  
`;

export const HeaderMobileItem = styled.li.attrs({ 
})` 
    display: flex; 
    height: 64px;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
 
    color: ${ props => props.theme.palette.colors.white };
    font-size: 15px;

    ${
        props => props.active ? `
            background-color: ${ props => props.theme.palette.colors.shadow };
            font-weight: bold;
        ` : ``
    }
    
    ${
        props => props.centred ? `
            justify-content: center;
        ` : ``
    }

    :hover{
        opacity: .8;
    }
`;

export const ButtonMenu = styled.img.attrs({ 
    src:'/icons/menu.svg',
    width: 12
})`
    margin-right: 12px;
`;
    
    
// li .button-white-outline,
// li .button-white{
//     margin: 0;
// }


// export const Text = styled.div.attrs({ 
// })`         
//     font-family: '${ Theme.FONTS.light }';
//     font-size: 18px; 
//     color: ${ Theme.COLORS.black }; 
//     b{
//         font-family: '${ Theme.FONTS.bold }';
//         text-decoration: underline; 
//         cursor: pointer;
//     }
// `;   