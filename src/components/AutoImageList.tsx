import React from 'react';
import {
  ImageList,
  ImageListItem,
} from '@mui/material';

type AutoImageListProps = {
  images: string[];
};

export default function AutoImageList({ images }: AutoImageListProps) {
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
      ))}
    </ImageList>
  );
}
