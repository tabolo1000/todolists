import React from 'react';
import './App.css';
import {v4} from "uuid";
import {Todolist} from "./Todolist";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


function App() {
    console.log(crypto.randomUUID())
    console.log(v4());

    const date: Date= new Date();

    const tasks1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        { id: 4, title: 'Redux', isDone: false },
    ]

    const tasks2: TaskType[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am Happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]

    return (
        <div>
            <Todolist title='Hello world' tasks={tasks1} date = {date}/>
            <Todolist title='Hello world' tasks={tasks2}/>
        </div>
    )
}

export default App;




