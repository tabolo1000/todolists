import { Dispatch } from "redux";
import { FilterType, TodolistDomainType } from "../../../types/todolist";
import { todolistAPI } from "../../../api/todolistAPI/todolist-api";
import { TodolistType } from "../../../api/todolistAPI/Todolist_API_inteface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




enum ACT {
    ADD_TODOLIST = 'ADD_TODOLIST',
    CHANGE_TITLE_TODOLIST = 'CHANGE_TITLE_TODOLIST',
    CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST',
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
    SET_TODOLISTS = 'SET_TODOLISTS',
}
const initialTodolists: Array<TodolistDomainType> = [
]


export const todolistsReducer = createSlice({
    name: "todolists",
    initialState: initialTodolists,
    reducers: {
        setTodolistAC: (state, action: PayloadAction<{ todolists: TodolistType[] }>) => {
            state.splice(0, state.length, ...action.payload.todolists.map(todolist => ({
                ...todolist,
                filter: "All" as FilterType
            })));
        },
        createTodolistAC: (state, action: PayloadAction<{ id: string, title: string }>) => {
            state.unshift({
                id: action.payload.id,
                title: action.payload.title,
                filter: 'All',
                addedDate: "",
                order: 0,
            })
        },
        changeTitleTodolistAC: (state, action: PayloadAction<{ id: string, title: string }>) => {
            state.forEach(el => (el.id === action.payload.id)
                ? el.title = action.payload.title
                : el
            );
        },
        changeFilterTodolistAC: (state, action: PayloadAction<{ id: string, filter: FilterType }>) => {
            state.forEach(el => (el.id === action.payload.id)
                ? el.filter = action.payload.filter
                : el
            );
        },
        removeTodolistAC: (state, action: PayloadAction<{ id: string }>) => {
            return state.filter((el: TodolistDomainType) => (el.id !== action.payload.id))
        },

    }
})





//-------------------------------- thunks----------------------------

export const SetTodolistTC = () => {
    return (dispatch: Dispatch) => {
        todolistAPI.getTodolists()
            .then(el => {
                dispatch(todolistsReducer.actions.setTodolistAC({ todolists: el.data }))
            })
    }
}

