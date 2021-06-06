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
      main: '#F4F4F4',
      contrastText: '#ffffff',
    },
    default: {
      main: '#CCCCCC',
    },
    background: {
      paper: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {},
};

export default theme;
