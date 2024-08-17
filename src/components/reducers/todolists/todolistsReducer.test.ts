import { v1 } from "uuid";
import { changeFilterTodolistAC, changeTitleTodolistAC, createTodolistAC, removeTodolistAC, todolistsReducer } from "./todolistsReducer";
import { TodolistDomainType } from "../../../types/todolist";


let initialTodolists: Array<TodolistDomainType>;
const todolistId: string = v1(),
    todolistId2: string = v1();
beforeEach(() => {


    initialTodolists = [
        {
            id: todolistId,
            title: "Technologes",
            filter: "All",
            addedDate: "",
            order: 0,
        },
        {
            id: todolistId2,
            title: "UI",
            filter: "All",
            addedDate: "",
            order: 0,
        }
    ];
});


test("Create todolist", () => {
    const action = createTodolistAC(todolistId, "React")
    const state: Array<TodolistDomainType> = todolistsReducer(initialTodolists, action)

    expect(state).toHaveLength(3);
    expect(state[1]).not.toBeUndefined();
});

test("change title todolist", () => {
    const action = changeTitleTodolistAC(todolistId, 'test_title_todolist');
    const state = todolistsReducer(initialTodolists, action);

    expect(state).toHaveLength(2);
    expect(state[0].title).toBe('test_title_todolist');
    expect(state[0].filter).toBe('All');
});

test("change filter todolist", () => {
    const action = changeFilterTodolistAC(todolistId, 'Active');

    const state = todolistsReducer(initialTodolists, action);

    expect(state[1]).toBeDefined();
    expect(state[0].filter).toEqual('Active');
    expect(state).toHaveLength(2);
});

test("remove todolist", () => {
    const action = removeTodolistAC(todolistId);

    const state = todolistsReducer(initialTodolists, action);

    expect(state).toHaveLength(1);
    expect(state[0].id).toBe(todolistId2);
    expect(state.every(el => el.id !== todolistId)).toBeTruthy();
})