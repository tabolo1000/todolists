import { useState } from 'react';
import './App.css';
import { v1, v4 } from "uuid";
import { Todolist } from "./components/todolist/Todolist";
import { TaskType } from './types/Task';
import { FilterType } from './types/todolist';
import styled from 'styled-components';
import { TitleInput } from './components/titleInput/TitleInput';
import fone from './assets/image/image.webp'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Fab, Grid, Paper } from '@mui/material';



type TasksType = {
    [x: string]: Array<TaskType>
}

type TodolistType = {
    id: string;
    title: string;
    filter: FilterType
}

let todolistId = v1();
let todolistId2 = v1()

const initialTasks: TasksType = {
    [todolistId]: [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
    ],
    [todolistId2]: [
        { id: v1(), title: 'HTML&CSS 1', isDone: true },
        { id: v1(), title: 'JS 1', isDone: true },
        { id: v1(), title: 'ReactJS 1', isDone: false },
        { id: v1(), title: 'Redux 1', isDone: false },
    ],

}

const initialTodolists: Array<TodolistType> = [
    { id: todolistId, title: "Technologes", filter: "All" },
    { id: todolistId2, title: "UI", filter: "All" }
]


function App() {
    const [todolists, setTodolist] = useState<Array<TodolistType>>(initialTodolists)
    const [tasks, setTasks] = useState<TasksType>(initialTasks)
    const date: Date = new Date();



    /* todolists method */
    const removeTodolist = (todolistId: string) => {
        setTodolist(todolists.filter((el: TodolistType) => (el.id !== todolistId)
        ))
    }
    const createTodolist = (title: string) => {
        const id = v1();
        setTodolist([
            {
                id,
                title,
                filter: 'All'
            },
            ...todolists
        ])
        setTasks({
            ...tasks,
            [id]: [],
        })

    }
    function changeFilter(todolistId: string, filter: FilterType) {
        setTodolist(todolists.map((el: TodolistType) => {
            return (el.id === todolistId) ? { ...el, filter } : el
        }))
    }
    const changeTitleTodolist = (todolistId: string, title: string) => {
        setTodolist(todolists.map((el: TodolistType) => (el.id === todolistId) ? { ...el, title } : el))
    }

    /* task method */
    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].filter(el => el.id !== taskId),
        })
    }
    const addTask = (todolistId: string, title: string) => {
        setTasks({
            ...tasks,
            [todolistId]: [
                ...tasks[todolistId],
                { id: v1(), title, isDone: false }
            ]
        })
    }
    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((el: TaskType) => {
                return (
                    (el.id === taskId) ? { ...el, isDone } : el
                )
            })
        })
    }
    const changeTitleTask = (todolistId: string, taskId: string, title: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((el: TaskType) => {
                return (el.id === taskId) ? { ...el, title } : el
            })
        })
    }


    const listTodolists = todolists.map(el => {
        return (
            <Grid item xs={12} sm={7} md={5} lg={4} >
                <Todolist
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    filter={el.filter}

                    tasks={tasks[el.id]}

                    removeTodolist={removeTodolist}
                    changeFilter={changeFilter}

                    addTask={addTask}
                    removeTask={removeTask}
                    changeStatus={changeStatus}
                    changeTitleTask={changeTitleTask}
                    changeTitleTodolist={changeTitleTodolist}
                />
            </Grid>
        )
    })


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
            <ContainerApp fixed  >
                <Grid
                    p={"5px 0 20px"}
                    container>
                    <Grid item >
                        <TitleInputArea>
                            <TitleInput onClick={createTodolist}></TitleInput>
                        </TitleInputArea>
                    </Grid>
                </Grid>
                <Grid container
                    padding={1}
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    {(listTodolists.length) ? listTodolists : <span style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", color: "white", fontWeight: 800, fontSize: "50px" }}>Add todolist!</span>}
                </Grid>

            </ContainerApp>
        </MainApp>
    )
}

const AppBarStyled = styled(AppBar)({
    backgroundColor: "#bdd3d59d !important",
    borderRadius: "0 0 10px 10px"
})

const TitleInputArea = styled(Paper)({
    backgroundColor: "#bdd3d59d !important",
    width: 280,
    padding: 10,
    margin: "70px 0 0",
})



const MainApp = styled.div`
    min-height: 100vh;
    background-image: url(${fone});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover ;
    object-fit: cover;
`

const ContainerApp = styled(Container)({
    padding: "20px 0",
    border: "2px solid #0000005a",
    backgroundColor: "#0000005a",
    height: "100vh",
})


export default App;




