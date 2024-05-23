import React from 'react';
import {
  Container,
  Stack,
  Typography,
} from '@mui/material';

import ProjectPreview, { Project } from '../components/ProjectPreview';

import Portfolio from '../assets/mikeyoung.tech.png'
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
    description: `A web app I built for managing the daily operations of Crop One Holdings' vertical
      hydroponic farming units. Built with Vue, Django, and PostgreSQL.
    `,
    images: [FarmManager],
    link: '',
  },
  {
    title: 'Doc Finder',
    description: `A tool for finding a doctor across multiple insurance providers.
      In the backend, a daily job would check for new flat files, provided in various formats by
      insurance carriers, extract and normalize that data, and store it in a SQL Server database.
      The frontend was designed to be simple and easy-to-use to meet our clientele where they are,
      since they weren't the most tech-savvy. Code-wise, the interface was a standalone modal
      window that could be dropped into any page with a single line of code. This was important
      because I was working from rather... shall we say "freeform" requirements, and I didn't
      want to shoot Future Mike in the foot.
      Built with Bootstrap, jQuery, MVC.NET, SSIS, and SQL Server.
    `,
    images: [DocFinder],
    link: '',
  },
  {
    title: 'The Mikerspace',
    description: `A maker business I started, focusing mostly on woodworking. I threw together a
      website, designed a snazzy logo, and built up a small inventory of products.
      I sold (and still sell!) mostly home goods, and I did a couple of custom commissions for friends
      and family. Christmas gifts were a big hit that year, too!
      I also started a YouTube channel, but I pivoted away from that after uploading just one video.
      There are a couple more half-done videos sitting on a hard drive along with dozens of hours of
      footage from other projects. I'll get back to editing those one of these days...
      Less technically impressive than the rest, but The Mikerspace represents a scary thing that I took a whack
      at. I was fed up with a dead-end software job with toxic management, so I decided burning
      through my savings to start a woodworking business was a worthwhile endeavor.
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
