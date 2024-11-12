import styledCmp from 'styled-components'  

import { styled } from '@mui/material/styles'; 
// import Input from '@mui/material/Input'; // standard (material)
// import Input from '@mui/material/FilledInput'; 
import Input from '@mui/material/OutlinedInput'; 


export const MaterialInput = styled(Input)(({ theme, type }) => ({  
    // height: type === 'textarea' ? 200 : null
}));

export const InputIcon = styledCmp.img.attrs({ 
})`
`;