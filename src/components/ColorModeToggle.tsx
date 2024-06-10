import React from 'react';
import { Switch, Stack, Tooltip, Icon } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import { ColorModeContext } from '../theme';

export default function ColorModeToggle() {
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
