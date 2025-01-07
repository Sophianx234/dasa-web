import { getUser, login, logout, signup } from "@/services/apiServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { toggleIsAuthenticated, toggleSidebar } from "../slices/navSlice";
import type { AppDispatch, RootState } from "./../../../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();



export function useLogout(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();

  const { mutateAsync: handleLogout } = useMutation({
    mutationFn: logout,
    onMutate: () => {
      toast.loading("logging out");
    },
    onSuccess: () => {
      toast.dismiss()
      toast.success("logout successful");
      setTimeout(() => {
        
        toast.dismiss()
        navigate("/homepage");

          dispatch(toggleIsAuthenticated(false));
          dispatch(toggleSidebar())
      }, 1000);
    },
    onError: () => {
      toast.dismiss()
      toast.error("logout unsuccessful");
    },
  });

  return { handleLogout };
}

export function useLogin(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();
  
  const { mutateAsync: handleLogin } = useMutation({
    mutationFn: login,
    onMutate: () => {
      toast.loading("Authenticating");
    },

    onSuccess: () => {
      toast.dismiss()
      toast.success("Login Successfully");
      dispatch(toggleIsAuthenticated(true));

      setTimeout(() => {
        toast.dismiss()
        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss()
      toast.error("Login Failed", {
        duration: 1000,
        position: "top-center",
      });

    },
  });
  
  return { handleLogin };
}
export function useSignup(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();

  const { mutateAsync: handleSignup } = useMutation({
    mutationFn: signup,
    onMutate: () => {

      toast.loading("Processing your signup request....")
    },

    onSuccess: () => {
      
      toast.dismiss()
      toast.success("Signup Successful");
      dispatch(toggleIsAuthenticated(true));
      
      setTimeout(() => {
        toast.dismiss()

        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss()
      toast.error("Signup Failed", {
        duration: 1000,
        position: "top-center",
      });

    },
  });

  return { handleSignup };
}

export function useGetUser() {

  const { isLoading,data:user,error } =  useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    
  });

  return { isLoading,user,error };
}

