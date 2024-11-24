import React, { useMemo } from 'react';
import {
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import ProjectPreview from '../components/ProjectPreview';
import projects, { ThemedProject } from '../constants/projects';

export default function Projects() {
  const theme = useTheme();
  const themedProjects: ThemedProject[] = useMemo(() => projects.map(project => ({
    ...project,
    images: (project.images instanceof Function ? project.images(theme.palette) : project.images),
  })), [projects, theme.palette]);

  return (
    <Container sx={{ my: 3 }}>
      <Stack spacing={3}>
        <Typography variant='h1'>Notable Projects</Typography>
        <Typography>
          Curious what I've gotten up to over the years? These are some of the most interesting
          projects I've worked on. Click a project card to learn more!
        </Typography>
        {themedProjects.map((project, index) => (
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
