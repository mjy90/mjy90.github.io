import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material';
import theme from '../theme';

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
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const imageElement = typeof images === 'function' ? images() : (
    <CardMedia sx={{ width: (isTinyScreen ? '100%' : '40%') }}>
      <AutoImageList images={images} />
    </CardMedia>
  );

  const contentElement = (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant='h2' component='div'>{title}</Typography>
        <Typography variant='body1' component='div'>{description}</Typography>
      </CardContent>
    </Box>
  );

  return (
    <Card sx={{ display: 'flex', flexDirection: (isTinyScreen ? 'column' : 'row') }}>
      {(isTinyScreen || side === 'left') ? imageElement : contentElement}
      {(isTinyScreen || side === 'left') ? contentElement : imageElement}
    </Card>
  );
}
