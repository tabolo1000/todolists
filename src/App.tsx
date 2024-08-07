import React, { useState } from 'react';
import './App.css';
import { v1, v4 } from "uuid";
import { Todolist } from "./components/todolist/Todolist";
import { TaskType } from './types/Task';
import { FilterType } from './types/todolist';
import styled from 'styled-components';


type TasksType = {
    [x: string]: Array<TaskType>
}

type TodolistType = {
    id: string;
    title: string;
    filter: FilterType
}

let todolistId = v1()

const initialTasks: TasksType = {
    [todolistId]: [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ],

}


const initialTodolists: Array<TodolistType> = [
    { id: todolistId, title: "Technologes", filter: "All" }
]


function App() {
    const [todolists, setTodolist] = useState<Array<TodolistType>>(initialTodolists)
    const [tasks, setTasks] = useState<TasksType>(initialTasks)
    const date: Date = new Date();

    function changeFilter(todolistsId: string, filter: FilterType) {
        setTodolist(todolists.map((el: TodolistType) => {
           return (el.id === todolistId) ? { ...el, filter } : el
        }))
    }


    const listTodolists = todolists.map(el => {
        return <Todolist id = {el.id} changeFilter = {changeFilter} title={el.title} tasks={tasks[el.id]} filter={el.filter} />
    })

    return (
        <MainApp>
            {listTodolists}
        </MainApp>
    )
}

const MainApp = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default App;




