import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from './theme-color';

export function ThemedComponent({ children }) {
    return <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
            { children }
        </StyledThemeProvider>
    </ThemeProvider>
}