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
























//------Experimental_site ---------------------------------



const _authAPI = {
    isAuth: () => instanse.get<_ResponceAuth<_AuthData>>("/me"),
    loginAuth: (login: Login) => instanse.post<_ResponceAuth<LoginData>>("/login", login),
    logoutAuth: () => instanse.delete<_ResponceAuth>("/login"),
}


const _isAuthTC = () => (dispatch: any) => {
    _authAPI.isAuth()
        .then((res: { data: ResponceAuth<AuthData> } | number) => {

            if (isData(res)) {

            }

            else if ((res.data.messages.length) === 0) {

            }
        })
        .catch(() => {
            alert("isAuthTC")
        })
}

function isDat<T>(input: T): T | undefined {
    if(typeof input === "number") { return input + 5 as T}
}

interface DataContainer<T> {
    data: T;
}

function processData<T extends DataContainer<{ id: number}>>(container: T): number {
    return container.data.id;
}

const container: DataContainer<{ id: number, name: string }> = {
    data: {
        id: 10,
        name: "Example"
    }
};


function myFunction(this: _ResponceAuth<_AuthData>, message: string) {
    console.log(this.data.id, message);
  }

const id = processData(container); 

isDat<number>(5)
let a1 = {
        data: {
            id: 12,
            login: "",
            email: "",
        },
        messages: [],
        fieldsErrors: [],
        resultCode: 12,
    }

isDat<_ResponceAuth<_AuthData>>(a1)

myFunction.call(a1, "ds");


function a(value: number): string;
function a(value: string): number;
function a(value: number | string): string | number {
    if(typeof value === "number") {
        return value + ""
    }
    return value
} 



interface _AuthData {
    id: number;
    login: string;
    email: string;
}

interface _ResponceAuth<T = {}> {
    data: T;
    messages: Array<string>;
    fieldsErrors?: Array<string>;
    resultCode: number,
}

function isData(input: { data: ResponceAuth<AuthData> } | number): input is number {
    return (input as number).toString !== null;
}