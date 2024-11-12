import styledCmp from 'styled-components' 
import ReactLoading from 'react-loading'

import { styled } from '@mui/material/styles'; 
import Button from '@mui/material/Button'; 

export const Load = styledCmp(ReactLoading).attrs( props => ({ 
    type: 'spin',
    color: props.outline ? 
        (
            props.primary ? props.theme.palette.primary.main : 
            ( props.secondary ? props.theme.palette.secondary.main : props.theme.palette.info.main )
        ) 
    : props.theme.palette.primary.contrastText,
    height: 20,
    width: 20
}))`          
`; 

export const ColorButton = styled(Button)(({ theme, nospace, small, square }) => ({ 
    // width: '100%', 
    width: (small || square) ? 'auto' : '100%', 
    height: small ? '28px': '45px', 
    textTransform: (small || square) ? 'none': 'uppercase', 
    marginTop:  nospace ? '0px' : '12px'
}));
 