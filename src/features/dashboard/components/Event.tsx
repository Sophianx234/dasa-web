import { formatDate } from "@/features/utils/helpers"
import { FaRegCalendar } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
import { MdOutlineLocationOn } from "react-icons/md"
import { eventI } from "./Events"
import Swal from "sweetalert2"
import { useDeleteEvent } from "@/features/utils/hooks"
import { Toaster } from "react-hot-toast"
type eventProps = {
    eventInfo: eventI
    type?: 'normal'|'control'
}
function Event({eventInfo,type ='normal'}:eventProps) {
    const date = formatDate(eventInfo.eventDate)
    const {handleRemoveEvent} = useDeleteEvent()
      async function handleDeleteEvent(id:string){
          const result = await Swal.fire({
                title: 'Are you sure?',
                text: "This event will be permanently deleted.",
                icon: 'warning',
                heightAuto:false,
          backdrop:false,
                showCancelButton: true,
                confirmButtonColor: '#e8590c',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
              });
            
              if (result.isConfirmed) {
                await handleRemoveEvent(id);
              }
        }
    return (
        <>

        <div className="grid grid-cols-1  border-dasalight border-2 mx-4 shadow-lg pb-6 rounded-lg">
            
            <div className="relative">
                <div>      {type ==='control'&&
                    <div className="p-1  rounded-full  top-0 right-1 absolute bg-white">
                        <IoCloseOutline onClick={()=>handleDeleteEvent(eventInfo._id)} className="size-6  stroke-red-400  "/>
                            </div>
                            }
                </div>
            <img src={eventInfo.eventImage} alt="d-2" className=" w-full h-80 object-cover object-center"/>
            </div>
            <div className="space-y-2">
                    <p className="bg-dasadeep h-fit w-fit px-4 text-lg py-2 font-Montserrat font-semibold">latest</p>
                <h1 className=" gap-2 font-Montserrat font-semibold pl-2 text-lg">{eventInfo.title}</h1>
                <div className="space-y-2 pl-2 pb-2">
                    <p className="flex text-sm gap-2 font-Montserrat font-semibold items-center "> <FaRegCalendar className="size-6"/>{date}</p>
                    <p className="flex items-center  text-sm gap-1 font-poppins -translate-x-1 font-semibold"><MdOutlineLocationOn className="size-7"/> <span>{eventInfo.venue}</span></p>
                </div>
                <Toaster/>
            </div>
        </div>
        </>
    )
}

export default Event

