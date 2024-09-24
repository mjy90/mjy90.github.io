import React, { useMemo } from 'react';
import {
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import ProjectPreview, { Project } from '../components/ProjectPreview';

import PortfolioDark from '../assets/myoung.dev dark.png'
import PortfolioLight from '../assets/myoung.dev light.png'
import FarmManager from '../assets/Farm Manager in Action.jpg'
import DocFinder from '../assets/Doc Finder.png'
import Mikerspace from '../assets/Mikerspace.png'
import MikerspaceProducts from '../assets/Mikerspace Products.png'
import MikeWithPictureFrameAndDumbSmile from '../assets/Mike with Picture Frame and Dumb Smile.jpg'
import PlexiCamDemo from '../assets/PlexiCam Demo.png'

export default function Projects() {
  const theme = useTheme();

  const projects: Project[] = useMemo(() => [
    {
      title: 'Portfolio',
      description: `This website! It's responsive and has a light and a dark theme.
        Built with React, TypeScript, Material UI, GitHub Actions, and GitHub Pages.
      `,
      images: theme.palette.mode === 'light' ? [PortfolioLight] : [PortfolioDark],
      link: '',
    },
    {
      title: 'Farm Manager',
      description: `A web app I built for managing the daily operations of Crop One's vertical
        hydroponic farming units. Built with Vue, Django, and PostgreSQL.
      `,
      images: [FarmManager],
      link: '',
    },
    {
      title: 'Doc Finder',
      description: `A tool that made finding a doctor across multiple insurance providers much easier.
        Built with Bootstrap, jQuery, MVC.NET, SSIS, and SQL Server.
      `,
      images: [DocFinder],
      link: '',
    },
    {
      title: 'The Mikerspace',
      description: `A maker business I started, focusing mostly on woodworking.
        Built with Squarespace, a GoPro, and many hand and power tools.
      `,
      images: [Mikerspace, MikerspaceProducts, MikeWithPictureFrameAndDumbSmile],
      link: 'https://miker.space',
    },
    {
      title: 'PlexiCam Demo',
      description: `An interactive demo I built for trying out the PlexiCam, a transparent camera
        mount that helps you maintain eye contact during video calls, before you buy it.
        It creates a virtual desktop experience in which you can arrange windows to suit your
        workflow and drag a webcam across the screen, constraining the movement
        of the PlexiCam's constituent parts. With a little bit of math, it's able to simulate the
        actual size of PlexiCam on your screen, so you can see how it will fit into your setup.
        Built with HTML canvas and JavaScript.
      `,
      images: [PlexiCamDemo],
      link: 'https://www.plexicam.com/pages/simulation',
    },
  ], [theme.palette.mode]);

  return (
    <Container sx={{ my: 3 }}>
      <Stack spacing={3}>
        <Typography variant='h1'>Notable Projects</Typography>
        <Typography>
          Curious what I've gotten up to over the years? These are some of the most interesting projects I've worked on.
        </Typography>
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            project={project}
            side={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </Stack>
    </Container>
  );
}
