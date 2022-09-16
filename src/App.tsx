import { GlobalStyle } from "./styles/globalStyle";
import userPersistState from './utils/userPersistState';
import Routes from "./routes";
import {Layout} from "./components/Layout";
import {ThemeProvider, DefaultTheme} from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import roxo from './styles/themes/roxo';
function App() {
  
  const [theme, setTheme] = userPersistState<DefaultTheme>("theme", dark);

  const alterTheme = () => {
    setTheme(
      theme.title === 'dark'? dark :
      theme.title === 'light' ? light : roxo
    );
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <Routes /> */}
      <GlobalStyle />
      <Layout alterTheme={alterTheme}/>
    </ThemeProvider>
  )
}

export default App;
