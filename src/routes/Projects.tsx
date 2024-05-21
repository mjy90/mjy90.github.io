import React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import Portfolio from '../assets/mikeyoung.tech.png'
import FarmManager from '../assets/Farm Manager in Action.jpg'

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'This website! Built with React, Material-UI, and GitHub Pages.',
    image: Portfolio,
    link: '',
  },
  {
    title: 'Farm Manager',
    description: `A web app I built for managing the daily operations of Crop One Holdings' vertical
      hydroponic farming units. Built with Vue, Django, and PostgreSQL.
    `,
    image: FarmManager,
    link: '',
  }
]

type ProjectPreviewProps = {
  project: Project;
  side: 'left' | 'right';
};

function ProjectPreview({ project, side }: ProjectPreviewProps) {
  const { title, description, image, link } = project;

  const imageElement = (
    <Grid item xs={12} md={6} lg={4}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%' }}
      />
    </Grid>
  );

  const textElement = (
    <Grid item xs={12} md={6} lg={8}>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='body1'>{description}</Typography>
    </Grid>
  );

  return (
    <>
      {side === 'left' ? imageElement : textElement}
      {side === 'left' ? textElement : imageElement}
    </>
  );
}

export default function Projects() {
  return (
    <Container>
      <Typography variant='h1'>Notable Projects</Typography>
      <Typography>
        Curious what I've gotten up to over the years? These are some of the most interesting projects I've worked on.
      </Typography>
      <Grid container>
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            project={project}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </Grid>
    </Container>
  );
}
