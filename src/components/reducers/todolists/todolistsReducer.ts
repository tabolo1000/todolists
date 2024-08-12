import { v1 } from "uuid"
import { TodolistType } from "../../../App"
import exp from "constants";
import { FilterType } from "../../../types/todolist";
import {Reducer} from "react";


// type TodolistReducerType = Reducer<Array<TodolistType>, TodolistActions>
export interface ITodolistReducer {
    (state: Array<TodolistType>, action: TodolistActions): Array<TodolistType>;
}


enum ACT {
    ADD_TODOLIST = 'ADD_TODOLIST',
    CHANGE_TITLE_TODOLIST = 'CHANGE_TITLE_TODOLIST',
    CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST',
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
}

type TodolistActions = CreateTodolistType | ChangeTitleTodolistType
    | ChangeFilterTodolistType | RemoveTodolistType

export const todolistsReducer: ITodolistReducer = (initialState, action) => {

    switch (action.type) {
        case ACT.ADD_TODOLIST: {
            const id = v1()
            return ([
                {
                    id,
                    title: action.payload.id,
                    filter: 'All',
                },
                ...initialState
            ])
        };
        case ACT.CHANGE_TITLE_TODOLIST: {
            return (
                initialState.map((el: TodolistType) =>
                    (el.id === action.payload.id)
                        ? { ...el, title: action.payload.title }
                        : el)
            )
        };
        case ACT.CHANGE_FILTER_TODOLIST: {
            return (
                initialState.map((el: TodolistType) => {
                    return (el.id === action.payload.id)
                        ? { ...el, filter: action.payload.filter }
                        : el
                })
            );
        };
        case ACT.REMOVE_TODOLIST: {
            return (
                initialState.filter((el: TodolistType) => (el.id !== action.payload.id))
            )
        };
        default:
            return initialState
    }
};

type CreateTodolistType = ReturnType<typeof createTodolistAC>;
type ChangeTitleTodolistType = ReturnType<typeof changeTitleTodolistAC>;
type ChangeFilterTodolistType = ReturnType<typeof changeFilterTodolistAC>;
export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>




export const createTodolistAC = (id: string, title: string) => {
    return {
        type: ACT.ADD_TODOLIST,
        payload: {
            id,
            title,
        },
    } as const;
};

export const changeTitleTodolistAC = (id: string, title: string) => {
    return {
        type: ACT.CHANGE_TITLE_TODOLIST,
        payload: {
            id,
            title,
        },
    } as const;
};

export const changeFilterTodolistAC = (id: string, filter: FilterType) => {
    return {
        type: ACT.CHANGE_FILTER_TODOLIST,
        payload: {
            id,
            filter,
        },
    } as const;
};

export const removeTodolistAC = (id: string) => {
    return {
        type: ACT.REMOVE_TODOLIST,
        payload: {
            id,
        },
    } as const;
};

