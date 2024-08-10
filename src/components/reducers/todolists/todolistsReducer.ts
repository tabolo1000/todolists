import { v1 } from "uuid"
import { TodolistType } from "../../../App"


interface ITodolistReducer {
    (state: Array<TodolistType>, action: TodolistActions): Array<TodolistType>;
}

enum ACT {
    ADD_TODOLIST = 'ADD_TODOLIST'
}
type CreateTodolistType = ReturnType<typeof createTodolistAC>


type TodolistActions = CreateTodolistType

export const todolistsReducer: ITodolistReducer = (initialState, action) => {

    switch (action.type) {
        case ACT.ADD_TODOLIST: {
            const id = v1()
            return ([
                {
                    id,
                    title: action.title,
                    filter: 'All',
                },
                ...initialState
            ])
        }
        default:
            return initialState
    }
}


export const createTodolistAC = (title: string) => {
    return ({
        type: ACT.ADD_TODOLIST,
        title,
    }) as const
}

