import { setIsOpenAttachFile } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { ChangeEvent, ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import { formValues } from "../account/ChangeContactForm";
import axios from "axios";
import { API_URL, dmType } from "@/services/apiServices";
import { useParams } from "react-router-dom";
import { sendAnonymousMessage, sendMessage } from "@/features/slices/userSlice";
import { File } from "buffer";
type attachFileLinkProps = {
  icon: ReactNode;
  text: string;
  accept: string;
  type: 'channel'|'direct'
};
type uploadAttachedFileFormInput = formValues &{
  img:string
}
function AttachFileLink({ icon, text, accept,type }: attachFileLinkProps) {
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement | null>(null);
  const {id} = useParams()
  console.log('yy2233kdsdlfjdg',id)

   function handleClick() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  async function handleFileUpload(e:ChangeEvent<HTMLInputElement>){
    for(const file of  e.target.files as FileList){
      const formData = new FormData()
      formData.append('img',file)
      const {data} = await axios.post(`${API_URL}/${`messages/${type==='channel'?'anonymous':id}/upload`}`,formData)
      console.log('res',data)
      const {populatedMessage} = data as {
        populatedMessage: dmType
      }
      console.log('dxc',populatedMessage)
      if(type==='channel'){
        dispatch(sendAnonymousMessage(populatedMessage))
      }
      if(type==='direct'){
        dispatch(sendMessage(populatedMessage))
      }

    }
    dispatch(setIsOpenAttachFile(false))

  }
  return (
    <>
      <li
        className="flex items-center space-x-3 py-2 px-2 pr-4 hover:bg-dasalight   "
        onClick={handleClick}
      >
        {icon} <span className="font-semibold text-sm ">{text}</span>
      </li>
      <input type="file"  className="hidden" ref={fileRef}
      accept={accept}
      onChange={handleFileUpload}
       />
    </>
  );
}

export default AttachFileLink;
