import { ReactElement, useState } from "react";
import { IoIosArrowForward } from "react-icons/io"
import { VscSymbolColor } from "react-icons/vsc";
import ThemeController from "./ThemeController";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { toggleChangeContact, toggleChangePassword, toggleRevealFaq, toggleRevealReportIssue } from "@/features/slices/navSlice";
export type accountContentItemProps = {
    content: string,
    type?: 'toggle',
    icon: ReactElement
}
function AccountContentItem({content,type,icon}:accountContentItemProps) {
    const [isRotate,setIsRotate] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    
    function handleOnclick(e){
        setIsRotate(rotate=>!rotate)
       if( content.includes('Password')) dispatch(toggleChangePassword())
       if( content.includes('Phone')) dispatch(toggleChangeContact())
       if( content.includes('Report')) dispatch(toggleRevealReportIssue())
       if( content.includes('FAQ')) dispatch(toggleRevealFaq())
       
    }
    if(type !== 'toggle')

    return (
        <li onClick={handleOnclick} className="flex  justify-between py-2 group hover:bg-dasalight transition-all duration-105 items-center rounded-lg px-2 select-none">
                    <div className="flex items-center space-x-3"> <span className="group-hover:bg-white shadow-sm transition-all duration-150 bg-dasalight px-2 py-2 rounded-lg ">
                {icon}</span>
            <span className="font-medium"> {content}</span></div><IoIosArrowForward className={`size-5 duration-150 ${isRotate && 'rotate-90'}`}/>
                    </li>


    )
    else return (
        <li className="flex items-center px-2 justify-between py-2">
            <div className="flex items-center space-x-3"> <span className="bg-dasalight px-2 py-2 rounded-lg">
                {icon}</span>
            <span className="font-medium"> {content}</span></div>
                   {content !== 'Theme'? <input type="checkbox" className=" indeterminate:bg-white toggle" defaultChecked />:<ThemeController/>}
                    </li>
    )
    
}

export default AccountContentItem
