import React from "react";  
import PropTypes from 'prop-types';

import {   
    MaterialSlider
} from './styled' 


import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel'; 

import { ThemedComponent } from "ui/theme";

 
export const Slider = ({ value, onChange, label, secondary }) => {  
 
    return ( 
        <>   
            <ThemedComponent>
                <FormGroup>
                    { label ? <FormLabel component="legend" color={ secondary ? 'secondary' : 'primary' } >{ label }</FormLabel> : null }
                    <MaterialSlider defaultValue={value} onChange={onChange} aria-label={label} valueLabelDisplay="auto" color={ secondary ? 'secondary' : 'primary' } />
                </FormGroup>
            </ThemedComponent>
 
        </>
    );
} 

Slider.propTypes = {  
    label: PropTypes.string.isRequired,  
    value: PropTypes.number, 
    secondary: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};


Slider.defaultProps = {
    label: '', 
    value: 0,  
    secondary: false, 
    onChange: undefined,
};

export default Slider;