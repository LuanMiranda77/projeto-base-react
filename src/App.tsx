import { GlobalStyle } from "./styles/globalStyle";
import userPersistState from './utils/userPersistState';
import Routes from "./routes";
import {Layout} from "./components/Layout";
import {ThemeProvider, DefaultTheme} from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import roxo from './styles/themes/roxo';

function App() {
  const [theme, setTheme] = userPersistState<DefaultTheme>("theme", light);

  const alterTheme = () => {
    setTheme(
      theme.title === 'dark'? light :
      theme.title === 'light' ? dark : roxo
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <Layout alterTheme={alterTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
