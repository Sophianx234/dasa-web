import { setIsOpenAttachFile } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { ReactNode, useRef } from "react";
type attachFileLinkProps = {
  icon: ReactNode;
  text: string;
  accept: string;
};
function AttachFileLink({ icon, text, accept }: attachFileLinkProps) {
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement | null>(null);
  function handleClick() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  function handleFileUpload(){

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
      <input type="file" className="hidden" ref={fileRef}
      accept={accept}
      onChange={handleFileUpload} />
    </>
  );
}

export default AttachFileLink;
