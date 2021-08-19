import { withServer } from 'storybook-mirage';

import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';

import { makeServer } from '../src/mirage';
import theme from '../src/theme';

// export const decorators = [
//   withServer(() => makeServer({ environment: 'development' })),
// ];

const providerFn = ({ theme, children }) => {
  const muTheme = createMuiTheme(theme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [theme], { providerFn }));
