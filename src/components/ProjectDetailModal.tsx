import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close as CloseIcon, Launch } from '@mui/icons-material';

import { Project } from '../constants/projects'
import AutoImageList from './AutoImageList';
import HoverToZoomImage from './HoverToZoomImage';

type ProjectDetailProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailProps) {
  const { title, description, images, link, linkText } = project;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const mediaWidth = isSmallScreen ? 100 : 40;

  const imageElement = typeof images === 'function' ? images(theme.palette) : (
    <CardMedia sx={{ width: `${mediaWidth}%` }}>
      <AutoImageList images={images} />
      {/* <HoverToZoomImage image={images[0]} /> */}
    </CardMedia>
  );

  const contentElement = (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: `${(100 - mediaWidth) || 100}%` }}>
      <DialogTitle>
        <Typography variant='h2' component='div'>{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ flex: '1 0 auto' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 11,
            top: 11,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant='body1' component='div'>{description}</Typography>
      </DialogContent>
      {link && (<>
        {/* <Divider /> */}
        <DialogActions sx={{ padding: 3 }}>
          <Button
            size='small'
            variant='contained'
            color='primary'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {linkText || 'Check it out!'}
            <Launch fontSize='inherit' sx={{ ml: 1 }} />
          </Button>
        </DialogActions>
      </>)}
    </Box>
  );

  return (
    <Dialog
      fullWidth
      maxWidth='lg'
      scroll='paper'
      open={isOpen}
      onClose={onClose}
    >
      <Card sx={{ display: 'flex', flexDirection: (isSmallScreen ? 'column' : 'row') }}>
        {imageElement}
        {contentElement}
      </Card>
    </Dialog>
  );
}
