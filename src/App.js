import { routes } from 'router/config';
import Router from 'router/Router';

// makeServer({ environment: 'development' });

const App = () => {
  return <Router routes={routes} />;
};

export default App;
