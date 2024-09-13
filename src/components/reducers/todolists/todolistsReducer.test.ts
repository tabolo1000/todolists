import { v1 } from "uuid";
import { todolistsReducer } from "./todolistsReducer";
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
    const action = todolistsReducer.actions.createTodolistAC({ id: todolistId, title: "React" })
    const state: Array<TodolistDomainType> = todolistsReducer.reducer(initialTodolists, action)

    expect(state).toHaveLength(3);
    expect(state[1]).not.toBeUndefined();
});

test("change title todolist", () => {
    const action = todolistsReducer.actions.changeTitleTodolistAC({ id: todolistId, title: 'test_title_todolist' });
    const state = todolistsReducer.reducer(initialTodolists, action);

    expect(state).toHaveLength(2);
    expect(state[0].title).toBe('test_title_todolist');
    expect(state[0].filter).toBe('All');
});

test("change filter todolist", () => {
    const action = todolistsReducer.actions.changeFilterTodolistAC({ id: todolistId, filter: 'Active' });

    const state = todolistsReducer.reducer(initialTodolists, action);

    expect(state[1]).toBeDefined();
    expect(state[0].filter).toEqual('Active');
    expect(state).toHaveLength(2);
});

test("remove todolist", () => {
    const action = todolistsReducer.actions.removeTodolistAC({ id: todolistId });

    const state = todolistsReducer.reducer(initialTodolists, action);

    expect(state).toHaveLength(1);
    expect(state[0].id).toBe(todolistId2);
    expect(state.every(el => el.id !== todolistId)).toBeTruthy();
})

test("Todolist must be added", () => {
    const action = todolistsReducer.actions.setTodolistAC({ todolists: initialTodolists });

    const state = todolistsReducer.reducer(initialTodolists, action);

    expect(state).toHaveLength(2);
    //expect(state).toContain(initialTodolists[0])
    //expect(state).toContain(initialTodolists[0])
})