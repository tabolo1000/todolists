import './App.css';
import styled from 'styled-components';
import fone from './assets/image/image.webp'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Todolists } from './components/todolist/Todolists';






function App() {
    return (
        <MainApp>
            <AppBarStyled
                position="fixed" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBarStyled>
            <Todolists />
        </MainApp>
    )
}

const AppBarStyled = styled(AppBar)({
    backgroundColor: "#bdd3d59d !important",
    borderRadius: "0 0 10px 10px"
})



const MainApp = styled.div`
    min-width: 100vw;
    background-image: url(${fone});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover ;
    object-fit: cover;
    min-height: 100vh;
`


export default App;




