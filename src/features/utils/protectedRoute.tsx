import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { toggleIsAuthenticated } from "../slices/navSlice";

export type protectedRouteProp = {
    children:ReactNode
}
export function ProtectedRoute({children}:protectedRouteProp){
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuthenticated} = useAppSelector(store=>store.nav)
    useEffect(function(){
        const token = localStorage.getItem('token')
        if(!token && !isAuthenticated) navigate('/')
            dispatch(toggleIsAuthenticated(true))
    },[navigate,dispatch,isAuthenticated])

    return isAuthenticated? children :null
}