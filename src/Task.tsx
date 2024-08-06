import React, {FC} from "react";
import {TaskType} from "./App";

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