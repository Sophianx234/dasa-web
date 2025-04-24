import { toggleRevealAnnouncementForm } from "@/features/slices/navSlice";
import { useAppSelector, useCreateAnnouncement } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { LucideCircleUser } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FiTarget } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";
import { MdOutlineSubtitles } from "react-icons/md";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import AccountFormInput from "../account/AccountFormInput";
import { formValues } from "../account/ChangeContactForm";
import DeleteButton from "./DeleteButton";

/* 
announcer: string 
  announcerProfile: string, 
  portfolio: string,
  date: Date,
  messageType: string,
  title: string
  content: string
  reactions: number
  comments: string[] 
   */
  export type announcementFormValues = formValues & {
    title:string,
    announcer:string,
    portfolio:string,
    messageType:string,
    content:string
    announcerProfile:string


  }
function AnnouncementForm() {
  const {register,handleSubmit}  = useForm<announcementFormValues>()
  const dispatch = useDispatch()
  const {handleCreateAnnouncement} = useCreateAnnouncement()
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  const [selected,setSelected] = useState<string|null>(null)

  const onSubmit = async(data:announcementFormValues)=>{
    console.log(data)
    const date = new Date(Date.now()).toISOString()

    const [announcerProfile,messageType] = [userInfo.profileImage,(selected as string).toLocaleLowerCase()]
    const body = {...data,date,announcerProfile,messageType }
    console.log(body)
    const result = await Swal.fire({
          title: "Are you sure?",
          text: "This announcement will be created.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#e8590c",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes!",
        });
    
        if (result.isConfirmed) {
          await handleCreateAnnouncement(body)
           dispatch(toggleRevealAnnouncementForm());
        }
  }

  console.log('sdkljgd',selected)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="fixed -top-1 inset-0 bg-white space-y-1 z-50">
       <DeleteButton dispatch={()=>dispatch(toggleRevealAnnouncementForm())} />
      
            <div className="text-center pt-10 font-poppins font-semibold">
              Create Announcement
            </div>
            
            <div className="pt-2 space-y-1">
              <label
                htmlFor=""
                className="flex justify-center flex-col mx-6 space-y-1"
              >
                <div className="pl-1">Title</div>
                <AccountFormInput
                  required
                  inputName="title"
                  register={register}
                  placeholder="eg. Welcome Dasians"
                  iconBorder={true}
                  icon={<MdOutlineSubtitles className="size-6 opacity-60" />}
                />
              </label>
              <label
                htmlFor=""
                className="flex justify-center flex-col mx-6 space-y-1"
              >
                <div className="pl-1">Announcer</div>
                <AccountFormInput
                
                  required
                  inputName="announcer"
                  register={register}
                  defaultValue={userInfo.username}
                  placeholder={userInfo.username}
                  iconBorder={true}
                  icon={<LucideCircleUser className="opacity-60" />}
                />
              </label>
              
              <label
                htmlFor=""
                className="flex justify-center flex-col mx-6 space-y-1"
              >
                <div className="pl-1">Portfolio</div>
                <AccountFormInput 
                  required
                  placeholder="eg. Financial Secretary"
                  register={register}
                  inputName="portfolio"
                  iconBorder={true}
                  
                  icon={<LuCrown className="size-6 opacity-60" />}
                />
              </label>
              <label
                htmlFor=""
                className="flex justify-center flex-col mx-6 space-y-1"
              >
                <div className="pl-1">Subject </div>
                <AccountFormInput
                  
                  setSelectedValue={setSelected}
                  selectItems={['General','Urgent','Event']}
                  inputName="messageType"
                  type="customSelect"
                  
                  iconBorder={true}

                  icon={<FiTarget className="size-6 opacity-60" />}
                />
              </label>
              <label
                htmlFor=""
                className="flex justify-center flex-col mx-6 space-y-1 pt-2"
              >

              <textarea
              {...register('content')}
                
                className="border rounded-md  max-h-48 focus:outline-none px-2 py-1"
                >
                
                
              </textarea>
                </label>
            </div>
            <div className="mx-10 py-2">
              <button className="bg-dasadeep w-full py-2 rounded-md  text-lg font-semibold font-poppins text-[#4c4132]">
                 Announce
              </button>
            </div>
            <Toaster />
      
    </form>
  )
}

export default AnnouncementForm
