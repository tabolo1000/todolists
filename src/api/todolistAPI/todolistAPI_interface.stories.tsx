import { Meta } from "@storybook/react/*";
import { useEffect, useState } from "react";
import { todolistAPI } from "./todolist-api";
import { TodolistAPI } from "./Todolist_API_inteface";


const meta: Meta<typeof TodolistAPI> = {
    title: 'API/api',
    component: TodolistAPI
}


export default meta;

export const GetTodolists = () => {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists().then(el => {
                setData(el.data)
            })
    }, [])

    return <TodolistAPI data={data} />
}


export const PostTodolists = () => {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
       todolistAPI.createTodolist("ti")
            .then(el => {
                if (el.data.resultCode === 0) setData(el.data.data.item.title)
                if (el.data.resultCode === 1) setData(el.data.messages[0])
            })
    }, [])

    return <TodolistAPI data={data} />
}

export const DeleteTodolists = () => {
    const [data, setData] = useState<null | number | string>(null)
    const todolistId = "84d390db-3bb1-4f49-aad4-0dc1e8f515ba"

    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId)
            .then(el => {
                if (el.data.resultCode === 0) setData(el.data.resultCode)
            })
            .catch(el => {

                setData(el.message)
            })
    }, [])

    return <TodolistAPI data={data} />
}

export const PutTodolists = () => {
    const [data, setData] = useState<null | number | string>(null)
    const todolistId = "9c479df3-4143-4984-94ba-1641b9f2de80"

    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, "gord")
            .then(el => {
                if (el.data.resultCode === 0) setData(el.data.resultCode)
            })
            .catch(el => {

                setData(el.message)
            })
    }, [])

    return <TodolistAPI data={data} />
}






