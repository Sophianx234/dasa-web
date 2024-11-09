import { IoClose } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../utils/hooks"
import { toggleNav } from "../slices/navSlice"

export type navLinksProps = {
    swap: 'col'|'flex'
}
function NavLinks({swap= 'flex'}:navLinksProps) {
    const dispatch = useAppDispatch()
    return (
        <div className="bg-white fixed -top-1 -bottom-1   pb-10 left-0 right-0   z-20 pt-6 px-4 space-y-6">
            <div className="flex justify-between">
                <p>Logo</p>
                <button onClick={()=>dispatch(toggleNav())}>

            <IoClose className="size-8"/>
                </button>
            </div>
            <ul className={swap === 'col'? 'flex flex-col gap-6': 'flex gap-10'}>
                <NavLink to='/homepage'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='sigin'>
                    Signin
                </NavLink>
                <NavLink to='signup' className='text-center bg-dasalight py-2 font-semibold hover:rounded-sm hover:bg-white hover:border-2 border-2 border-white hover:border-dasalight transition-all duration-150 rounded-sm'>
                    Join the Community
                </NavLink>
            </ul>
        </div>
    )
}

export default NavLinks
