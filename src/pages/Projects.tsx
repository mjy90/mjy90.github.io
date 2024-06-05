import React from 'react';
import {
  Container,
  Stack,
  Typography,
} from '@mui/material';

import ProjectPreview, { Project } from '../components/ProjectPreview';

import Portfolio from '../assets/myoung.dev.png'
import FarmManager from '../assets/Farm Manager in Action.jpg'
import DocFinder from '../assets/Doc Finder.png'
import Mikerspace from '../assets/Mikerspace.png'
import MikerspaceProducts from '../assets/Mikerspace Products.png'
import MikeWithPictureFrameAndDumbSmile from '../assets/Mike with Picture Frame and Dumb Smile.jpg'

const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'This website! Built with React, Material-UI, and GitHub Pages.',
    images: [Portfolio],
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
];

export default function Projects() {
  return (
    <Container>
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
