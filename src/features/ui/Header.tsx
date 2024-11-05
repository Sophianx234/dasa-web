import { Link, NavLink } from "react-router-dom"
import { FaWolfPackBattalion } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"

function Header() {
    return (
        <div className="flex items-center justify-between px-2 py-2 bg-[#FEF3E7]">
            
            <Link to='about'>
            <FaWolfPackBattalion className="size-12"/>

            </Link>
            <IoMenu className="size-12"/>
        </div>
    )
}

export
 default Header
