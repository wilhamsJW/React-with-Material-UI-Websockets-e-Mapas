import { PaletteOptions } from "@mui/material";
import { createTheme } from "@mui/system";

const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#FFCD00',
        contrastText: '#242526'
    },
    background: {
        default: '#242526'
    }
}

const theme = createTheme({
    palette
})

export default theme;