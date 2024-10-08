import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { Task } from "./Task";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {  setTaskTC, taskReducer, TaskStatus } from "../reducers/tasks/tasksReducer";
import { filterValue } from "../todolist/Todolist";
import { FilterType } from "../../types/todolist";
import { TaskDomainType } from "../../types/Task";


interface useTasksType {
    (todolistFilter: FilterType, todolistId: string): {
        taskList: ReactElement[],
        onSetTitle: (title: string) => void,

    }
}
type onRemoveTaskType = (id: string) => void;
type onChangeStatusType = (id: string, status: TaskStatus) => void
type onChangeTitleTaskType = (id: string, title: string) => void;
type onSetTitleType = (id: string) => void;



export const useTasks: useTasksType = (todolistFilter, todolistId) => {
    let tasks = useAppSelector<Array<TaskDomainType>>(state => state.tasks[todolistId]);
    const dispatch = useAppDispatch();
    debugger
    useEffect(() => {
        dispatch(setTaskTC(todolistId))
    }, [])

    console.log("Tasks")

    switch (todolistFilter) {
        case (filterValue.active): {
            tasks = tasks.filter(el => el.status === TaskStatus.New);
            break;
        }
        case (filterValue.completed): {
            tasks = tasks.filter(el => el.status === TaskStatus.Completed);
            break;
        }
        default:
    }
    const onRemoveTask = useCallback<onRemoveTaskType>((id) => dispatch(taskReducer.actions.removeTaskAC({ todolistId, taskId: id })), [taskReducer.actions.removeTaskAC]);
    const onChangeStatus = useCallback<onChangeStatusType>((id, status) => dispatch(taskReducer.actions.changeStatusAC({ todolistId, taskId: id, status })), [taskReducer.actions.changeStatusAC]);
    const onChangeTitleTask = useCallback<onChangeTitleTaskType>((id: string, title: string) => dispatch(taskReducer.actions.changeTitleTaskAC({ todolistId, taskId: id, title })), [taskReducer.actions.changeStatusAC]);
    const onSetTitle = useCallback<onSetTitleType>((title) => { dispatch(taskReducer.actions.addTaskAC({ todolistId, title })) }, [taskReducer.actions.changeStatusAC]);

    const taskList = useMemo<ReactElement[]>(
        () => tasks.map(({
            id,
            title,
            status,
        }: TaskDomainType) => (
            <Task
                key={id}
                id={id}
                title={title}
                status={status}
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