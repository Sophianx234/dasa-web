import { MdInsertPhoto } from "react-icons/md"
import AttachFileLink from "./AttachFileLink"
import { IoDocumentText } from "react-icons/io5"

function AttachFile() {
  return (
    <div className="absolute -top-[5.6rem] right-10 z-40  bg-white ">
      <div className="">

      
        <ul className=" ">
          <AttachFileLink icon={<MdInsertPhoto className="size-6"/>} text="Photos & videos"/>
          <AttachFileLink icon={<IoDocumentText className="size-6"/>} text="Document"/>
          
        </ul>
      </div>
      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] right-5  rotate-180 absolute -bottom-3 border-white"></div>

      {/* <div className=" w-0 h-0  border-l-12 border-r-12 border-b-12 border-black border-2 border-b-white     rotate-45 "> </div> */}
        
      
    </div>
  )
}

export default AttachFile
