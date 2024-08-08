import React, { ChangeEvent, FC, useState } from "react";
import { TaskType } from "../../types/Task";
import styled from "styled-components";


export type TaskProps = TaskType & {
    todolistId: string;

    removeTask: (todolistId: string, taskId: string) => void;
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void;
    changeTitleTask: (todolistId: string, taskId: string, title: string) => void;
}

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
    const onChangeTitleTask = (taskId: string, title: string) => {
        changeTitleTask(todolistId, taskId, title)
    }

    return (
        <ListItem>
            <div>
                <input onChange={onChangeStatus.bind({}, id, !isDone)} type="checkbox" checked={isDone} />
                {
                    (activeInput)
                        ? <input
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={() => { onChangeTitleTask(id, newTitle); setActiveInput(!activeInput) }}
                            type="text"
                            placeholder="Puting your title!" />
                        : <span
                            onDoubleClick={setActiveInput.bind({}, !activeInput)}
                        >{title}</span>
                }

            </div>
            <button onClick={onRemoveTask.bind({}, id)}>X</button>
        </ListItem>
    )
}



const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    div > span{
        padding: 0 10px
    }
`


