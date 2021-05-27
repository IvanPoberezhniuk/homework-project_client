import { ThemeProvider } from '@material-ui/core';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { createMuiTheme } from '@material-ui/core/styles';

import theme from '../src/theme';

const providerFn = ({ theme, children }) => {
  const muTheme = createMuiTheme(theme);
  console.log(muTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [theme], { providerFn }));
