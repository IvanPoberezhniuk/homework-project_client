import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'></header>
      </div>
    </ThemeProvider>
  );
};

export default App;
