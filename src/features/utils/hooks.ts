import {
  changeProfile,
  getGallery,
  getUser,
  login,
  LoginResponse,
  logout,
  signup,
  updateUser,
} from "@/services/apiServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { toggleIsAuthenticated, toggleSidebar } from "../slices/navSlice";
import type { AppDispatch, RootState } from "./../../../store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();



class queryOptions {
  queryClient = useQueryClient();
  sInfor: string
  err: string
  pending: string
  key: string
  constructor(sInfo:string,err:string,pending:string,key:string){
    this.key = key
    this.sInfor = sInfo
    this.err = err
    this.pending = pending
    

  }
  onMutate(){
       toast.loading(this.pending);
       return this
    }
    
    onSuccess(){
      toast.dismiss();
      toast.success(this.sInfor);
      this.queryClient.invalidateQueries({
        queryKey: [this.key],
      });
    
      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
      return this
    }
    onError(){
      toast.dismiss();
      toast.error(this.err, {
        duration: 1000,
        position: "top-center",
      });

    }
    
  }

export function useLogout(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();

  const { mutateAsync: handleLogout } = useMutation({
    mutationFn: logout,
    onMutate: () => {
      toast.loading("logging out");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("logout successful");
      localStorage.removeItem("token");
      setTimeout(() => {
        toast.dismiss();
        navigate("/homepage");

        dispatch(toggleIsAuthenticated(false));
        dispatch(toggleSidebar());
      }, 1000);
    },
    onError: () => {
      toast.dismiss();
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

    onSuccess: (data: LoginResponse) => {
      toast.dismiss();
      toast.success("Login Successfully");
      localStorage.setItem("token", data.token);
      dispatch(toggleIsAuthenticated(true));

      setTimeout(() => {
        toast.dismiss();
        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
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
      toast.loading("Processing your signup request....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Signup Successful");
      dispatch(toggleIsAuthenticated(true));

      setTimeout(() => {
        toast.dismiss();

        navigate("/dashboard/overview");
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Signup Failed", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleSignup };
}

export function useGetUser() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, data, error };
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync: handleUpdateUser } = useMutation({
    mutationFn: updateUser,
    onMutate: () => {
      toast.loading("Changing profile....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("profile changed");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not change profile picture", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleUpdateUser };
}
export function useChangeUserProfile() {
  const queryClient = useQueryClient();

  const { mutateAsync: handleChangeProfile } = useMutation({
    mutationFn: changeProfile,
    onMutate: () => {
      toast.loading("Changing profile....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("profile changed");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not change profile picture", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleChangeProfile };
}
export function useGallery(page:number,limit:number) {
  const {isLoading, data,error} = useQuery({
    queryFn: ()=>getGallery(page,limit),
    queryKey: ['gallery',page,limit]

  })

  return { isLoading,data,error };
}
