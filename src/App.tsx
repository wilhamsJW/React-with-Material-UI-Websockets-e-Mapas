import { 
  CssBaseline, 
  Grid, 
  Select, 
  ThemeProvider, 
  MenuItem, 
  Button 
} from "@mui/material";
import theme from './theme'
import { Navbar } from './components/Navbar'
import { styled } from '@mui/material/styles'

// Estilizando a tag form sem ter que estilizar dentro dela como feito abaixo na div do button
const Form = styled('form')(({ theme }) => ({margin: theme.spacing(1)}))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      {/** CssBaseline Responsável por alterar toda a cor do meu body para dark, onde foi definida em theme, para saber mais consulte a doc do material UI */}
      <Navbar/>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Form>
            {/** fullWidth displayEmpty defaultValue={""} -> faz com que ocupe um maior espaço */}
            <Select fullWidth displayEmpty defaultValue={""}>
              <MenuItem value="">
                <em>Selecione uma rota</em>
              </MenuItem>
              <MenuItem value="">
                Rota 01
              </MenuItem>
            </Select>
            {/** margin: theme.spacing(1) -> irá dá um espaçamento de 8px para todos os lados do meu button, 8px pq o padrão de um px do materail ui é 8px */}
            <div style={{textAlign: 'center', margin: theme.spacing(1)}}>
              <Button type='submit' variant="contained">Iniciar Rota</Button>
            </div>
          </Form>
        </Grid>
        <Grid item xs={12} sm={9}></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
