import { v1 } from "uuid";
import { TodolistType } from "../../../App";
import { createTodolistAC, todolistsReducer } from "./todolistsReducer";


let initialTodolists: Array<TodolistType>;
beforeEach(() => {
    const todolistId: string = v1(),
        todolistId2: string = v1();

    initialTodolists = [
        { id: todolistId, title: "Technologes", filter: "All" },
        { id: todolistId2, title: "UI", filter: "All" }
    ];
});


test("Create todolist", () => {
    const action = createTodolistAC("React")
    const state: Array<TodolistType> = todolistsReducer(initialTodolists, action)
    
    expect(state).toHaveLength(3);
    expect(state[1]).not.toBeUndefined();
})