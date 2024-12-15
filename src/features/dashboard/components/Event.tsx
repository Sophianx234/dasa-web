import { CiLocationOn } from "react-icons/ci"
import { FaRegCalendar } from "react-icons/fa6"
import { MdOutlineLocationOn } from "react-icons/md"

function Event() {
    return (
        <>

        <div className="grid grid-cols-1  border-dasalight border-2 mx-4 shadow-lg pb-6 rounded-lg">
            
            <div>
            <img src="https://i.ibb.co/Snhv1YQ/d-2.png" alt="d-2" className="h-full"/>
            </div>
            <div className="space-y-2">
                    <p className="bg-dasadeep h-fit w-fit px-4 text-lg py-2 font-Montserrat font-semibold">latest</p>
                <h1 className=" gap-2 font-Montserrat font-semibold pl-2 text-lg">General Meeting</h1>
                <div className="space-y-2 pl-2 pb-2">
                    <p className="flex text-sm gap-2 font-Montserrat font-semibold items-center "> <FaRegCalendar className="size-6"/>Tuesday 19th November 2024</p>
                    <p className="flex items-center  text-sm gap-1 font-poppins -translate-x-1 font-semibold"><MdOutlineLocationOn className="size-7"/> <span>Tamale</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Event

