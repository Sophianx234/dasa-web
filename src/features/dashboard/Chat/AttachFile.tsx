import { MdInsertPhoto } from "react-icons/md"
import AttachFileLink from "./AttachFileLink"
import { IoDocumentText } from "react-icons/io5"
import { RefObject } from "react"
type attachFileProps = {
  attachFileRef: RefObject<HTMLDivElement>
  type: 'channel'| 'direct'
}
function AttachFile({attachFileRef,type}:attachFileProps) {
  return (
    <div className="absolute -top-[5.6rem] right-10 z-40  bg-white shadow-md border-none " ref={attachFileRef}>
      <div className="">

      
        <ul className=" ">
          
          <AttachFileLink type={type} icon={<MdInsertPhoto className="size-6"/>} text="Photos & videos" accept="image/*,video/*"/>
          <AttachFileLink type={type} icon={<IoDocumentText className="size-6"/>} text="Document" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"/>
          
        </ul>
      </div>
      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] right-5  rotate-180 absolute -bottom-[.7rem] border-white"></div>

        
      
    </div>
  )
}

export default AttachFile
