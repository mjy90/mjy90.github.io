import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Header from './components/Header';
import Home from './routes/Home';
import { Route, Routes } from 'react-router';
import Projects from './routes/Projects';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center' my={3}>
      {'© '}
      <Link color='inherit' href='https://mikeyoung.tech'>
        Mike Young
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Container disableGutters>
        <Box my={3}>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/projects' Component={Projects} />
          </Routes>
        </Box>
      </Container>
      <Copyright />
    </>
  );
}
