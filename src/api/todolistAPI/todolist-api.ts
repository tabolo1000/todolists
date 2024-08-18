
import { } from './todolist-api';

import axios from "axios"
import { ItemType, ResponseDataType } from './todolist_api';
import { TodolistType } from './Todolist_API_inteface';



const setting = {
    withCredentials: true,
    headers: {
        "api-key": "15f58b4b-0d66-4b69-a133-320f34b52e56"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    ...setting
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>("/todo-lists", setting)
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseDataType>(`/todo-lists/${todolistId}`)

    },
    createTodolist(title: string) {
        return instance.post<ResponseDataType<ItemType>>("/todo-lists", { title })
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseDataType>(`/todo-lists/${todolistId}`, { title })

    }
}