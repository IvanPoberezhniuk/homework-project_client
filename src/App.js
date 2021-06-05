import Router from './router/Router';

import Header from './components/shared/header/Header';
import Sidebar from './components/shared/sidebar/Sidebar';
import './App.css';
import { routes } from './router/config';

const App = () => {
  return (
    <div className='App'>
      <Header />
      {/* <Link to='/home'>Home</Link>
            <Link to='/home/signin'>Login</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/home/signup'>Signup</Link>
            <Link to='/users'>Users</Link>
            <Link to='/dashboard'>Dashboard</Link> */}
      <Sidebar />
      <Router routes={routes} />
    </div>
  );
};

export default App;
