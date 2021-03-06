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
      darker: '#e0e0e0',
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
  overrides: {
    MuiInput: {
      root: {
        fontWeight: 400,
        background: '#F4F4F4',
        border: '1px solid #CCCCCC',
        borderRadius: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        background: '#F4F4F4',
        borderRadius: 0,
        padding: '4px 12px',
      },
    },
  },
};

export default theme;
