import { Project } from './Project.type';
import Mikerspace from '../../assets/Mikerspace.png'
import MikerspaceProducts from '../../assets/Mikerspace Products.png'
// import MikeWithPictureFrameAndDumbSmile from '../../assets/Mike with Picture Frame and Dumb Smile.jpg'
import MikeWithPictureFrame from '../../assets/Mike with Picture Frame.jpg'

export const mikerspace: Project = {
  title: 'The Mikerspace',
  summary: `A maker business I started, focusing mostly on woodworking.
    Built with Squarespace, a GoPro, and many hand and power tools.
  `,
  description: `A maker business I started, focusing mostly on woodworking.
    Built with Squarespace, a GoPro, and many hand and power tools.
  `,
  images: [Mikerspace, MikerspaceProducts, MikeWithPictureFrame],
  link: 'https://miker.space',
  linkText: 'Visit The Mikerspace',
};
