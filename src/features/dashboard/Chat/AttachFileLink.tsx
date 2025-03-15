import { ReactNode } from "react";
type attachFileLinkProps = {
  icon: ReactNode;
  text: string
}
function AttachFileLink({icon,text}:attachFileLinkProps) {
  return (
    <li className="flex items-center space-x-3 py-2 px-2 pr-4 hover:bg-dasalight   ">
              {icon} <span className="font-semibold text-sm ">{text}</span>
              </li>
  )
}

export default AttachFileLink
