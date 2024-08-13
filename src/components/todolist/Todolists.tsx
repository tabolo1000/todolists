import { Container, Grid, Paper, styled } from "@mui/material";
import { TodolistType } from "../../App";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Todolist } from "./Todolist";
import { changeFilterTodolistAC, changeTitleTodolistAC, createTodolistAC, removeTodolistAC } from "../reducers/todolists/todolistsReducer";
import { TitleInput } from "../titleInput/TitleInput";
import { v1 } from "uuid";




export const Todolists = () => {
    const todolists = useAppSelector<Array<TodolistType>>(state => state.todolists);
    const dispatch = useAppDispatch();

    const listTodolists = todolists.map(({
        id,
        title,
        filter,
    }: TodolistType) => {
        return (
            <Grid item xs={12} sm={7} md={5} lg={4} >
                <Todolist
                    key={id}
                    id={id}
                    title={title}
                    filter={filter}

                    removeTodolist={() => dispatch(removeTodolistAC(id))}
                    changeFilter={() => dispatch(changeFilterTodolistAC(id, filter))}
                    changeTitleTodolist={() => dispatch(changeTitleTodolistAC(id, title))}
                />
            </Grid>
        )
    })
    return (
        <ContainerApp fixed  >
            <Grid
                p={"5px 0 20px"}
                container>
                <Grid item >
                    <TitleInputArea>
                        <TitleInput onClick={(title: string) => dispatch(createTodolistAC(v1(), title))}></TitleInput>
                    </TitleInputArea>
                </Grid>
            </Grid>
            <Grid container
                wrap='wrap'
                padding={1}
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                minHeight={"50vh"}
            >
                {(listTodolists.length) ? listTodolists : <span style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", color: "white", fontWeight: 800, fontSize: "50px" }}>Pin your first todolist!</span>}
            </Grid>

        </ContainerApp>
    )
}




const TitleInputArea = styled(Paper)({
    backgroundColor: "#bdd3d59d !important",
    width: 280,
    padding: 10,
    margin: "70px 0 0",
})

const ContainerApp = styled(Container)({
    padding: "20px 0",
    border: "2px solid #0000005a",
    backgroundColor: "#0000005a",
    minHeight: "100vh",
})