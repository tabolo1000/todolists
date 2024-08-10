import { v1 } from "uuid"
import { TasksType, TodolistType } from "../../../App"
import { createTodolistAC, todolistsReducer } from "../todolists/todolistsReducer";
import { setTodolistTaskAC, taskReducer } from "./tasksReducer";


let initialTasks: TasksType;
let initialTodolists: Array<TodolistType>;
let todolistId = v1();
let todolistId2 = v1();


beforeEach(() => {
    initialTasks = {
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

    };

    initialTodolists = [
        { id: todolistId, title: "Technologes", filter: "All" },
        { id: todolistId2, title: "UI", filter: "All" }
    ];

});



test("add tasks for new todolist", () => {
    const actionTodolist = createTodolistAC("React");
    const stateTodolist: Array<TodolistType> = todolistsReducer(initialTodolists, actionTodolist);
    const id = stateTodolist[2].id;

    const actionTasks = setTodolistTaskAC(id)
    const stateTasks: TasksType = taskReducer(initialTasks, actionTasks)

    expect(stateTasks[id]).not.toBeUndefined();
    expect(stateTasks[id].length).toBe(0);
})