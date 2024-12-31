import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { RiDeleteBin5Line } from "react-icons/ri"
import ConfirmModal from "./ConfirmModal"

function DeleteAccount() {
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
    return (
        <>
        <div className="py-6 mx-4" onClick={()=>setShowConfirmModal(show=>!show)}>
            <h1 className="ml-2 font-Montserrat antialiased font-semibold text-lg">Danger Zone</h1>
            <div className=" group hover:bg-dasalight flex shadow-md px-4 mt-2 items-center py-2 rounded-md space-x-2 justify-between">
            <div className="flex items-center gap-2">

            <div className="shadow-sm bg-slate-200 p-2 group-hover:bg-white rounded-md group:bg-white"><RiDeleteBin5Line className="fill-red-400"/></div>
            <span className="font-semibold">Delete account</span>
            </div>
            <IoIosArrowForward className="size-5"/>
            </div>
            
        </div>
        {showConfirmModal &&<ConfirmModal  title="Delete Account" desc=" Are you sure you want to Delete Account."/>}
        </>
    )
}

export default DeleteAccount
