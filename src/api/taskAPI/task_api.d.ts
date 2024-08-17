export type TaskItem = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}


export type TaskGetResponce = {
    error: string,
    totalCount: [],
    items: Array<TaskItem>,
}

export type modelType = {
    title: string,
    completed: boolean,
    description: string,
    status: number,
    priority: number,
    startDate: string | null,
    deadline: string | null,
}