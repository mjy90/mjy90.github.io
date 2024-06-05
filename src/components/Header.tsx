import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  Switch,
  Icon,
  Stack,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
  Launch,
} from '@mui/icons-material';

import LinkButton from './LinkButton';

import { ColorModeContext } from '../theme';

const pages: { title: string, path: string, external?: boolean }[] = [
  { title: 'Resume', path: 'resume' },
  { title: 'Projects', path: 'projects' },
  { title: 'On GitHub', path: 'https://github.com/mjy90/mjy90.github.io', external: true },
];

function HideOnScroll(props: { window?: () => Window, children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ColorModeToggle() {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);

  return (
    <Stack direction='row' alignItems='center'>
      <Icon sx={{ marginTop: '-5px' }}>
        <LightMode/>
      </Icon>
      <Tooltip title='Toggle light/dark theme' arrow>
        <span>
          <Switch
            color='default'
            checked={colorMode === 'dark'}
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          />
        </span>
      </Tooltip>
      <Icon sx={{ marginTop: '-5px' }}>
        <DarkMode />
      </Icon>
    </Stack>
  );
}

export default function ResponsiveAppBar(props: React.PropsWithChildren) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElNav);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar position='sticky'>
        <Container>
          <Toolbar disableGutters>
            {/* Nav menu on mobile */}
            <Box sx={{ mr: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                id='menu-button'
                size='large'
                color='inherit'
                aria-controls={menuOpen ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='basic-menu'
                anchorEl={anchorElNav}
                open={menuOpen}
                onClose={handleCloseNavMenu}
                MenuListProps={{
                  'aria-labelledby': 'menu-button',
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography variant='button'>
                      <LinkButton to={page.path} color='secondary'>{page.title}</LinkButton>
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <ColorModeToggle />
                </MenuItem>
              </Menu>
            </Box>

            {/* Site name */}
            <Box sx={{ flexGrow: 1 }}>
              <LinkButton to='/' color='inherit' sx={{ mr: 2 }}>
                <Typography
                  variant='h6'
                  noWrap
                  sx={{
                    margin: 0,
                    fontFamily: 'Courier New, monospace',
                    fontWeight: 600,
                    letterSpacing: '.3rem',
                    textTransform: 'none',
                  }}
                >
                  myoung.dev
                </Typography>
              </LinkButton>
            </Box>

            {/* Nav buttons on desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <LinkButton
                  key={index}
                  to={page.path}
                  color='inherit'
                  onClick={handleCloseNavMenu}
                  target={page.external ? '_blank' : undefined}
                  sx={{ mr: 2 }}
                >
                  {page.title}
                  {page.external && <Launch fontSize='inherit' sx={{ ml: 1 }} />}
                </LinkButton>
              ))}
              <ColorModeToggle />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
