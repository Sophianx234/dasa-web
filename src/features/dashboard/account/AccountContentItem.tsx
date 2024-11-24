import { ReactElement } from "react";
import { IoIosArrowForward } from "react-icons/io"
import { VscSymbolColor } from "react-icons/vsc";
export type accountContentItemProps = {
    content: string,
    type?: 'toggle',
    icon: ReactElement
}
function AccountContentItem({content,type,icon}:accountContentItemProps) {
    if(type !== 'toggle')
    return (
        <li className="flex  justify-between py-2 hover:bg-dasalight transition-all duration-105 items-center rounded-lg px-2 ">
                    <div className="flex items-center space-x-3"> <span className="bg-dasalight px-2 py-2 rounded-lg">
                {icon}</span>
            <span className="font-medium"> {content}</span></div><IoIosArrowForward className="size-5"/>
                    </li>


    )
    else return (
        <li className="flex items-center px-2 justify-between py-2">
            <div className="flex items-center space-x-3"> <span className="bg-dasalight px-2 py-2 rounded-lg">
                {icon}</span>
            <span className="font-medium"> {content}</span></div>
                    <input type="checkbox" className=" indeterminate:bg-white toggle" defaultChecked />
                    </li>
    )
    
}

export default AccountContentItem
