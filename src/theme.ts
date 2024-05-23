import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
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
        // padding: 4,
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

export default theme;
