import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import {
  Box,
  Container,
  CssBaseline,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import { useTheme, ColorMode, ColorModeContext } from './theme';
import useLocalStorage from './hooks/useLocalStorage';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center' my={3}>
      {'© '}
      <Link color='inherit' href='https://myoung.dev'>
        Mike Young
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>('colorMode', prefersDarkMode ? 'dark' : 'light');
  const theme = useTheme(colorMode);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container disableGutters sx={{ marginBottom: 3 }}>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/resume' Component={Resume} />
            <Route path='/projects' Component={Projects} />
          </Routes>
        </Container>
        <Copyright />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
