import styled from 'styled-components' 
import ReactLoading from 'react-loading';
import Lottie from 'react-lottie';

export const hexToRgb = (hex) => {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return [(c>>16)&255, (c>>8)&255, c&255].join(',') ;
    }
    return `255,255,255`
}  

export const Touch = styled.div.attrs({ 
})`         
    cursor: pointer;
    &:hover{
        box-shadow: 0px 1px 3px ${ props => props.theme.palette.colors.shadow };
    }
`;


export const LoadCenter = styled.div.attrs({ 
})`         
    width: 20px;
    margin: 32px auto; 
    display: flex;
    justify-content: center;
`;

export const EmptyMessage = styled.div.attrs({ 
})`         
    padding: 32px; 
    text-align: center;
    font-size: 14px;
    color: ${ props => props.theme.palette.colors.black };
`;

export const Load = styled(ReactLoading).attrs(props => ({ 
    type:'spin',
    color: props.theme.palette.primary.main,
    height:20,
    width:20
}))`          
`;
 
export const Animation = styled(Lottie).attrs( props => ({  
    options:{
        loop: true,
        autoplay: true, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        animationData: props.animationData
    }, 
    width: props.width ? props.width : 320
}))`        
    max-width: 100%;
`;  