import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import AutoImageList from './AutoImageList';
import { ThemedProject } from '../constants/projects'
import ProjectDetailModal from './ProjectDetailModal';

type ProjectPreviewProps = {
  project: ThemedProject;
  side: 'left' | 'right';
};

export default function ProjectPreview({ project, side }: ProjectPreviewProps) {
  const { title, summary, images } = project;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const startWithImage = isSmallScreen || side === 'left';
  const flexDirection = isSmallScreen ? 'column' : (startWithImage ? 'row' : 'row-reverse');
  const mediaWidth = isSmallScreen ? 100 : 40;

  const [detailModalOpen, setDetailModalOpen] = useState(false);

  return (<>
    <Card>
      <CardActionArea
        sx={{ display: 'flex', flexDirection, alignItems: 'start' }}
        onClick={() => setDetailModalOpen(true)}
      >
        <CardMedia sx={{ width: `${mediaWidth}%` }}>
          <AutoImageList images={images} transformOrigin={startWithImage ? 'top left' : 'top right'} />
        </CardMedia>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: `${(100 - mediaWidth) || 100}%` }}>
          <CardContent sx={{ flex: '1 0 auto', padding: 3 }}>
            <Typography gutterBottom variant='h2' component='div'>{title}</Typography>
            <Typography variant='body1' component='div'>{summary}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
    <ProjectDetailModal
      project={project}
      isOpen={detailModalOpen}
      onClose={() => setDetailModalOpen(false)}
    />
  </>);
}
