import { v1 } from "uuid"
import { createTodolistAC, removeTodolistAC, todolistsReducer } from "../todolists/todolistsReducer";
import { addTaskAC, changeStatusAC, changeTitleTaskAC, removeTaskAC, setTodolistTaskAC, TaskPriorities, taskReducer, TaskStatus } from "./tasksReducer";
import { TasksDomainType } from "../../../types/Task";
import { TodolistDomainType } from "../../../types/todolist";



let initialTasks: TasksDomainType;
let initialTodolists: Array<TodolistDomainType>;
let todoListId = v1();
let todoListId2 = v1();


beforeEach(() => {
    initialTasks = {
        [todoListId]: [
            {
                id: "1",
                title: 'HTML&CSS',
                todoListId,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: "2",
                title: 'JS',
                todoListId,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: "3",
                title: 'ReactJS',
                todoListId,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: v1(),
                title: 'Redux',
                todoListId,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
        ],
        [todoListId2]: [
            {
                id: v1(),
                title: 'HTML&CSS 1',
                todoListId: todoListId2,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: v1(),
                title: 'JS 1',
                todoListId: todoListId2,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: v1(),
                title: 'ReactJS 1',
                todoListId: todoListId2,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
            {
                id: v1(),
                title: 'Redux 1',
                todoListId: todoListId2,
                description: "",
                completed: false,
                status: TaskStatus.New,
                priority: TaskPriorities.Low,
                startDate: "",
                deadline: "",
                order: 1,
                addedDate: ""
            },
        ],

    };

    initialTodolists = [
        {
            id: todoListId,
            title: "Technologes",
            filter: "All",
            addedDate: "",
            order: 0,
        },
        {
            id: todoListId2,
            title: "UI",
            filter: "All",
            addedDate: "",
            order: 0,
        }
    ];

});


test("add tasks for new todolist", () => {
    const actionTodolist = createTodolistAC(todoListId, "React");
    const stateTodolist: Array<TodolistDomainType> = todolistsReducer(initialTodolists, actionTodolist);
    const id = stateTodolist[2].id;

    const actionTasks = setTodolistTaskAC(id)
    const stateTasks: TasksDomainType = taskReducer(initialTasks, actionTasks)

    expect(stateTasks[id]).not.toBeUndefined();
    expect(stateTasks[id]).toHaveLength(0);
});



test("create task to list task", () => {
    const action = addTaskAC(todoListId, "test_title")
    let { [todoListId]: firstList }: TasksDomainType = taskReducer(initialTasks, action)

    expect(firstList).toHaveLength(5);
    expect(firstList).not.toBeUndefined();
    expect(firstList[4].title).toEqual("test_title");
});


test("delete the task", () => {
    const action = removeTaskAC(todoListId, "1");
    const { [todoListId]: firstList }: TasksDomainType  = taskReducer(initialTasks, action);


    expect(firstList).toHaveLength(3);
    expect(firstList.every(t => t.id !== "1")).toBeTruthy();
    expect(firstList[0].id).toBeDefined()
    expect(firstList[3]).not.toBeDefined()
});


test("change status in task", () => {
    const action = changeStatusAC(todoListId, "2", TaskStatus.Completed);
    const { [todoListId]: firstTodolist }: TasksDomainType  = taskReducer(initialTasks, action);

    expect(firstTodolist[1].status).toBe(TaskStatus.Completed);
    expect(firstTodolist[1].id).toBe("2");
    expect(firstTodolist).toHaveLength(4)
});

test("change title task", () => {
    const action = changeTitleTaskAC(todoListId, "3", "change_title_test");
    const { [todoListId]: firstTodolist }: TasksDomainType  = taskReducer(initialTasks, action)

    expect(firstTodolist[2].title).toBe("change_title_test");
    expect(firstTodolist).toHaveLength(4);
    expect(firstTodolist).not.toBeUndefined()
})



test("delete todolist task", () => {
    const action = removeTodolistAC(todoListId);

    const state = taskReducer(initialTasks, action);

    expect(state[todoListId]).not.toBeDefined();
    expect(state[todoListId2]).toBeDefined();
})



