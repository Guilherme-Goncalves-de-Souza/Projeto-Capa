import React, { useState } from "react"; 
import PropTypes from 'prop-types'; 

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { 
    MaterialSelect
} from "./styled";
import { ThemedComponent } from "ui/theme";

export const Select = ({ placeholder, options, small, value, onChange, id, secondary }) => {  

    const [opened, setOpened] = useState(false)

    const toggleOpen = () => {
        setOpened(!opened)
    }

    const optionAction = item => {
        if(onChange && typeof onChange === 'function'){
            onChange(item.target.value)
        }
        toggleOpen()
    }

    return (
        <>
            <ThemedComponent>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id={id}
                            color={ secondary ? 'secondary' : 'primary' } >{ placeholder }</InputLabel>
                        <MaterialSelect
                            small={small}
                            labelId={id} 
                            color={ secondary ? 'secondary' : 'primary' } 
                            id={`select-${id}`}
                            value={value}
                            onChange={optionAction}
                            label={placeholder}
                        > 
                            {
                                options?.map((item, key) => 
                                    <MenuItem key={key} value={item.id}>{ item?.title }</MenuItem> 
                                )
                            } 
                        </MaterialSelect>
                </FormControl>  
            </ThemedComponent>
        </>
    )
}


Select.propTypes = {  
    placeholder: PropTypes.string, 
    options: PropTypes.array, 
    value: PropTypes.object, 
    small: PropTypes.bool, 
    secondary: PropTypes.bool, 
    onChange: PropTypes.func.isRequired,
};


Select.defaultProps = {
    placeholder: '',
    options: [],
    value: undefined, 
    small: false, 
    secondary: false, 
    onChange: undefined,
};

export default Select; 
