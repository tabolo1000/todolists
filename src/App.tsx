import React, { useState } from 'react';
import './App.css';
import { v1, v4 } from "uuid";
import { Todolist } from "./components/todolist/Todolist";
import { TaskType } from './types/Task';
import { FilterType } from './types/todolist';
import styled from 'styled-components';
import { TitleInput } from './components/titleInput/TitleInput';


type TasksType = {
    [x: string]: Array<TaskType>
}

type TodolistType = {
    id: string;
    title: string;
    filter: FilterType
}

let todolistId = v1();
let todolistId2 = v1()

const initialTasks: TasksType = {
    [todolistId]: [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
    ],
    [todolistId2]: [
        { id: v1(), title: 'HTML&CSS 1', isDone: true },
        { id: v1(), title: 'JS 1', isDone: true },
        { id: v1(), title: 'ReactJS 1', isDone: false },
        { id: v1(), title: 'Redux 1', isDone: false },
    ],

}


const initialTodolists: Array<TodolistType> = [
    { id: todolistId, title: "Technologes", filter: "All" },
    { id: todolistId2, title: "ui", filter: "All" }
]


function App() {
    const [todolists, setTodolist] = useState<Array<TodolistType>>(initialTodolists)
    const [tasks, setTasks] = useState<TasksType>(initialTasks)
    const date: Date = new Date();

    function changeFilter(todolistId: string, filter: FilterType) {
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

    /* todolists method */
    const removeTodolist = (todolistId: string) => {
        setTodolist(todolists.filter((el: TodolistType) => (el.id !== todolistId)
        ))
    }
    const createTodolist = (title: string) => {
        const id = v1();
        setTodolist([
            ...todolists,
            {
                id,
                title,
                filter: 'All'
            }
        ])
        setTasks({
            ...tasks,
            [id]: [],
        })

    }

    /* task method */
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
                key={el.id}
                id={el.id}
                title={el.title}
                filter={el.filter}

                tasks={tasks[el.id]}

                addTask={addTask}
                changeFilter={changeFilter}
                removeTask={removeTask}
                changeStatus={changeStatus}
                changeTitleTask={changeTitleTask}
                removeTodolist={removeTodolist}
            />
        )
    })

    return (
        <MainApp>
            <TitleInput onClick={createTodolist}></TitleInput>
            <Board>
                {listTodolists}
            </Board>
        </MainApp>
    )
}


const MainApp = styled.div`
    width: 80%;
    padding: 20px;
    margin: 0 auto;
`
const Board = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default App;




