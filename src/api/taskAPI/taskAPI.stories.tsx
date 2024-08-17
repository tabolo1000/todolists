import { Meta } from "@storybook/react/*";
import { useEffect, useState } from "react";
import { TaskAPI } from "./TaskAPI";
import {  taskAPI } from "./task-api";
import { modelType } from "./task_api";




const meta: Meta<typeof TaskAPI> = {
    title: 'API/api/task',
    component: TaskAPI,
    argTypes: {
       
    },
    tags: ["autodo"]
}

export default meta;

export const getTask = () => {
    const [data, setData] = useState<any>()
    const todolistId: string = "310ede74-e8fa-40a6-a5cf-a1ad3b3a1e22"
    useEffect(() => {
        taskAPI.getTasks(todolistId).then(el => {
            if (el) setData(el.data.items)
        })
    }, [])

    return <TaskAPI data={data} />
}

export const createTask = () => {
    const [data, setData] = useState<any>()
    const todolistId: string = "310ede74-e8fa-40a6-a5cf-a1ad3b3a1e22"
    useEffect(() => {
        taskAPI.createTask(todolistId, "hi").then(el => {
            if (el) setData(el.data.data.item)
        })
    }, [])

    return <TaskAPI data={data} />
}

export const updateTask = () => {
    const [data, setData] = useState<any>()
    const todolistId: string = "310ede74-e8fa-40a6-a5cf-a1ad3b3a1e22";
    const id: string = "4e1eaa1e-5b40-4589-8b9b-8f7fcde62e22";
    let model: modelType = {
        title: "some",
        completed: false,
        description: "do gi",
        status: 0,
        priority: 1,
        startDate: null,
        deadline: null,
    }
    useEffect(() => {
        taskAPI.updateTask(todolistId, id, model).then(el => {
            if (el) setData(el)
        }).catch(el => {
            debugger
        })
    }, [])

    return <TaskAPI data={data} />
}

export const deleteTask = () => {
    const [data, setData] = useState<any>()
    const todolistId: string = "310ede74-e8fa-40a6-a5cf-a1ad3b3a1e22";
    const id: string = "1be5ccc3-8900-40f6-a34b-daa17b6c8b45";
    useEffect(() => {
        taskAPI.deleteTask(todolistId, id).then(el => {
            if (el) setData(el)
        }).catch(el => {
            debugger
        })
    }, [])

    return <TaskAPI data={data} />
}






