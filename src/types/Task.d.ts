export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type TaskProps = TaskType & {
    todolistId: string;

    removeTask: () => void;
    changeStatus: (isDone: boolean) => void;
    changeTitleTask: (title: string) => void;
}
