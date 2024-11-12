import React, { useEffect, useState } from "react";  
import PropTypes from 'prop-types';

import {   
    MaterialSwitch
} from './styled' 


import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ThemedComponent } from "ui/theme";

 
export const Toggle = ({ checked, onChange, label, title, secondary }) => {  

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
                    <FormControlLabel control={<MaterialSwitch defaultChecked={checked}  onChange={action} color={ secondary ? 'secondary' : 'primary' }  />} label={label} /> 
                </FormGroup>
            </ThemedComponent>
 
        </>
    );
} 

Toggle.propTypes = {  
    label: PropTypes.string.isRequired, 
    title: PropTypes.string,  
    checked: PropTypes.bool, 
    secondary: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};


Toggle.defaultProps = {
    label: '',
    title: '', 
    checked: false,  
    secondary: false, 
    onChange: undefined,
};

export default Toggle;