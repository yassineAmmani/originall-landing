import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B3A42',
    },
    secondary: {
      main: '#E07A5F',
    },
    background: {
      default: '#F4E1D2',
    },
    text: {
      primary: '#2B3A42',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
        fontFamily: 'Playfair Display, serif',
        '@media (max-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
        fontFamily: 'Playfair Display, serif',
         '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
        fontFamily: 'Playfair Display, serif',
         '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    },
   breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 900, // Medium devices (desktops)
      lg: 1200, // Large devices (large desktops)
      xl: 1536, // Extra large devices (larger desktops)
    },
  },
});

export default theme;