import React, { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import { TaskProps, TaskType } from "../../types/Task";
import styled from "styled-components";




export const Task: FC<TaskProps> = ({
    id,
    title,
    isDone,
    todolistId,
    removeTask,
    changeStatus,
    changeTitleTask
}) => {
    const [activeInput, setActiveInput] = useState<boolean>(false);
    const [newTitle, setTitle] = useState<string>('');

    /* ----handlers----- */
    const onRemoveTask = (taskId: string) => {
        removeTask(todolistId, taskId)
    }
    const onChangeStatus = (taskId: string, isDone: boolean) => {
        changeStatus(todolistId, taskId, isDone)
    }

    const changeTitleTaskHandler = (title: string) => {
        changeTitleTask(todolistId, id, title)
    }


    return (
        <ListItem>
            <input checked={isDone} type="checkbox" name="checkbox" onClick={() => onChangeStatus(id, !isDone)}/>
            <SpanInputItem onClick={changeTitleTaskHandler} title={title}></SpanInputItem>
            <button onClick={() => onRemoveTask(id)} >X</button>
        </ListItem>
    )
}

type InputProps = {
    onClick: (title: string) => void,
    title: string
}

const SpanInputItem = ({
    onClick,
    title,

}: InputProps) => {
    const [newTitle, setTitle] = useState<string>('');
    const [activeInput, setActiveInput] = useState<boolean>(false);

    /* ----handlers----- */
    const onBlurSetTitleHandler = () => {
        onClick(newTitle);
        setActiveInput(!activeInput)
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onBlurSetTitleHandler()
        }

    }
    return (

        (activeInput)
            ? <input
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onBlur={onBlurSetTitleHandler}
                onKeyDown={(e) => onKeyHandler(e)}
                type="text"
                placeholder="Puting your title!" />
            : <span
                onDoubleClick={setActiveInput.bind({}, !activeInput)}
            >{title}</span>
    )

}



const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    div > span{
        padding: 0 10px
    }
`


