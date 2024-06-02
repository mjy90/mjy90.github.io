import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontFamily: 'Roboto, sans-serif',
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
    },
    caption: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'italic',
    },
    overline: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'italic',
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: 3,
        padding: 3,
        alignItems: 'center',
      },
      // variants: [
      //   {
      //     props: { container: true },
      //     style: {
      //       margin: 0,
      //       padding: 0,
      //       spacing: 3,
      //     },
      //   },
      // ],
    },
  },
});

// Make font sizes scale with the viewport width
theme = responsiveFontSizes(theme);

export default theme;
