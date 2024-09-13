import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Todolist } from "./Todolist";

import { v1 } from "uuid";
import { FilterType, TodolistDomainType } from "../../types/todolist";
import { useCallback, useEffect, useMemo } from "react";
import { SetTodolistTC, todolistsReducer } from "../reducers/todolists/todolistsReducer";





export const useTodolists = () => {

    const todolists = useAppSelector<Array<TodolistDomainType>>(state => state.todolists);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(SetTodolistTC())
    }, [])

    console.log("Todolists")

    // hendlers for todolist
    const onClickSetTitle = useCallback((title: string) => { dispatch(todolistsReducer.actions.createTodolistAC({ id: v1(), title })) }, [dispatch]);
    const onRemoveTodolist = useCallback((id: string) => dispatch(todolistsReducer.actions.removeTodolistAC({ id })), [dispatch]);
    const onChangeFilter = useCallback((id: string, filter: FilterType) => dispatch(todolistsReducer.actions.changeFilterTodolistAC({ id, filter })), [dispatch]);
    const onChangeTitleTodolist = useCallback((id: string, title: string) => dispatch(todolistsReducer.actions.changeTitleTodolistAC({ id, title })), [dispatch]);
    const listTodolists = useMemo(
        () => todolists.map(({
            id,
            title,
            filter,
        }: TodolistDomainType) => (
            <Grid key={id} item xs={12} sm={7} md={5} lg={4} >
                <Todolist
                    id={id}
                    title={title}
                    filter={filter}

                    removeTodolist={onRemoveTodolist}
                    changeFilter={onChangeFilter}
                    changeTitleTodolist={onChangeTitleTodolist}
                />
            </Grid>
        )), [todolists, onRemoveTodolist, onChangeFilter, onChangeTitleTodolist]
    )


    return {
        onClickSetTitle,
        listTodolists
    }
}