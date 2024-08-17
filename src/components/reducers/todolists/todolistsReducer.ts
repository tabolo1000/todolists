import { FilterType, TodolistDomainType } from "../../../types/todolist";




enum ACT {
    ADD_TODOLIST = 'ADD_TODOLIST',
    CHANGE_TITLE_TODOLIST = 'CHANGE_TITLE_TODOLIST',
    CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST',
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
}
const initialTodolists: Array<TodolistDomainType> = [
]

// type TodolistReducerType = Reducer<Array<TodolistType>, TodolistActions>
export interface ITodolistReducer {
    (state: Array<TodolistDomainType>, action: TodolistAction): Array<TodolistDomainType>;
}

export type TodolistAction = CreateTodolistType | ChangeTitleTodolistType
    | ChangeFilterTodolistType | RemoveTodolistType

export const todolistsReducer: ITodolistReducer = (initialState = initialTodolists, action) => {


    switch (action.type) {
        case ACT.ADD_TODOLIST: {
            return ([
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    filter: 'All',
                    addedDate: "",
                    order: 0,
                },
                ...initialState
            ])
        };
        case ACT.CHANGE_TITLE_TODOLIST: {
            return (
                initialState.map((el: TodolistDomainType) =>
                    (el.id === action.payload.id)
                        ? { ...el, title: action.payload.title }
                        : el)
            )
        };
        case ACT.CHANGE_FILTER_TODOLIST: {
            return (
                initialState.map((el: TodolistDomainType) => {
                    return (el.id === action.payload.id)
                        ? { ...el, filter: action.payload.filter }
                        : el
                })
            );
        };
        case ACT.REMOVE_TODOLIST: {
            return (
                initialState.filter((el: TodolistDomainType) => (el.id !== action.payload.id))
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

