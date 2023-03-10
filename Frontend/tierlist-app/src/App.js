import logo from './logo.svg';
import './App.css';
import './home/home-card';
import HomeCard from './home/home-card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App">
        <header className="App-header">
          <HomeCard></HomeCard>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
