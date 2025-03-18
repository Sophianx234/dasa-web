import { setIsOpenAttachFile } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { ChangeEvent, ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import { formValues } from "../account/ChangeContactForm";
import axios from "axios";
import { API_URL } from "@/services/apiServices";
type attachFileLinkProps = {
  icon: ReactNode;
  text: string;
  accept: string;
};
type uploadAttachedFileFormInput = formValues &{
  img:string
}
function AttachFileLink({ icon, text, accept }: attachFileLinkProps) {
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement | null>(null);

   function handleClick() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  async function handleFileUpload(e:ChangeEvent<HTMLInputElement>){
    const formData = new FormData()
    for(const i in  e.target.files){
      const file = e.target.files?.[+i]
      formData.append('img',file)
      await axios.post(`${API_URL}/messages/anonymous/upload`,formData)

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
