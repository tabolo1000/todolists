import React, {FC} from "react";
import {TaskType} from "../../types/Task";

export const Task: FC<TaskType> = ({
                                title,
                                isDone,
                            }) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
        </li>
    )
}