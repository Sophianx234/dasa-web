import { ChangeEvent, ReactNode, useRef } from "react";
type attachFileLinkProps = {
  icon: ReactNode;
  text: string
}
function AttachFileLink({icon,text}:attachFileLinkProps) {
  const fileRef = useRef<HTMLInputElement| null>(null)
  function handleClick(){
    if(fileRef.current){
      console.log('Damian')
      fileRef.current.click()

    }


  }
  return (
    <>
    <li className="flex items-center space-x-3 py-2 px-2 pr-4 hover:bg-dasalight   " onClick={handleClick} >
      
              {icon} <span className="font-semibold text-sm ">{text}</span>
              </li>
              <input type="file"
               className="hidden"
               ref={fileRef}
                />
    </>
  )
}

export default AttachFileLink
