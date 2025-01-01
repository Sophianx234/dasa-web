import { IoMenu } from "react-icons/io5"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { toggleNav } from "../slices/navSlice"
import DasaLogo from "./DasaLogo"

function Header() {
    const dispatch = useDispatch()
    
    return (
        <div className="flex fixed  right-0 left-0 -top-2 shadow-md z-40 items-center justify-between px-2 py-2 bg-[#FEF3E7]">
            
            <Link to='/homepage'  className="flex items-center text-sm " onClick={()=>{
                }}>
            <DasaLogo title="Dagbon Students Association"/>
            </Link>
            <button onClick={()=>dispatch(toggleNav())}>

            <IoMenu className="size-12"/>
            
            </button>
        </div>
    )
}

export
 default Header
