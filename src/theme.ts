import React from 'react';
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

export type ColorMode = 'light' | 'dark';

export const ColorModeContext = React.createContext({
  colorMode: 'dark' as ColorMode,
  setColorMode: (mode: ColorMode) => {}
});

const colors = {
  munsellBlue: '#2292A4',
  persianRed: '#C3423F',
  persianRedCopilot: '#C3423F',
  mossGreen: '#90A955',
  mossGreenCopilot: '#8A9A5B',
  feldgrauGreen: '#3F4B3B',
  feldgrauGreenCopilot: '#4D5B5C',
};

export function useTheme(colorMode: 'light' | 'dark'): Theme {
  // A custom theme for this app
  let theme = createTheme({
    palette: {
      mode: colorMode,
      ...(colorMode === 'light' ? {
          // palette values for light mode
          primary: {
            main: colors.munsellBlue,
            contrastText: grey[100],
          },
          secondary: { main: grey[900] },
          success: { main: colors.mossGreen },
          error:  { main: colors.persianRed },
          divider: grey[800],
          background: {
            default: grey[100],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        } : {
          // palette values for dark mode
          primary: { main: colors.feldgrauGreen },
          secondary: { main: grey[100] },
          success: { main: colors.mossGreenCopilot },
          error:  { main: colors.persianRedCopilot },
          divider: 'rgba(255, 255, 255, 0.12)',
          background: {
            paper: grey[900],
          },
          text: {
            primary: grey[200],
            secondary: grey[300],
          },
        }
      ),
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

  return theme;
}

export default { useTheme, ColorModeContext }
