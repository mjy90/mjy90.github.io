import React from 'react';
import {
  Grow,
  ImageList,
  ImageListItem,
} from '@mui/material';

type AutoImageListProps = {
  images: string[];
  transformOrigin?: string;
};

export default function AutoImageList({ images, transformOrigin = 'top left' }: AutoImageListProps) {
  const cols = Math.round(Math.sqrt(images.length));
  const rows = Math.ceil(images.length / cols);
  // Fill the first row out by blowing up the first image
  const firstImageWidth = cols * rows - images.length + 1;

  return (
    <ImageList
      variant='quilted'
      cols={cols}
      sx={{ margin: 0 }}
    >
      {images.map((image, index) => (
        <Grow
          in={true}
          style={{ transformOrigin }}
          timeout={1000 * (index + 1)}
        >
          <ImageListItem
            key={index}
            cols={index === 0 ? firstImageWidth : 1}
            sx={{ fit: 'crop' }}
          >
            <img
              src={image}
              style={{ width: '100%' }}
            />
          </ImageListItem>
        </Grow>
      ))}
    </ImageList>
  );
}
