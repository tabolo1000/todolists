import { authReducer} from "./authReducer";

let initialState: any;

beforeEach(() => {
    initialState = {
        isAuth: false,
        login: {
            userId: 0,
            token: "",
        },
    }
})



describe("test auth reducer", () => {
    it("should change auth status", () => {
        const action = authReducer.actions.isAuth({ isAuth: true });
        const newState = authReducer.reducer(initialState, action);

        expect(newState.isAuth).toBe(true);
        expect(newState.isAuth).not.toBeUndefined();
        expect(newState.isAuth).not.toBeNull();
        expect(newState.isAuth).toBeDefined()
    });

    it("should be logout", () => {
        const action = authReducer.actions.logoutAuth({})
        const newState = authReducer.reducer(initialState, action);

        expect(newState.isAuth).toBe(false);
        expect(newState.isAuth).not.toBeUndefined();
        expect(newState.isAuth).not.toBeNull();
        expect(newState.isAuth).toBeDefined()
    });

    it("should be login", () => {
        const dataAction = {
            userId: 100,
            token: "9318d787-4529-4959-9a34-fccb35be77b1"
        }
        const action = authReducer.actions.loginAuth({login: dataAction});
        const newState = authReducer.reducer(initialState, action);

        expect(newState.login.userId).toBe(100);
        expect(newState.login.token).toBe("9318d787-4529-4959-9a34-fccb35be77b1");
    });
});



export { }


//--------------Types_auth_reducer-------------------------------

type InitialState = {
    isAuth: boolean;
    login: {
        userId: number;
        token: string;
    } | null;
}