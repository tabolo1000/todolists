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
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
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


    const addTask = (todolistId: string, title: string) => {
        setTasks({
            ...tasks,
            [todolistId]: [
                ...tasks[todolistId],
                { id: v1(), title, isDone: false }
            ]
        })
    }

    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].filter(el => el.id !== taskId),
        })
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((el: TaskType) => {
                return (
                    (el.id === taskId) ? { ...el, isDone } : el
                )
            })
        })
    }
    const changeTitleTask = (todolistId: string, taskId: string, title: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((el: TaskType) => {
                return (el.id === taskId) ? { ...el, title } : el
            })
        })
    }


    const listTodolists = todolists.map(el => {
        return (
            <Todolist
                id={el.id}
                title={el.title}
                filter={el.filter}

                tasks={tasks[el.id]}

                addTask={addTask}
                changeFilter={changeFilter}
                removeTask={removeTask}
                changeStatus={changeStatus}
                changeTitleTask={changeTitleTask}
            />
        )
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




