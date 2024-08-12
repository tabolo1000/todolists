import { Todolist } from './../../todolist/Todolist';
import { v1 } from "uuid"
import { TasksType, TodolistType } from "../../../App"
import { createTodolistAC, removeTodolistAC, todolistsReducer } from "../todolists/todolistsReducer";
import { addTaskAC, changeStatusAC, changeTitleTaskAC, removeTaskAC, setTodolistTaskAC, taskReducer } from "./tasksReducer";


let initialTasks: TasksType;
let initialTodolists: Array<TodolistType>;
let todolistId = v1();
let todolistId2 = v1();


beforeEach(() => {
    initialTasks = {
        [todolistId]: [
            { id: "1", title: 'HTML&CSS', isDone: true },
            { id: "2", title: 'JS', isDone: true },
            { id: "3", title: 'ReactJS', isDone: false },
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
    const actionTodolist = createTodolistAC(todolistId, "React");
    const stateTodolist: Array<TodolistType> = todolistsReducer(initialTodolists, actionTodolist);
    const id = stateTodolist[2].id;

    const actionTasks = setTodolistTaskAC(id)
    const stateTasks: TasksType = taskReducer(initialTasks, actionTasks)

    expect(stateTasks[id]).not.toBeUndefined();
    expect(stateTasks[id]).toHaveLength(0);
});



test("create task to list task", () => {
    const action = addTaskAC(todolistId, "test_title")
    let { [todolistId]: firstList }: TasksType = taskReducer(initialTasks, action)

    expect(firstList).toHaveLength(5);
    expect(firstList).not.toBeUndefined();
    expect(firstList[4].title).toEqual("test_title");
});


test("delete the task", () => {
    const action = removeTaskAC(todolistId, "1");
    const { [todolistId]: firstList } = taskReducer(initialTasks, action);


    expect(firstList).toHaveLength(3);
    expect(firstList.every(t => t.id !== "1")).toBeTruthy();
    expect(firstList[0].id).toBeDefined()
    expect(firstList[3]).not.toBeDefined()
});


test("change status in task", () => {
    const action = changeStatusAC(todolistId, "2", true);
    const { [todolistId]: firstTodolist } = taskReducer(initialTasks, action);

    expect(firstTodolist[1].isDone).toBe(true);
    expect(firstTodolist[1].id).toBe("2");
    expect(firstTodolist).toHaveLength(4)
});

test("change title task", () => {
    const action = changeTitleTaskAC(todolistId, "3", "change_title_test");
    const { [todolistId]: firstTodolist } = taskReducer(initialTasks, action)

    expect(firstTodolist[2].title).toBe("change_title_test");
    expect(firstTodolist).toHaveLength(4);
    expect(firstTodolist).not.toBeUndefined()
})



test("delete todolist task", () => {
    const action = removeTodolistAC(todolistId);

    const state  = taskReducer(initialTasks, action);

    expect(state[todolistId]).not.toBeDefined();
    expect(state[todolistId2]).toBeDefined();
})



