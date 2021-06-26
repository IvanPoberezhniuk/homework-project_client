import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import App from './App';
import store from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const muTheme = createMuiTheme(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={muTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
