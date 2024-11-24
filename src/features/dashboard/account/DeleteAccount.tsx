import { IoIosArrowForward } from "react-icons/io"
import { RiDeleteBin5Line } from "react-icons/ri"

function DeleteAccount() {
    return (
        <div className="py-24 mx-4">
            <h1 className="ml-2 font-Montserrat antialiased font-semibold text-lg">Danger Zone</h1>
            <div className=" hover:bg-dasalight flex shadow-md px-4 mt-2 items-center py-3 rounded-md space-x-2 justify-between">
            <div className="flex items-center gap-2">

            <div className="shadow-sm bg-slate-200 p-2 rounded-md group:bg-white"><RiDeleteBin5Line className="fill-red-400"/></div>
            <span className="font-semibold">Delete account</span>
            </div>
            <IoIosArrowForward className="size-5"/>
            </div>
            
        </div>
    )
}

export default DeleteAccount
