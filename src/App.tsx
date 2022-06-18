import { Button, ThemeProvider } from "@mui/material";
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Júnior</Button>
    </ThemeProvider>

  );
}

export default App;
