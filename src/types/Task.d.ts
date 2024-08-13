export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type TaskProps = TaskType & {
    todolistId: string;

    removeTask: (id: string) => void;
    changeStatus: (id: string, isDone: boolean) => void;
    changeTitleTask: (id: string, title: string) => void;
}
