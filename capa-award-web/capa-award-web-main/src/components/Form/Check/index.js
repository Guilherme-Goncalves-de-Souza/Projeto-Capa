import React, { useEffect, useState } from "react";  
import PropTypes from 'prop-types';

import {   
    MaterialCheckbox
} from './styled' 


import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ThemedComponent } from "ui/theme";

 
export const Check = ({ checked, onChange, label, title, secondary }) => {  

    const [ active, setActive ] = useState(checked)  

    const action = () => {
        const nv = !active
        if(onChange && typeof onChange === 'function'){ onChange(nv) }
        setActive(nv)
    }

    useEffect(() => {
        setActive(checked)
    }, [checked])
 
    return ( 
        <>   
            <ThemedComponent>
                <FormGroup>
                    { title ? <FormLabel component="legend"
                            color={ secondary ? 'secondary' : 'primary' } >{ title }</FormLabel> : null }
                    <FormControlLabel control={<MaterialCheckbox defaultChecked={checked}  onChange={action} color={ secondary ? 'secondary' : 'primary' }  />} label={label} /> 
                </FormGroup>
            </ThemedComponent>
 
        </>
    );
} 

Check.propTypes = {  
    label: PropTypes.string.isRequired, 
    title: PropTypes.string,  
    checked: PropTypes.bool, 
    secondary: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};


Check.defaultProps = {
    label: '',
    title: '', 
    checked: false,  
    secondary: false, 
    onChange: undefined,
};

export default Check;