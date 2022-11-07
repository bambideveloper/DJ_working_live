import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import Routes from '@routes/index.js';
import store from "@store";
import WKProvider from "@store/providers/WKProvider";
import theme from "@themes";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <WKProvider>
            <CssBaseline />
            <Routes />
        </WKProvider>
      </Provider>
    </ThemeProvider>
);
}

export default App;
