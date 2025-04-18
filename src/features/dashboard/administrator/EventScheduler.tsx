import { MdEvent, MdOutlineEmojiEvents } from "react-icons/md"
import AccountFormInput from "../account/AccountFormInput"
import { DatePicker } from "../account/DatePicker"
import DeleteButton from "./DeleteButton"
import { IoMdTime } from "react-icons/io"
import { GoLocation } from "react-icons/go"
import { useAppDispatch } from "@/features/utils/hooks"
import { toggleRevealEventScheduler } from "@/features/slices/navSlice"
import { HiOutlinePlusSmall } from "react-icons/hi2"
import { ChangeEvent, useState } from "react"

function EventScheduler() {
  const dispatch = useAppDispatch()
  const [eventImg,setEventImg] = useState<File|null>(null)
  console.log('eventImg',eventImg)
  return (
    <form className="bg-white fixed  inset-0 -top-1  z-50">
      <DeleteButton dispatch={()=>dispatch(toggleRevealEventScheduler())}/>

      <div className="text-center pt-10 font-poppins font-semibold">Schedule Event</div>
      <label htmlFor="file-upload"
       className="flex justify-center  border mx-4 border-dashed relative border-dasadeep group">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*"
        onChange={(e) =>{
          if(e.target.files) setEventImg(e?.target?.files[0] as File)}
        } 
      />
      <HiOutlinePlusSmall className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-44 opacity-85 hidden group-hover:block transition-all " />
        <img src={eventImg?URL.createObjectURL(eventImg):"https://i.ibb.co/n8hRM6d/dasalogo-removebg.png"} alt="" className="size-72 w-full" />
      </label>
      <div className="pt-2">

<label htmlFor="" className="flex justify-center flex-col mx-6 space-y-1">
<div className="pl-1">Event name</div>
<AccountFormInput placeholder="email"
            iconBorder={true} icon={<MdOutlineEmojiEvents className="opacity-60"/>}/>
</label>
<label htmlFor="" className="flex justify-center flex-col mx-6 space-y-1">
<div className="pl-1">Event date</div>
<DatePicker/>
</label>
<label htmlFor="" className="flex justify-center flex-col mx-6 space-y-1">
<div className="pl-1">time</div>
<AccountFormInput placeholder="email"
            iconBorder={true} icon={<IoMdTime className="opacity-60"/>}/>
</label>
<label htmlFor="" className="flex justify-center flex-col mx-6 space-y-1">
<div className="pl-1">venue</div>
<AccountFormInput
type="text"
placeholder="email"
            iconBorder={true} icon={<GoLocation className="opacity-60"/>}/>
</label>
      </div>
      <div className="mx-10 py-2">

      <button className="bg-dasadeep w-full py-2 rounded-md  text-lg font-semibold font-poppins text-[#4c4132]">Create event</button>
      </div>
    </form>
  )
}

export default EventScheduler
