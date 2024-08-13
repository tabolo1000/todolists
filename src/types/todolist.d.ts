import { TaskType } from "./Task";

export type FilterType = "All" | "Active" | "Completed";


export type TodolistProps = {
    id: string;
    title: string;
    filter: FilterType;

    date?: Date;
    
    removeTodolist: (todolistId: string) => void;
    changeFilter: (todolistId: string, filter: FilterType) => void;
    changeTitleTodolist: (todolistId: string, title: string) => void;
}