import { signupCredentialsExtended } from "@/services/apiServices";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setIsLoggedIn } from "../slices/navSlice";
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
            const token = localStorage.getItem('token')
              // const  {data} = await axios.get(`${API_URL}/users/auth/check`, {
              //     withCredentials: true,
              //     headers: { Authorization: `Bearer ${token}` }
              //   });

                
                // console.log('Goku',data)
                // if (data) {
                //     const { isAuthenticated,user } = data as isAuthenticatedResponse;
                //     dispatch(setUser(user))
                  if(token){

                    dispatch(setIsLoggedIn(true));
                  }else{

                    navigate("/");
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
