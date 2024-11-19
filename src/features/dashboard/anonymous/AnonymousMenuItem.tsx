import { ReactElement } from "react"
import { IoMdSend } from "react-icons/io"
import { Link } from "react-router-dom"
export type anonymousMenuProps = {
    icon: ReactElement,
    title: string,
    link: string
}
function AnonymousMenuItem({icon,title,link}:anonymousMenuProps) {
    return (
        <Link to={link} className="bg-dasalight grid grid-cols-[2fr_.4fr] items-center hover:pr-4 hover:pl-1 transition-all shadow-md rounded-full duration-150 text-[#191817]">
            <div className="flex items-center gap-3 px-3 py-3 text-lg font-mulish font-bold  ">

             {icon}
             <span>{title}</span>
            </div>
             <div>
             <IoMdSend className="size-8 fill-dasadeep"/>
             </div>
            </Link>
    )
}

export default AnonymousMenuItem
