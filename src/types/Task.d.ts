import { TaskPriorities, TaskStatus } from "../components/reducers/tasks/tasksReducer"

export type TaskDomainType = {
    id: string
    todoListId: string
    title: string
    description: string
    completed: boolean
    status: TaskStatus
    priority: TaskPriorities
    startDate: string
    deadline: string
    order: number
    addedDate: string
}

export type TaskProps = TaskType & {
    todolistId: string;

    removeTask: (id: string) => void;
    changeStatus: (id: string, isDone: boolean) => void;
    changeTitleTask: (id: string, title: string) => void;
}

export type TasksDomainType = {
    [x: string]: Array<TaskDomainType>
}
