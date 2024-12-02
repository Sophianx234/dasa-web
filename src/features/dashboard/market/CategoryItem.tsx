import { ReactElement } from "react"
import { MdPhoneIphone } from "react-icons/md"
export type categoryItemProps = {
    icon: ReactElement,
    title: string
}
function CategoryItem({icon,title}:categoryItemProps) {
    return (
        <div className="flex flex-col justify-center items-center space-y-1">
           <div className="border rounded-full size-11 flex items-center justify-center ">
            {icon}
            </div> 
            <p className="text-xs">{title}</p>
        </div>
    )
}

export default CategoryItem
