import roboto from '@fontsource/roboto';

const theme = {
  props: {
    MuiAlert: {
      icon: false,
    },
  },
  palette: {
    primary: {
      light: 'rgba(2, 204, 103, 0.5)',
      main: '#02CC67',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F4F4F4',
      contrastText: '#ffffff',
    },
    default: {
      main: '#CCCCCC',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  typography: {
    fontSize: 18,
    fontFamily: ['Roboto', 'serif'].join(','),
  },
};

export default theme;