export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type TaskProps = TaskType & {
    todolistId: string;

    removeTask: (todolistId: string, taskId: string) => void;
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void;
    changeTitleTask: (todolistId: string, taskId: string, title: string) => void;
}
