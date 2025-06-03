import {
  changeProfile,
  changeUserRole,
  createAnnouncement,
  createEvent,
  deleteAnnouncement,
  forgotPassword,
  getAnnouncements,
  getAnonymous,
  getEvents,
  getGallery,
  getNotifications,
  getUser,
  getUsers,
  getVideos,
  login,
  LoginResponse,
  logout,
  removeEvent,
  removeImage,
  removeUser,
  resetPassword,
  signup,
  updateAnnouncement,
  updateUser,
  uploadImages
} from "@/services/apiServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { setIsLoggedIn, setUser, toggleIsAuthenticated, toggleSidebar } from "../slices/navSlice";
import type { AppDispatch, RootState } from "./../../../store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();



/* class queryOptions {
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
  */

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
      localStorage.removeItem('token')
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
  const dispatch = useAppDispatch()

  const { mutateAsync: handleLogin } = useMutation({
    mutationFn: login,
    onMutate: () => {
      toast.loading("Authenticating");
    },

    onSuccess: (data:LoginResponse) => {
      toast.dismiss();
      toast.success("Login Successfully");
      
      dispatch(setIsLoggedIn(true))
      dispatch(setUser(data.user))
      localStorage.setItem('token',data.token)
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
export function useResetPassword(navigate: NavigateFunction) {
  const dispatch = useAppDispatch()

  const { mutateAsync: handlePassReset } = useMutation({
    mutationFn: resetPassword,
    onMutate: () => {
      toast.loading("Resetting password....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Password reset Successfully");
      dispatch(setIsLoggedIn(true))

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

  return { handlePassReset };
}
export function useSignup(navigate: NavigateFunction) {
  const dispatch = useAppDispatch();

  const { mutateAsync: handleSignup } = useMutation({
    mutationFn: signup,
    onMutate: () => {
      toast.loading("Signing Up ....");
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
export function useGetAnonymous(lim:number|null=null) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["anonymous"],
    queryFn: ()=>getAnonymous(lim),
  });

  return { isLoading, data, error };
}
export function useGetEvents() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return { isLoading, data, error };
}
export function useGetNotifications() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  return { isLoading, data, error };
}
export function useGetAnnouncements() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["announcements"],
    queryFn: getAnnouncements,
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
        queryKey: ["users"],
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
export function useForgotPassword() {

  const { mutateAsync: handleforgotPassword } = useMutation({
    mutationFn: forgotPassword,
    onMutate: () => {
      toast.loading("Requesting password reset....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Successful");
      

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

  return { handleforgotPassword};
}
export function useUpdateAnnouncement() {
  const queryClient = useQueryClient();

  const { mutateAsync: handleUpdateAnnouncement } = useMutation({
    mutationFn: updateAnnouncement,
    onMutate: () => {
      toast.loading("Changing announcement....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("announcement changed");
      queryClient.invalidateQueries({
        queryKey: ["announcements"],
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

  return { handleUpdateAnnouncement };
}
export function useDeleteAnnouncement() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleRemoveAnnouncement } = useMutation({
    mutationFn: deleteAnnouncement,
    onMutate: () => {
      toast.loading("Deleting Announcement....");
    },
    

    onSuccess: () => {
      toast.dismiss();
      toast.success("Announcement deleted");
      queryClient.invalidateQueries({
        queryKey: ["announcements"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not delete announcement", {
        duration: 1000,
        position: "top-center",
      });
    },
    
  });
  return {handleRemoveAnnouncement}
}

export function useCreateAnnouncement() {
  const queryClient = useQueryClient();
  

  const { mutateAsync: handleCreateAnnouncement } = useMutation({
    mutationFn: createAnnouncement,
    onMutate: () => {
      toast.loading("Created announcement....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Announcement created");
      queryClient.invalidateQueries({
        queryKey: ["announcements"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not create announcement ", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleCreateAnnouncement };
}
export function useCreateEvent() {
  const queryClient = useQueryClient();
  

  const { mutateAsync: handleCreateEvent } = useMutation({
    mutationFn: createEvent,
    onMutate: () => {
      toast.loading("Created event....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Event created");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not create event ", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleCreateEvent };
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
        queryKey: ["users"],
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


export function useDeleteImage() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleRemoveImage } = useMutation({
    mutationFn: removeImage,
    onMutate: () => {
      toast.loading("Deleting Image....");
    },
    

    onSuccess: () => {
      toast.dismiss();
      toast.success("Image deleted");
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
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
  return {handleRemoveImage}
}
export function useDeleteEvent() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleRemoveEvent } = useMutation({
    mutationFn: removeEvent,
    onMutate: () => {
      toast.loading("Deleting Event....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Event deleted");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not delete event", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleRemoveEvent };
}
export function useDeleteUser() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleRemoveUser } = useMutation({
    mutationFn: removeUser,
    onMutate: () => {
      toast.loading("Deleting User....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("User deleted");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not deleteUser", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleRemoveUser };
}
export function useChangeUserRole() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleChangeUserRole } = useMutation({
    mutationFn:changeUserRole,
    onMutate: () => {
      toast.loading("Changing User role....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("User role changed");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not deleteUser", {
        duration: 1000,
        position: "top-center",
      });
    },
  });

  return { handleChangeUserRole };
}
export function useDeleteVideo() {
  const queryClient = useQueryClient();
  
  const { mutateAsync: handleRemoveVideo } = useMutation({
    mutationFn: removeImage,
    onMutate: () => {
      toast.loading("Deleting video....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Video deleted");
      queryClient.invalidateQueries({
        queryKey: ["videos"]
      });
      queryClient.refetchQueries({ queryKey: ["videos"] })

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

  return { handleRemoveVideo };
}
export function useGallery() {
  const {isLoading, data,error} = useQuery({
    queryFn: getGallery,
    queryKey: ['gallery'],
    
    

  })
  return {isLoading,data,error}
}

export function useGetusers() {
  const {isLoading, data,error} = useQuery({
    queryFn: getUsers,
    queryKey: ['users'],
    
    

  })

  return { isLoading,data,error };
}
export function useGetVideos() {
  const {isLoading, data,error} = useQuery({
    queryFn: getVideos,
    queryKey: ["videos"],
    
    

  })

  return { isLoading,data,error };
}

export function useUploadImages(){
  const queryClient = useQueryClient();
  const {mutateAsync:handleUploadImages}= useMutation({
    mutationFn:uploadImages,
    
    onMutate: () => {
      toast.loading("Uploading images....");
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success("Uploaded successfully");
      queryClient.invalidateQueries({
        queryKey: ["media"],
      });

      setTimeout(() => {
        toast.dismiss();
      }, 2 * 1000);
    },
    onError: () => {
      toast.dismiss();
      toast.error("Could not upload images", {
        duration: 1000,
        position: "top-center",
      });
    },
  })
  return {handleUploadImages}
}
