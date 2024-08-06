import React, {FC} from "react";
import {TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";

type PropsType = {
    title: string
    tasks: TaskType[]
    date?: Date
}
export const Todolist: FC<PropsType> = (
    {
        title,
        tasks,
        date
    }
) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map((task: TaskType) => <Task key={task.id} id={1} title={task.title} isDone={task.isDone}/>)}
            </ul>
            {JSON.stringify(date)}
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>

        </div>
    )
}