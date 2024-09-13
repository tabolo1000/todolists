import { Dispatch } from "redux";
import { taskReducer } from "../components/reducers/tasks/tasksReducer";
import { todolistsReducer } from "../components/reducers/todolists/todolistsReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authReducer } from "../components/auth/authReducer";
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        todolists: todolistsReducer.reducer,
        tasks: taskReducer.reducer,
        auth: authReducer.reducer,
    }
});

export type StateType = ReturnType<typeof store.getState>;




export const useAppDispatch = () => useDispatch<Dispatch<any>>()
interface SelectorFunction<T = any> {
    (state: StateType): T;
}

export const useAppSelector = <S = any>(selector: SelectorFunction<S>) => {
    return useSelector<StateType, S>(selector)
}





//@ts-ignore
window.store = store