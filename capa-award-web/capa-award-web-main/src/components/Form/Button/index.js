import React from "react";
import PropTypes from 'prop-types';

import { ColorButton, Load } from "./styled";
import { ThemedComponent } from "ui/theme";

export const Button = ({ children, loading, primary, secondary, outline, link, nospace, centred, onClick, small, square, color }) => {   

    return ( 
        <> 
          <ThemedComponent>
              <ColorButton variant={ link ? "text" : outline ? "outlined" : "contained" } color={ secondary ? 'secondary' : primary ? 'primary' : color ? color : 'white' } nospace={nospace} square={square} centred={centred} onClick={onClick} small={small}>
                {
                  loading ? <Load primary={primary} secondary={secondary} outline={outline} /> : <>
                    { children }
                  </>
                }
              </ColorButton> 
          </ThemedComponent>
        </>
    );
} 
   
Button.propTypes = { 
  children: PropTypes.node, 
  primary: PropTypes.bool, 
  secondary: PropTypes.bool, 
  outline: PropTypes.bool, 
  link: PropTypes.bool, 
  nospace: PropTypes.bool, 
  centred: PropTypes.bool, 
  loading: PropTypes.bool, 
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  primary: false,
  secondary: false,
  outline: false,
  link: false,
  nospace: false,
  centred: false,
  loading: false,
  onClick: undefined,
};

export default Button;