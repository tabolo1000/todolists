import { Dispatch } from "redux"
import { authAPI, Login} from "../../api/authAPI/auth_api"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    isAuth: false,
    login: {
        userId: 0,
        token: "",
    },
}


export const authReducer = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        isAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        },
        loginAuth: (state, action: PayloadAction<{ login: DataLogin }>) => {
            state.login = action.payload.login
        },
        logoutAuth: (state, action) => {
            state.isAuth = false;
        },
    }
})








//---------------Thunk_Creater--------------------------------------


export const isAuthTC = () => (dispatch: Dispatch) => {
    authAPI.isAuth()
        .then((res) => {
            if (res.data.messages.length === 0) {
                dispatch(authReducer.actions.isAuth({ isAuth: true }))
            }
        })
        .catch(() => {
            alert("isAuthTC")
        })
}

export const loginAuthTC = (login: Login) => (dispatch: Dispatch) => {
    authAPI.loginAuth(login)
        .then((res) => {
            if (res.data.messages.length === 0) {
                dispatch(authReducer.actions.loginAuth({ login: res.data.data }))
                dispatch(authReducer.actions.isAuth({ isAuth: true }))
            }

        })
        .catch(() => {
            alert("loginAuthTC")
        })
}

export const logoutAuthTC = () => (dispatch: Dispatch) => {
    authAPI.logoutAuth()
        .then((res) => {
            dispatch(authReducer.actions.logoutAuth({}))
        })
        .catch(() => {
            alert("loginAuthTC")
        })
}




//-------------------Type_Auth_Reducer--------------------------------



type DataLogin = {
    userId: number;
    token: string;
}
