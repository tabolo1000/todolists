import { ReactElement, useCallback, useMemo } from "react";
import { TaskType } from "../../types/Task";
import { Task } from "./Task";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTaskAC, changeStatusAC, changeTitleTaskAC, removeTaskAC } from "../reducers/tasks/tasksReducer";
import { filterValue } from "../todolist/Todolist";
import { FilterType } from "../../types/todolist";


interface useTasksType {
    (todolistFilter: FilterType, todolistId: string): {
        taskList: ReactElement[],
        onSetTitle: (title: string) => void,

    }
}
type onRemoveTaskType = (id: string) => void;
type onChangeStatusType = (id: string, isDone: boolean) => void
type onChangeTitleTaskType = (id: string, title: string) => void;
type onSetTitleType = (id: string) => void;



export const useTasks: useTasksType = (todolistFilter, todolistId) => {
    let tasks = useAppSelector<Array<TaskType>>(state => state.tasks[todolistId]);
    const dispatch = useAppDispatch();

    console.log("Tasks")

    switch (todolistFilter) {
        case (filterValue.active): {
            tasks = tasks.filter(el => !el.isDone);
            break;
        }
        case (filterValue.completed): {
            tasks = tasks.filter(el => el.isDone);
            break;
        }
        default:
    }
    const onRemoveTask = useCallback<onRemoveTaskType>((id) => dispatch(removeTaskAC(todolistId, id)), [removeTaskAC]);
    const onChangeStatus = useCallback<onChangeStatusType>((id, isDone) => dispatch(changeStatusAC(todolistId, id, isDone)), [changeStatusAC]);
    const onChangeTitleTask = useCallback<onChangeTitleTaskType>((id: string, title: string) => dispatch(changeTitleTaskAC(todolistId, id, title)), [changeTitleTaskAC]);
    const onSetTitle = useCallback<onSetTitleType>((title) => { dispatch(addTaskAC(todolistId, title)) }, [addTaskAC]);

    const taskList = useMemo<ReactElement[]>(
        () => tasks.map(({
            id,
            title,
            isDone,
        }: TaskType) => (
            <Task
                key={id}
                id={id}
                title={title}
                isDone={isDone}
                todolistId={id}
                removeTask={onRemoveTask}
                changeStatus={onChangeStatus}
                changeTitleTask={onChangeTitleTask}
            />
        )), [tasks, onRemoveTask, onChangeStatus, onChangeTitleTask]
    )




    return {
        taskList,
        onSetTitle,
    }
}