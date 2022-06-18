import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from './theme'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      {/** CssBaseline Responsável por alterar toda a cor do meu body para dark, onde foi definida em theme, para saber mais consulte a doc do material UI */}
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
