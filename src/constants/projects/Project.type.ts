import { Palette } from '@mui/material/styles';

export type Project = {
  title: string;
  summary: string;
  description?: string;
  images: string[] | ((palette: Palette) => string[]);
  link?: string;
  linkText?: string;
};

export type ThemedProject = Project & {
  images: string[];
};
