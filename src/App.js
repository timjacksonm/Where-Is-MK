import Router from './Router';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9f00',
    },
    secondary: {
      main: '#ea1a30',
    },
    text: {
      secondary: '#b27c23',
    },
  },
  typography: {
    fontSize: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
