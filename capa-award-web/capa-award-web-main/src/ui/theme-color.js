import { createTheme } from '@mui/material/styles'; 

export const theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#003A69', 
      light: '#1D71B8', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#0BBBEF',
      contrastText: '#fff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#06346b',
    },
    error: {
      main: '#dd4952',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#a4a4a4',
      contrastText: '#fff',
    },
    success: {
      main: '#66bb6a',
    },
    green: {
      main: '#4AAA32',
      contrastText: '#fff',
    },
    red: {
      main: '#DC2626',
      contrastText: '#fff',
    },
    colors:{
        white: '#ffffff',
        black: '#000000',
        grey: '#4C4C4C',
        violet: '#6871D1',
        blue: '#003A69', 
        backgroundgrey: '#f5f5f5',
        hilightgrey: '#E0DFDF',
        lightgrey: '#A4A4A4',
        text: '#535252',
        shadow: 'rgba(0,0,0,.16)',
        lightshadow: 'rgba(112,112,112,.06)',
        lightprimary:'rgba(19, 65, 107, 0.63)',

        statusBlue:'#38BDF8',
        statusGreen:'#34D399',
        statusGrey:'#999C9D',

    }
  },
});