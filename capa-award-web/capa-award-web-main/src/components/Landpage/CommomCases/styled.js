import styled from 'styled-components' 

import Lottie from 'react-lottie';

export const CommomContainer = styled.div.attrs({ 
})`          
    position: relative;
    padding-top: 140px;
    padding-bottom: 140px;
`;

export const CommomDecoration = styled.img.attrs({ 
    src:'/icons/circle-2.svg'
})`          
    position: absolute;
    width: 793px;
    right: -320px;
    bottom: -280px;
`;

export const CommomTitle = styled.h1.attrs({  
})`          
    font-size: 32px;
    font-weight: bold;
    color: ${ props => props.theme.palette.secondary.main };
    margin: 0;
`;  

export const CommomList = styled.ul.attrs({  
})`          
    list-style: none;
    padding: 0;
    margin-top: 70px;
    margin-left: 20px;
`;  

export const CommomListItem = styled.li.attrs({  
})`          
    font-size: 20px;
    margin-bottom: 20px;
    color: ${ props => props.theme.palette.colors.grey };
    
    &:before{
        content: "\\2022"; 
        color: ${ props => props.theme.palette.primary.main }; 
        font-weight: bold; 
        display: inline-block; 
        width: 1em; 
        margin-left: -1em;
    }
`;  

export const CommomAnimation = styled(Lottie).attrs( props => ({  
    options:{
        loop: true,
        autoplay: true, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        animationData: props.animationData
    },
    // height: 500,
    // width: 500
}))`           
    margin-top: 140px ;
    max-width: 499px;
    width: 100%;
`;  