import { IoMenu } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { toggleNav } from "../slices/navSlice"
import { useAppSelector } from "../utils/hooks"

function Header() {
    const logo = ["https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" ]
    const dispatch = useDispatch()
    const isOpen = useAppSelector(store=>store.nav.isOpen)
    const navigate = useNavigate()
    
    return (
        <div className="flex sticky  -top-1 shadow-md z-40 items-center justify-between px-2 py-2 bg-[#FEF3E7]">
            
            <Link to='/homepage'  className="flex items-center text-sm " onClick={()=>{
                }}>
            <img src={logo[0]} className=" w-20 "/>
           <span className="font-bold">DaSA</span>
            </Link>
            <button onClick={()=>dispatch(toggleNav())}>

            <IoMenu className="size-12"/>
            
            </button>
        </div>
    )
}

export
 default Header
