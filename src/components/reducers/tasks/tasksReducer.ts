import { v1 } from 'uuid';
import { TaskDomainType, TasksDomainType } from '../../../types/Task';
import { Dispatch } from 'redux';
import { taskAPI } from '../../../api/taskAPI/task-api';
import { todolistsReducer } from '../todolists/todolistsReducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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


export const taskReducer = createSlice({
    name: "tasks",
    initialState: initialTasks,
    reducers: {
        changeTitleTaskAC: (state, action: PayloadAction<{ todolistId: string, taskId: string, title: string }>) => {
            const tasks = state[action.payload.todolistId];
            const taskIndex = tasks.findIndex(task => task.id === action.payload.taskId);
            if (taskIndex !== -1) {
                tasks[taskIndex].title = action.payload.title;
            }
        },
        changeStatusAC: (state, action: PayloadAction<{ todolistId: string, taskId: string, status: TaskStatus }>) => {
            const tasks = state[action.payload.todolistId];
            const taskIndex = tasks.findIndex(task => task.id === action.payload.taskId);
            if (taskIndex !== -1) {
                tasks[taskIndex].status = action.payload.status;
            }
        },
        removeTaskAC: (state, action: PayloadAction<{ todolistId: string, taskId: string }>) => {
            const tasks = state[action.payload.todolistId];
            const tasksIndex = tasks.findIndex(task => task.id === action.payload.taskId);
            if (tasksIndex !== 1) {
                tasks.splice(tasksIndex, 1)
            }
        },
        addTaskAC: (state, action: PayloadAction<{ todolistId: string, title: string }>) => {
            const task = {
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
            state[action.payload.todolistId].unshift(task)
        },
        setTaskAC: (state, action: PayloadAction<{ todoListId: string, tasks: Array<TaskDomainType> }>) => {
            state[action.payload.todoListId] = action.payload.tasks;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(todolistsReducer.actions.removeTodolistAC, (state, action) => {
                delete state[action.payload.id]
            })
            .addCase(todolistsReducer.actions.createTodolistAC, (state, action) => {
                state[action.payload.id] = []
            })
            .addCase(todolistsReducer.actions.setTodolistAC, (state, action) => {
                action.payload.todolists.forEach((el) => {
                    state[el.id] = []
                })
            })
    }

})

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





export const setTaskTC = (todoListId: string) => {
    return (dispatch: Dispatch) => {
        taskAPI.getTasks(todoListId)
            .then(el => {
                dispatch(taskReducer.actions.setTaskAC({todoListId, tasks: el.data.items}))
            })
    }
}

//console.log("addTaskAC".toLocaleUpperCase())
