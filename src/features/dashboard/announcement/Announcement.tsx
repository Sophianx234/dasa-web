import { SlPin } from "react-icons/sl"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
function Announcement() {
    return (
        <div className="mx-4 border-2 shadow-lg mt-4 pt-2 px-2 rounded-md ">
            <div className="grid grid-cols-[2fr_.5fr] pt-2 pr-1 ">
                <div className="flex space-x-2">
                <img src="https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg" className="size-14 rounded-full"/>

                    <div >
                        <h1 className="font-Montserrat font-semibold ">Damian Nannet</h1>
                        <p className="text-sm">Vice President - Mar 16, 09:00pm</p>

                    </div>

                </div>
                <div className="flex justify-end gap-2">
                <SlPin className="size-5"/>
                <BiDotsHorizontalRounded className="size-5"/>

                </div>
            </div>
            <div>
                <div className="pt-5 space-y-2 pb-3">

                <h1 className="flex items-center gap-1 ">
                <MdOutlineEventNote className="size-6 fill-dasadeep"/>
                <span className="">General</span>
                </h1>
                <h1 className="font-bold font-mulish text-lg">Welcome to DaSA humble Dasians</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias quaerat ratione eveniet id rem. Doloremque ad natus architecto praesentium.</p>
                <div className="flex justify-between py-2 pr-3 items-center">
                  <h1 className="font-semibold">
                  <span className="">
                  👍🤯</span>  12 person
                    </h1> 
                    <div>
                        <p className="font-semibold">2 Comments</p> 
                        </div> 
                </div>
                <div>
                    <div className="flex gap-4 border-t-2 py-2 pb-3  ">
                       <span className="flex items-center gap-2 justify-center 
                       font-semibold"><FaRegSmileBeam/> Reactions</span> 
                       <span className="flex items-center gap-2 justify-center font-semibold"><LiaComment/> Comment</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement
