import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import AutoImageList from './AutoImageList';

export type Project = {
  title: string;
  description: string;
  images: string[] | (() => JSX.Element | JSX.Element[]);
  link: string;
};

type ProjectPreviewProps = {
  project: Project;
  side: 'left' | 'right';
};

export default function ProjectPreview({ project, side }: ProjectPreviewProps) {
  const { title, description, images, link } = project;
  const theme = useTheme();
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const startWithImage = isTinyScreen || side === 'left';

  const imageElement = typeof images === 'function' ? images() : (
    <CardMedia sx={{ width: (isTinyScreen ? '100%' : '40%') }}>
      <AutoImageList images={images} transformOrigin={startWithImage ? 'top left' : 'top right'} />
    </CardMedia>
  );

  const contentElement = (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant='h2' component='div'>{title}</Typography>
        <Typography variant='body1' component='div'>{description}</Typography>
      </CardContent>
    </Box>
  );

  return (
    <Card sx={{ display: 'flex', flexDirection: (isTinyScreen ? 'column' : 'row') }}>
      {startWithImage ? imageElement : contentElement}
      {startWithImage ? contentElement : imageElement}
    </Card>
  );
}
