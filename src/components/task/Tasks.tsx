import styled from "styled-components";
import { FC, memo, useCallback, useMemo } from "react";
import { TaskType } from "../../types/Task";
import { Task } from "./Task";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { FilterType } from "../../types/todolist";
import { addTaskAC, changeStatusAC, changeTitleTaskAC, removeTaskAC } from "../reducers/tasks/tasksReducer";
import { TitleInput } from "../titleInput/TitleInput";
import { filterValue } from "../todolist/Todolist";


type TasksProps = {
    todolistFilter: FilterType
    todolistId: string
}




export const Tasks: FC<TasksProps> = memo(({
    todolistFilter,
    todolistId,
}) => {

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
    const onRemoveTask = useCallback((id: string) => dispatch(removeTaskAC(todolistId, id)), [removeTaskAC]);
    const onChangeStatus = useCallback((id: string, isDone: boolean) => dispatch(changeStatusAC(todolistId, id, isDone)), [changeStatusAC]);
    const onChangeTitleTask = useCallback((id: string, title: string) => dispatch(changeTitleTaskAC(todolistId, id, title)), [changeTitleTaskAC]);
    const onSetTitle = useCallback((title: string) => { dispatch(addTaskAC(todolistId, title)) }, [addTaskAC]);

    const taskList = useMemo(
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



    return (
        <>
            <TitleInput onClick={onSetTitle} />
            {
                (taskList.length)
                    ? <UnorderedList>{taskList}</UnorderedList>
                    : "In this moment, you don't have task!"
            }
        </>
    )
})

const UnorderedList = styled.ul`
  padding: 0;
`