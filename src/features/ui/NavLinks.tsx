import { IoClose } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"
import { useAppDispatch } from "../utils/hooks"
import { toggleNav } from "../slices/navSlice"
import { motion } from "framer-motion"


export type navLinksProps = {
    swap: 'col'|'flex'
}

function NavLinks({swap= 'flex'}:navLinksProps) {
    const dispatch = useAppDispatch()
    const logo = ["https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" ]
    return (
        <motion.div
        exit={{x:'-100vw', opacity:0}}
        animate={{x:0, opacity:1}}
        initial={{x:'-100vw',opacity:0}}
        transition={{type:'keyframes'}}
        className="bg-white fixed -top-1 -bottom-1 z-50  pb-10 left-0 right-0    pt-6 px-4 space-y-6">
            <div className="flex justify-between ">
                <Link to='/homepage'>
                <img src={logo[0]} className=" w-20"/>
                </Link>
                <button onClick={()=>dispatch(toggleNav())}>

            <IoClose className="size-8"/>
                </button>
            </div>
            <ul className={swap === 'col'? 'flex flex-col px-4 gap-6': 'flex gap-10'}>
                <Link to='/homepage' onClick={()=>dispatch(toggleNav())}>
                    Home
                </Link>
                <NavLink to='about' onClick={()=>dispatch(toggleNav())}>
                    About
                </NavLink>
                <NavLink to='login' onClick={()=>dispatch(toggleNav())}>
                    Login
                </NavLink>
                <NavLink to='signup' className='text-center bg-dasalight py-2 font-semibold hover:rounded-sm hover:bg-white hover:border-2 border-2 border-white hover:border-dasalight transition-all duration-150 rounded-sm' onClick={()=>dispatch(toggleNav())}>
                    Join the Community
                </NavLink>
            </ul>
        </motion.div>
    )
}

export default NavLinks
