import { ReactElement } from "react";

type adminControlItemProps = {
  icon: ReactElement;
  text:string

}
function AdminControlItem({icon,text}:adminControlItemProps) {
  return (
    <div>
       <div className="flex flex-col justify-center items-center">
      
          {icon}
          <span className="text-sm font-poppins ">{text}</span> 
            </div>
    </div>
  )
}

export default AdminControlItem
