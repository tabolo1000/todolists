import axios from "axios"
import { modelType, TaskGetResponce } from "./task_api"
import { ItemType, ResponseDataType } from "../todolistAPI/todolist_api"



const setting = {
    withCredentials: true,
    headers: {
        "api-key": "15f58b4b-0d66-4b69-a133-320f34b52e56"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists/",
    ...setting
})


export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<TaskGetResponce>(`${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, id: string,) {
        return instance.delete<ResponseDataType>(`${todolistId}/tasks/${id}`)

    },
    createTask(todolistId: string, title: string) {
        return instance.post<ResponseDataType<ItemType>>(`${todolistId}/tasks`, { title })

    },
    updateTask(todolistId: string, id: string, model: modelType) {
        return instance.put<ResponseDataType>(`${todolistId}/tasks/${id}`, model);
    }
}