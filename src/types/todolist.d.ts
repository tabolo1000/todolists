import { TaskType } from "./Task";

export type FilterType = "All" | "Active" | "Completed";


export type TodolistProps = {
    id: string;
    title: string;
    filter: FilterType;

    tasks: TaskType[];
    date?: Date;


    removeTodolist: (todolistId: string) => void;
    changeFilter: (todolistId: string, filter: FilterType) => void;
    changeTitleTodolist: (todolistId: string, title: string) => void;
    
    addTask: (todolistId: string, title: string) => void;
    removeTask: (todolistId: string, taskId: string) => void;
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void;
    changeTitleTask: (todolistId: string, taskId: string, title: string) => void
}