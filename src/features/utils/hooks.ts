import { login, logout, signup } from "@/services/apiServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import type { AppDispatch, RootState } from "./../../../store";
import { toggleIsAuthenticated } from "../slices/navSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useLogout(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();

  const { mutateAsync: handleLogout } = useMutation({
    mutationFn: logout,
    onMutate: () => {
      toast.loading("logging out", {
        duration: 1000,
      });
    },
    onSuccess: () => {
      toast.success("logout successful");
      setTimeout(() => {
          navigate("/homepage");
          dispatch(toggleIsAuthenticated(false));
      }, 1000);
    },
    onError: () => {
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
      toast.loading("Authentication", {
        duration: 1000,
      });
    },

    onSuccess: () => {
      toast.success("Login Successfully");
      dispatch(toggleIsAuthenticated(true));

      setTimeout(() => {
        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.error("Login Failed", {
        duration: 4000,
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
      toast.loading("Processing your signup request....", {
        duration: 1000,
      });
    },

    onSuccess: () => {
      toast.success("Signup Successful");
      dispatch(toggleIsAuthenticated(true));

      setTimeout(() => {
        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.error("Signup Failed", {
        duration: 4000,
        position: "top-center",
      });
    },
  });

  return { handleSignup };
}
