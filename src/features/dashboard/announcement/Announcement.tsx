import { convertDateToCustomString } from "@/features/utils/helpers";
import { announcementI } from "@/services/apiServices";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import { MdOutlineEventNote } from "react-icons/md";
import { SlPin } from "react-icons/sl";
import DeleteButton from "../administrator/DeleteButton";
import { useDeleteAnnouncement } from "@/features/utils/hooks";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export type announcementProps = {
    announce:announcementI 
    type?: 'admin'|'normal'
}
function Announcement({announce,type='normal'}:announcementProps) {
    const date = convertDateToCustomString(announce.date as string)
  const {handleRemoveAnnouncement} = useDeleteAnnouncement()
  async function handleDeleteAnnouncement(id:string) {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This announcement will be deleted.",
        icon: "warning",
        heightAuto:false,
          backdrop:false,
        showCancelButton: true,
        confirmButtonColor: "#e8590c",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes!",
      });
  
      if (result.isConfirmed) {
        
        handleRemoveAnnouncement(id);
      }
    }    
    return (
        <div className="mx-8 border-2 shadow-lg mt-4 pt-2 px-2 rounded-md ">
            <div className="grid grid-cols-[2fr_.5fr] pt-2 pr-1 ">
                <div className="flex space-x-2">
                <img src={announce.announcerProfile} className="size-12 w-14 rounded-full"/>
                {/* <img src="https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg" className="size-14 rounded-full"/> */}

                    <div >
                        <h1 className="font-Montserrat font-semibold ">{announce.announcer}</h1>
                        <p className="text-sm">{announce.portfolio} - {date}</p>

                    </div>

                </div>
                <div className="flex justify-end gap-2 relative">
                <SlPin className="size-5"/>

                {type=='normal'?<BiDotsHorizontalRounded className="size-5"/>: <div className="">
                    <DeleteButton handleDelete={()=>handleDeleteAnnouncement(announce._id)} abs={false}/>

                </div> 
                }

                </div>
            </div>
            <div>
                <div className="pt-5 space-y-2 pb-3">

                <h1 className="flex items-center gap-1 ">
                <MdOutlineEventNote className={`size-6 ${announce.messageType === 'general'?'fill-dasadeep':announce.messageType ==='event'?'fill-green-400':'fill-red-400'}`}/>
                <span className="">{announce.messageType[0].toUpperCase()+announce.messageType.slice(1)}</span>
                </h1>
                <h1 className="font-bold font-mulish text-lg">{announce.title}</h1>
                </div>
                <p>{announce.content}</p>
                <div className="flex justify-between py-2 pr-3 items-center">
                  <h1 className="font-semibold">
                  <span className="">
                  👍🤯</span>  {announce.reactions} person
                    </h1> 
                    <div>
                        <p className="font-semibold">{announce.comments.length} Comments</p> 
                        </div> 
                </div>
                <div>
                    <div className="flex gap-4 border-t-2 py-2 pb-3  ">
                       <span className="flex items-center gap-2 justify-center 
                       font-semibold"><FaRegSmileBeam/> Reactions</span> 
                       <span className="flex items-center gap-2 justify-center font-semibold"><LiaComment/> Comment</span> 
                    </div>
                </div>
                <Toaster/>
            </div>
        </div>
    )
}

export default Announcement
