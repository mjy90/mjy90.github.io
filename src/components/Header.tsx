import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Launch,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';

import ColorModeToggle from './ColorModeToggle';

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

export default function ResponsiveAppBar(props: React.PropsWithChildren) {
  const location = useLocation();
  const page = pages.find(page => location.pathname === `/${page.path}`);
  const theme = useTheme();
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('sm'))
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
        <Container disableGutters={isTinyScreen}>
          <Toolbar disableGutters>

            {/* Mobile */}
            <Box sx={{display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              {/* Nav menu */}
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
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={page.path}
                    aria-label={page.title}
                  >
                    <Typography variant='button'>
                        {page.title}
                        {page.external && <Launch fontSize='inherit' sx={{ ml: 1 }} />}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Box sx={{ mx: 'auto' }}>
                    <ColorModeToggle />
                  </Box>
                </MenuItem>
              </Menu>

              {/* Breadcrumbs */}
              <Breadcrumbs
                color='inherit'
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                {/* Site name */}
                <Button href='/' color='inherit'>
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
                </Button>
                {/* Current page */}
                {location.pathname !== '/' && (
                  <Button href={page?.path} color='inherit'>
                    {page ? page.title : 'Home'}
                  </Button>
                )}
              </Breadcrumbs>
            </Box>

            {/* Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
              {/* Nav tabs */}
              <Tabs
                value={location.pathname}
                textColor='inherit'
                sx={{ flexGrow: 1, mr: 2 }}
              >
                <Tab
                  value='/'
                  label='myoung.dev'
                  href='/'
                  sx={{
                    margin: 0,
                    fontFamily: 'Courier New, monospace',
                    fontWeight: 600,
                    fontSize: theme.typography.h5.fontSize,
                    letterSpacing: '.3rem',
                    textTransform: 'none',
                    marginRight: 'auto',
                  }}
                />
                {/* <Box sx={{ display: 'flex', flexGrow: 1, margin: 'auto' }} /> */}
                {pages.map((page, index) => (
                  <Tab
                    key={index}
                    value={`/${page.path}`} // Add the slash to match location.pathname
                    label={page.title}
                    icon={page.external ? <Launch fontSize='inherit' /> : undefined}
                    iconPosition='end'
                    href={page.path}
                    target={page.external ? '_blank' : undefined}
                  />
                ))}
              </Tabs>
              <ColorModeToggle />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
