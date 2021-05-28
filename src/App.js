import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Router from './router/Router';

import theme from './theme';
import './App.css';
import { routes } from './router/config';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <header className='App-header'>
          <Link to='/home'>Home</Link>
          <Link to='/home/signin'>Login</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/home/signup'>Signup</Link>
          <Link to='/users'>Users</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </header>
        <Router routes={routes} />
        <div className='App' />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
