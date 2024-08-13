
import { combineReducers, Dispatch, legacy_createStore } from "redux";
import { taskReducer, TasksAction } from "../components/reducers/tasks/tasksReducer";
import { TodolistAction, todolistsReducer } from "../components/reducers/todolists/todolistsReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: taskReducer,
})

type StateType = ReturnType<typeof rootReducer>

type RootReducerType = TasksAction | TodolistAction;

export const store = legacy_createStore(rootReducer)

//export const useAppDispatch = useDispatch<Dispatch<RootReducerType>>;

export const useAppDispatch = () => useDispatch<Dispatch<RootReducerType>>()
//export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
interface SelectorFunction<S=any> {
    (selector: (state: StateType) => S):S
}

export const useAppSelector = <S>(selector: (state: StateType) => S) => {
    return useSelector<StateType, S>(selector)
}

/*export const useAppSelector = <S>(selector: (state: StateType) => S): S => {
    return useSelector<StateType, S>(selector);
};*/



//@ts-ignore
window.store = store