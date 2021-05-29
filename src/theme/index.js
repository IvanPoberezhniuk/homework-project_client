const theme = {
  props: {
    MuiAlert: {
      icon: false,
    },
  },
  palette: {
    primary: {
      main: '#02CC67',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffffff',
    },
    default: {
      main: '#CCCCCC',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
};

export default theme;
