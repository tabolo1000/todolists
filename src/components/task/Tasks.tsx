import styled from "styled-components";
import { FC, memo } from "react";
import { FilterType } from "../../types/todolist";
import { TitleInput } from "../titleInput/TitleInput";
import { useTasks } from "./useTasks";


export type TasksProps = {
    todolistFilter: FilterType
    todolistId: string
}


export const Tasks: FC<TasksProps> = memo(({
    todolistFilter,
    todolistId,
}) => {

    const {
        taskList,
        onSetTitle,

    } = useTasks(todolistFilter, todolistId)

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