import { FC, memo, useCallback } from "react";
import { TaskProps } from "../../types/Task";
import styled from "styled-components";
import { Button, Checkbox } from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { SpanInputItem } from "../spanInputItem/SpanInputItem";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { TaskStatus } from "../reducers/tasks/tasksReducer";



export const Task: FC<TaskProps> = memo(({
    id,
    title,
    status,
    removeTask,
    changeStatus,
    changeTitleTask
}) => {
    console.log('Task')

    /* ----handlers----- */
    const onRemoveTask = useCallback(
        () => removeTask(id),
        [removeTask]
    )
    const onChangeStatus = useCallback(
        (status: TaskStatus) =>
            () => {
                status = status? TaskStatus.New : TaskStatus.Completed
                changeStatus(id, status)
            },
        [changeStatus]
    )
    const changeTitleTaskHandler = useCallback(
        (title: string) => changeTitleTask(id, title),
        [changeTitleTask]
    )

    return (
        <ListItem>
            <Checkbox
                color="primary"
                checked={!!status}
                onChange={onChangeStatus(status)}
                size="medium"
                icon={<AddBoxOutlinedIcon color="success" />}
                checkedIcon={<AddBoxIcon color="primary" />}
            />
            <SpanInputItem status={status} onClick={changeTitleTaskHandler} title={title}></SpanInputItem>
            <RemoveButton onClick={onRemoveTask} />
        </ListItem>
    )
}
)
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


