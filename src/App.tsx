import './App.css';
import { TaskType } from './types/Task';
import { FilterType } from './types/todolist';
import styled from 'styled-components';
import fone from './assets/image/image.webp'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppDispatch, useAppSelector } from './store/store';
import { Todolists } from './components/todolist/Todolists';



export type TasksType = {
    [x: string]: Array<TaskType>
}

export type TodolistType = {
    id: string;
    title: string;
    filter: FilterType
}


function App() {

    const todolists = useAppSelector<Array<TodolistType>>(state => state.todolists);
    const dispatch = useAppDispatch();
    const date: Date = new Date();


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
    background-image: url(${fone});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover ;
    object-fit: cover;
    min-height: 100vh;
`


export default App;




