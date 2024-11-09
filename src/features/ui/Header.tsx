import { Link} from "react-router-dom"
import { FaWolfPackBattalion } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"

import { toggleNav } from "../slices/navSlice"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../utils/hooks"

function Header() {
    
    
    return (
        <div className="flex items-center justify-between px-2 py-2 bg-[#FEF3E7]">
            
            <Link to='about'>
            <FaWolfPackBattalion className="size-12"/>

            </Link>
            <button >

            <IoMenu className="size-12"/>
            </button>
        </div>
    )
}

export
 default Header
