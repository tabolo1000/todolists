import { Todolist } from './../../todolist/Todolist';
import { TasksType } from "../../../App";
import { TaskType } from '../../../types/Task';
import { v1 } from 'uuid';


enum ACT {
    SET_TODOLIST_TASK = "SET_TODOLIST_TASK",
    CHANGE_TITLE_TASK = "CHANGE_TITLE_TASK",
    CHANGE_STATUS = "CHANGE_STATUS",
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK = "REMOVE_TASK",
}


type TasksAction = (SetTodolistTaskType | ChangeTitleTaskType |
    ChangeStatusType | RemoveTaskType | AddTaskType);

interface TaskReducer {
    (initialState: TasksType, action: TasksAction): TasksType,
}


export const taskReducer: TaskReducer = (initialState, action) => {
    switch (action.type) {
        case ACT.SET_TODOLIST_TASK: {
            return {
                ...initialState,
                [action.payload.id]: []
            }
        };
        case (ACT.CHANGE_TITLE_TASK): {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].map((el: TaskType) => {
                    return (el.id === action.payload.taskId) ? { ...el, title: action.payload.title } : el
                })
            }
        }
        case ACT.CHANGE_STATUS: {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].map((el: TaskType) => {
                    return (
                        (el.id === action.payload.taskId) ? { ...el, isDone: action.payload.status } : el
                    )
                })
            }
        }
        case ACT.ADD_TASK: {
            return {
                ...initialState,
                [action.payload.todolistId]: [
                    ...initialState[action.payload.todolistId],
                    { id: v1(), title: action.payload.title, isDone: false }
                ]
            }
        }
        case ACT.REMOVE_TASK: {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].filter(el => el.id !== action.payload.taskId),
            }
        }

        default:
            return initialState;
    }
}


type SetTodolistTaskType = ReturnType<typeof setTodolistTaskAC>;
type AddTaskType = ReturnType<typeof addTaskAC>;
type RemoveTaskType = ReturnType<typeof removeTaskAC>;
type ChangeStatusType = ReturnType<typeof changeStatusAC>;
type ChangeTitleTaskType = ReturnType<typeof changeTitleTaskAC>

export const setTodolistTaskAC = (id: string) => {
    return {
        type: ACT.SET_TODOLIST_TASK,
        payload: {
            id
        },
    } as const
}

export const changeTitleTaskAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: ACT.CHANGE_TITLE_TASK,
        payload: {
            todolistId,
            taskId,
            title,
        }

    } as const
}
export const changeStatusAC = (todolistId: string, taskId: string, status: boolean) => {
    return {
        type: ACT.CHANGE_STATUS,
        payload: {
            todolistId,
            taskId,
            status,
        }

    } as const
}
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: ACT.REMOVE_TASK,
        payload: {
            todolistId,
            taskId,
        }
    } as const
}
export const addTaskAC = (todolistId: string, title: string) => {
    return {
        type: ACT.ADD_TASK,
        payload: {
            todolistId,
            title,
        }

    } as const
}

console.log("addTaskAC".toLocaleUpperCase())
