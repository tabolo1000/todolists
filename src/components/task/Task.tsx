import React, { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import { TaskProps, TaskType } from "../../types/Task";
import styled from "styled-components";
import { Button, Checkbox } from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { SpanInputItem } from "../spanInputItem/SpanInputItem";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';



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
    const onRemoveTask = () => {
        removeTask()
    }
    const onChangeStatus = (isDone: boolean) => {
        changeStatus(isDone)
    }

    const changeTitleTaskHandler = (title: string) => {
        changeTitleTask(title)
    }
    /* checked={isDone} type="checkbox" name="checkbox" onClick={() => onChangeStatus(id, !isDone)}*/

    return (
        <ListItem>
            <Checkbox
                color="primary"

                checked={isDone}
                onChange={() => onChangeStatus(!isDone)}
                size="medium"
                icon={<AddBoxOutlinedIcon color="success" />}
                checkedIcon={<AddBoxIcon color="primary" />}
            />
            <SpanInputItem isDone={isDone} onClick={changeTitleTaskHandler} title={title}></SpanInputItem>
            <RemoveButton onClick={onRemoveTask} />
        </ListItem>
    )
}


type ButtonRemoveType = {
    onClick: () => void
}

export const RemoveButton = ({ onClick }: ButtonRemoveType) => {
    return (
        <Button
            size="small"
            color="error"
            onClick={onClick}
        ><HighlightOffOutlinedIcon />
        </Button>
    )
}





const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    div > span{
        padding: 0 10px
    }
    text-align: center;
    line-height: 50px;
`


