import { API_URL } from "@/services/apiServices";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

export type protectedRouteProp = {
  children: ReactNode;
};
export type isAuthenticatedResponse = {
  isAuthenticated: boolean;
};
export function ProtectedRoute({ children }: protectedRouteProp) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(
    function () {
      async function checkUserIsAuthenticated() {
          
          const { data } = await axios.get(`${API_URL}/users/auth/check`, {
              withCredentials: true,
            });
            if (data) {
                const { isAuthenticated } = data as isAuthenticatedResponse;
                setIsLoggedIn(isAuthenticated);
                if (!isAuthenticated) {
                    navigate("/");
                }
            }
            
        }
        checkUserIsAuthenticated();
        if(!isLoggedIn){
                setIsLoggedIn(false)
                navigate('/')
            
        }
      
    },
    [navigate,isLoggedIn]
  );
  

  return isLoggedIn ? children : null;
}
