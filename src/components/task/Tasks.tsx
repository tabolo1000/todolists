import styled from "styled-components";
import { FC } from "react";
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


export const Tasks: FC<TasksProps> = ({
    todolistFilter,
    todolistId,
}) => {


    let tasks = useAppSelector<Array<TaskType>>(state => state.tasks[todolistId]);
    const dispatch = useAppDispatch();

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

    const taskList = tasks.map(({
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

            removeTask={() => { dispatch(removeTaskAC(todolistId, id)) }}
            changeStatus={(isDone: boolean) => { dispatch(changeStatusAC(todolistId, id, isDone)) }}
            changeTitleTask={(title) => dispatch(changeTitleTaskAC(todolistId, id, title))}
        />
    ));

    return (
        <>
            <TitleInput onClick={(title: string) => { dispatch(addTaskAC(todolistId, title)) }} />
            {
                (taskList.length)
                    ? <UnorderedList>{taskList}</UnorderedList>
                    : "In this moment, you don't have task!"
            }
        </>
    )
}

const UnorderedList = styled.ul`
  padding: 0;
`