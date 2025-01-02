import { ReactNode, useEffect } from "react";
import { useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";

export type protectedRouteProp = {
    children:ReactNode
}
export function ProtectedRoute({children}:protectedRouteProp){
    const navigate = useNavigate()
    const {isAuthenticated} = useAppSelector(store=>store.nav)

    useEffect(function(){
        if(!isAuthenticated) navigate('/')
    },[navigate,isAuthenticated])

    return isAuthenticated? children :null
}