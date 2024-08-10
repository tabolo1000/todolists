import { TasksType } from "../../../App";


enum ACT {
    SET_TODOLIST_TASK = "SET_TODOLIST_TASK"
}


type TasksAction = SetTodolistTaskACType;

interface TaskReducer {
    (initialState: TasksType, action: TasksAction): TasksType,
}


export const taskReducer: TaskReducer = (initialState, action) => {
    switch (action.type) {
        case ACT.SET_TODOLIST_TASK:{
            return {
                ...initialState,
                [action.id]: []
            }
        }

        default:
        return initialState;
    }
}


type SetTodolistTaskACType = ReturnType<typeof setTodolistTaskAC>;

export const setTodolistTaskAC = (id: string) => {
    return {
        type: ACT.SET_TODOLIST_TASK,
        id,
    } as const
}