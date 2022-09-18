import { GlobalStyle } from "./styles/globalStyle";
import Routes from "./routes/index";
import {ThemeProvider} from 'styled-components';
import {ThemeContext} from './hooks/theme';


function App() {
  const root = ThemeContext.ThemeProvider();
  return (
    <ThemeProvider theme={root.theme}>
      <Routes setDefaultTheme={root.setDefaultTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
