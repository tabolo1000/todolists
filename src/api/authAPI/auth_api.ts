import axios from "axios";




const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/auth",
    headers: {
        "api-key": "15f58b4b-0d66-4b69-a133-320f34b52e56",
    },
    withCredentials: true,
} as const)




export const authAPI = {
    isAuth: () => instanse.get<ResponceAuth<AuthData>>("/me"),
    loginAuth: (login: Login) => instanse.post<ResponceAuth<LoginData>>("/login", login),
    logoutAuth: () => instanse.delete<ResponceAuth>("/login"),
}




//------------Type_Responce------------------------------------------

interface ResponceAuth<T = {}> {
    data: T;
    messages: Array<string>;
    fieldsErrors?: Array<string>;
    resultCode: number
}

//-------IS_AUTH----------------


interface AuthData {
    id: number;
    login: string;
    email: string;
}


//-------AUTH_LOGING--------------

export interface Login {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string;
}

export interface LoginData {
    userId: number;
    token: string;
}

//-------AUTH_LOGOUT---------------
