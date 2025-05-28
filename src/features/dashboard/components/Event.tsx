import { formatDate } from "@/features/utils/helpers"
import { FaRegCalendar } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5"
import { MdOutlineLocationOn } from "react-icons/md"
import { eventI } from "./Events"
import Swal from "sweetalert2"
import { useDeleteEvent } from "@/features/utils/hooks"
import { Toaster } from "react-hot-toast"
import Svg from "@/features/ui/Svg"
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

        <div className="grid grid-cols-1  pt-2  mx-4  pb-10 rounded-lg ">
            <div className="shadow-md rounded-md pb-3 mb-4 overflow-hidden border">

            
            
            <div className="relative ">
                <div>      {type ==='control'&&
                    <div className="p-1  rounded-full  top-0 right-1 absolute bg-white">
                        <IoCloseOutline onClick={()=>handleDeleteEvent(eventInfo._id)} className="size-6  stroke-red-400  "/>
                            </div>
                            }
                </div>
            <img src={eventInfo.eventImage} alt="d-2" className=" w-full h-80 object-cover object-center"/>
            </div>
            <div className="space-y-2">
                

                    <p className="bg-dasadeep inline-block px-3  py-1 italic text-base font-poppins font-semibold rounded-sm mt-1 ml-1">New</p>
                    <div className=" px-10 pt-4 space-y-2">
                <h1 className=" pt-2 gap-2 font-Montserrat font-semibold pl-2 text-lg">{eventInfo.title}</h1>
                <div className="space-y-2 pl-2 pb-2">
                    <p className="flex text-sm gap-2 font-Montserrat font-semibold items-center "> <FaRegCalendar className="size-6"/>{date}</p>
                    <p className="flex items-center  text-sm gap-1 font-poppins -translate-x-1 font-semibold"><MdOutlineLocationOn className="size-8"/> <span>{eventInfo.venue}</span></p>
                </div>
                </div>
                <Toaster/>
                <div><Svg/></div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Event

