import { SetTodolistType } from './../todolists/todolistsReducer';
import { v1 } from 'uuid';
import { RemoveTodolistType } from '../todolists/todolistsReducer';
import { TaskDomainType, TasksDomainType } from '../../../types/Task';
import { Dispatch } from 'redux';
import { taskAPI } from '../../../api/taskAPI/task-api';


enum ACT {
    ADD_TODOLIST = "ADD_TODOLIST",
    SET_TODOLIST_TASK = "SET_TODOLIST_TASK",
    CHANGE_TITLE_TASK = "CHANGE_TITLE_TASK",
    CHANGE_STATUS = "CHANGE_STATUS",
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    REMOVE_TODOLIST = "REMOVE_TODOLIST",
    SET_TASKS = "SET_TASKS",
    SET_TODOLISTS = "SET_TODOLISTS"
}
const initialTasks: TasksDomainType = {}


export enum TaskStatus {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3,
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}


export interface ITaskReducer {
    (initialState: TasksDomainType, action: TasksAction): TasksDomainType,
}

export type TasksAction = SetTodolistTaskType | ChangeTitleTaskType |
    ChangeStatusType | RemoveTaskType | AddTaskType | RemoveTodolistType
    | SetTaskType | SetTodolistType;


export const taskReducer: ITaskReducer = (initialState = initialTasks, action) => {
    switch (action.type) {
        case ACT.ADD_TODOLIST: {
            debugger
            return {
                ...initialState,
                [action.payload.id]: []
            }
        };
        case (ACT.CHANGE_TITLE_TASK): {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].map((el: TaskDomainType) => {
                    return (el.id === action.payload.taskId) ? { ...el, title: action.payload.title } : el
                })
            }
        }
        case ACT.CHANGE_STATUS: {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].map((el: TaskDomainType) => {
                    return (
                        (el.id === action.payload.taskId) ? { ...el, status: action.payload.status } : el
                    )
                })
            }
        }
        case ACT.ADD_TASK: {
            return {
                ...initialState,
                [action.payload.todolistId]: [
                    ...initialState[action.payload.todolistId],
                    {
                        id: v1(),
                        title: action.payload.title,
                        status: TaskStatus.New,
                        todoListId: action.payload.todolistId,
                        description: "",
                        completed: false,
                        priority: TaskPriorities.Low,
                        startDate: "",
                        deadline: "",
                        order: 1,
                        addedDate: ""
                    }
                ]
            }
        }
        case ACT.REMOVE_TASK: {
            return {
                ...initialState,
                [action.payload.todolistId]: initialState[action.payload.todolistId].filter(el => el.id !== action.payload.taskId),
            }
        };
        case 'REMOVE_TODOLIST': {
            const s = { ...initialState };
            delete s[action.payload.id]
            return s
        }
        case ACT.SET_TASKS: {
            return {
                ...initialState,
                [action.payload.todoListId]: action.payload.tasks
            }
        }
        case "SET_TODOLISTS": {
            return {
                ...initialState,
                ...action.payload.todolists.reduce((ac, el) => ({
                    ...ac,
                    [el.id]: []
                }), {})
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
type SetTaskType = ReturnType<typeof setTaskAC>

export const setTodolistTaskAC = (id: string) => {
    return {
        type: ACT.ADD_TODOLIST,
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
export const changeStatusAC = (todolistId: string, taskId: string, status: TaskStatus) => {
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

export const setTaskAC = (todoListId: string, tasks: Array<TaskDomainType>) => {
    return {
        type: ACT.SET_TASKS,
        payload: {
            todoListId,
            tasks
        }
    } as const
}


export const setTaskTC = (todoListId: string) => {
    return (dispatch: Dispatch) => {
        taskAPI.getTasks(todoListId)
            .then(el => {
                dispatch(setTaskAC(todoListId, el.data.items))
            })
    }
}

//console.log("addTaskAC".toLocaleUpperCase())
