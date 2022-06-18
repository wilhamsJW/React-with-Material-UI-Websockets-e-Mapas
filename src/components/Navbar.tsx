import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export function Navbar() {
    return (
        <>
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
    </>
    )
}