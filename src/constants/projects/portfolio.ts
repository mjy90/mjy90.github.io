import { Project } from './Project.type';
import PortfolioDark from '../../assets/myoung.dev dark.png'
import PortfolioLight from '../../assets/myoung.dev light.png'

export const portfolio: Project = {
  title: 'Portfolio',
  summary: `This website! It's responsive and has a light and a dark theme.
    Built and hosted for free with React, TypeScript, Material UI, GitHub Actions,
    and GitHub Pages.
  `,
  description: `This website! It's responsive and has a light and a dark theme.
    Built and hosted for free with React, TypeScript, Material UI, GitHub Actions,
    and GitHub Pages.
    Click "On GitHub" in the header to check out the source code!
    Spin up your own site by following the README 🚀
  `,
  images: (palette) => palette.mode === 'light' ? [PortfolioLight] : [PortfolioDark],
};
