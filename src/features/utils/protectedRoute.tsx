import { API_URL, signupCredentialsExtended } from "@/services/apiServices";
import axios from "axios";
import { ReactNode, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setIsLoggedIn, setUser } from "../slices/navSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export type protectedRouteProp = {
  children: ReactNode;
};
export type isAuthenticatedResponse = {
  isAuthenticated: boolean;
  user:signupCredentialsExtended
};
export function ProtectedRoute({ children }: protectedRouteProp) {
  const navigate = useNavigate();
  const {isLoggedIn} = useAppSelector(store=>store.nav)
  const dispatch = useAppDispatch()
  useEffect(
    function () {
      async function checkUserIsAuthenticated() {
          try{
              const  {data} = await axios.get(`${API_URL}/users/auth/check`, {
                  withCredentials: true,
                });
                
                console.log('Goku',data)
                if (data) {
                    const { isAuthenticated,user } = data as isAuthenticatedResponse;
                    dispatch(setUser(user))
                    dispatch(setIsLoggedIn(isAuthenticated));
                    if (!isAuthenticated) {
                        navigate("/");
                    }
                }
            }catch(err){
                console.log('xx',err)
            }
            
        }
        checkUserIsAuthenticated();
        
        
        
      
    },
    [navigate,dispatch,isLoggedIn]
  );
  

  return isLoggedIn ? children : null;
}
