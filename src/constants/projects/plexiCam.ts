import { Project } from './Project.type';
import PlexiCamDemo from '../../assets/PlexiCam Demo.png'

export const plexiCam: Project = {
  title: 'PlexiCam',
  summary: `An interactive virtual desktop experience I built for trying out the PlexiCam,
    a transparent camera mount that helps you maintain eye contact during video calls, before
    you buy it. The demo allows you to arrange windows to suit your
    workflow and drag a webcam across the screen, constraining the movement
    of the PlexiCam's constituent parts. With a little bit of math, it's able to simulate the
    actual size of PlexiCam on your screen, so you can see how it will fit into your setup.
    Built with HTML canvas and JavaScript.
  `,
  description: `An interactive virtual desktop experience I built for trying out the PlexiCam,
    a transparent camera mount that helps you maintain eye contact during video calls, before
    you buy it. The demo allows you to arrange windows to suit your
    workflow and drag a webcam across the screen, constraining the movement
    of the PlexiCam's constituent parts. With a little bit of math, it's able to simulate the
    actual size of PlexiCam on your screen, so you can see how it will fit into your setup.
    Built with HTML canvas and JavaScript.
  `,
  images: [PlexiCamDemo],
  link: 'https://www.plexicam.com/pages/simulation',
  linkText: 'Try the PlexiCam Simulation',
};
