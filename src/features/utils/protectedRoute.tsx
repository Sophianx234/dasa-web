import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type protectedRouteProp = {
    children:ReactNode
}
export function ProtectedRoute({children}:protectedRouteProp){
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    useEffect(function(){
        if(isAuthenticated !== 'true') navigate('/')
    },[navigate,isAuthenticated])

    return isAuthenticated?.includes('true')? children :null
}