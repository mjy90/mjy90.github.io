import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Header from './components/Header';
import Home from './components/Home';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" my={3}>
      {'© '}
      <Link color="inherit" href="https://mikeyoung.tech">
        Mike Young
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <Header />
      <Container disableGutters>
        <Box my={3}>
          <Home />
        </Box>
      </Container>
      <Copyright />
    </>
  );
}
