import { API_URL } from "@/services/apiServices";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsLoggedIn } from "../slices/navSlice";

export type protectedRouteProp = {
  children: ReactNode;
};
export type isAuthenticatedResponse = {
  isAuthenticated: boolean;
};
export function ProtectedRoute({ children }: protectedRouteProp) {
  const navigate = useNavigate();
  const {isLoggedIn} = useAppSelector(store=>store.nav)
  const dispatch = useAppDispatch()
  useEffect(
    function () {
      async function checkUserIsAuthenticated() {
          console.log('Goku')
          
          const  {data} = await axios.get(`${API_URL}/users/auth/check`, {
              withCredentials: true,
            });
            if (data) {
                const { isAuthenticated } = data as isAuthenticatedResponse;
                dispatch(setIsLoggedIn(isAuthenticated));
                if (!isAuthenticated) {
                    navigate("/");
                }
            }
            
        }
        checkUserIsAuthenticated();
        if(!isLoggedIn){
            navigate('/')
        }
        
        
      
    },
    []
  );
  

  return isLoggedIn ? children : null;
}
