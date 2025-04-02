import { API_URL } from "@/services/apiServices";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type protectedRouteProp = {
    children:ReactNode
}
export type isAuthenticatedResponse = {
    isAuthenticated: boolean
}
export function ProtectedRoute({children}:protectedRouteProp){
    const navigate = useNavigate()
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    useEffect(function(){
        async function checkUserIsAuthenticated(){

            const {data} = await axios.get(`${API_URL}/users/auth/check`,{withCredentials:true})
            const {isAuthenticated} = data as isAuthenticatedResponse
            if(!isAuthenticated) navigate('/')
                setIsLoggedIn(isAuthenticated)
            }
        checkUserIsAuthenticated()
    },[navigate])

    return isLoggedIn ? children :null
}