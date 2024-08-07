import { TaskType } from "./Task";

export type FilterType = "All" | "Active" | "Completed";


export type TodolistProps = {
    title: string;
    tasks: TaskType[];
    date?: Date;
    filter: FilterType;
    changeFilter: (todolistId: string, filter: FilterType) => void;
    id: string;
}