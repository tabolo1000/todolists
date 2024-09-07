import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/App";
import { Auth } from "../components/auth/auth";
import { ErrorPage } from "../components/error/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Auth />
    },

],
    {
        basename: "/todolists"
    }
);