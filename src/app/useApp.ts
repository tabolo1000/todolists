import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { isAuthTC } from "../components/auth/authReducer"





export const useApp = () => {
    
    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(isAuthTC())
    }, [])

    return {
        isAuth,
    }
}