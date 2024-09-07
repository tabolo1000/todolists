import { Dispatch } from "redux"
import { authAPI, Login, LoginData } from "../../api/authAPI/auth_api"



enum ACT {
    IS_AUTH = "IS_AUTH",
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGOUT_AUTH = "LOGOUT_AUTH",
}

const initialState = {
    isAuth: false,
    login: {
        userId: 0,
        token: "",
    },
}


export const authReducer = (state: InitialState = initialState, action: UnionAction) => {
    switch (action.type) {
        case ACT.IS_AUTH: return ({
            ...state,
            isAuth: action.payload.status
        })
        case ACT.LOGIN_AUTH: return ({
            ...state,
            login: action.payload,
        })
        case ACT.LOGOUT_AUTH: return ({
            ...state,
            isAuth: false,
        })

        default: return state
    }
}



//---------------Actions_Creater------------------------------------

export const isAuth = (status: boolean) => ({
    type: ACT.IS_AUTH,
    payload: {
        status,
    }
} as const)

export const logoutAuth = () => ({
    type: ACT.LOGOUT_AUTH,
} as const)

export const loginAuth = (login: LoginData) => ({
    type: ACT.LOGIN_AUTH,
    payload: login
} as const)




//---------------Thunk_Creater--------------------------------------

export const isAuthTC = () => (dispatch: Dispatch<UnionAction>) => {
    authAPI.isAuth()
        .then((res) => {
            if (res.data.messages.length === 0) {
                dispatch(isAuth(true))
            }
        })
        .catch(() => {
            alert("isAuthTC")
        })
}

export const loginAuthTC = (login: Login) => (dispatch: Dispatch<UnionAction>) => {
    authAPI.loginAuth(login)
        .then((res) => {
            if (res.data.messages.length === 0) {
                dispatch(loginAuth(res.data.data))
                dispatch(isAuth(true))
            }
            
        })
        .catch(() => {
            alert("loginAuthTC")
        })
}

export const logoutAuthTC = () => (dispatch: Dispatch<UnionAction>) => {
    authAPI.logoutAuth()
        .then((res) => {
            dispatch(logoutAuth())
        })
        .catch(() => {
            alert("loginAuthTC")
        })
}




//-------------------Type_Auth_Reducer--------------------------------

type InitialState = typeof initialState;
type UnionAction = IsAuth | LoginAuth | LogoutAuth;

type IsAuth = ReturnType<typeof isAuth>;
type LoginAuth = ReturnType<typeof loginAuth>;
type LogoutAuth = ReturnType<typeof logoutAuth>;