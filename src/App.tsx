import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from './theme'
import DriveEtaIcon from '@mui/icons-material/DriveEta';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      {/** CssBaseline Responsável por alterar toda a cor do meu body para dark, onde foi definida em theme, para saber mais consulte a doc do material UI */}
      {/** AppBar -> menu superior do MAterial UI
       * position="static" -> para que o menu fique fixo no topo caso a page de scrool
       * enableColorOnDark -> captura a cor do primary de theme
       * IconButton -> temos o button padrão mas esse nos ajuda a posicionar o icon 
       * color="inherit" -> quer dizer que ele vai herdar a cor do component
       * edge='start' -> sempre alinhado a esquerda
       */}
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit" edge='start'>
            <DriveEtaIcon/>
          </IconButton>
          <Typography variant="h6">Delivery Júnior</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
