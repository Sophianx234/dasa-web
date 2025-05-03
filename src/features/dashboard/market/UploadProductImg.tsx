import { IoMdClose } from "react-icons/io";
import { extendFile } from "./DragZone";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
export type uploadPrductImgProps = {
  file: extendFile;
  id: number;
  handleRemoveImage: (id:number) => void;
};

export type productImgFormValues = {
  imgName: string
}

function UploadProductImg({
  id,
  file,
  handleRemoveImage,
}: uploadPrductImgProps) {
  
  
  const [renameImage, setRenameImage] = useState<boolean|null>()
  // const [newImgName, setNewImgName] = useState<string|null>()
  const {handleSubmit,reset} = useForm<productImgFormValues>()
  const onSubmit: SubmitHandler<productImgFormValues>=(data:productImgFormValues)=>{
    
    // setNewImgName(data?.imgName)
    console.log(data)
    reset()
    handleToggleRename()

  }
  function handleToggleRename(){
    setRenameImage(reveal=>!reveal)
  }
  const fileType = file.type.split('/')[0]
  console.log('fileX',fileType)
  return (
    <div className="relative    ">
      <IoMdClose
        className={`${fileType!=='video'?"absolute stroke-red-500 left-0 top-0":''}`}
        onClick={() => handleRemoveImage(id)}
        />
        {fileType==='image'?

      <img
        src={file?.preview}
        alt={file.name}
        className="size-48 object-cover object-center "
      />: <video
      
      loop
      muted 
      autoPlay={false}
      
      playsInline
      controls
      className="w-screen h-56 pb-4 object-cover object-center "
      
      
    >
      <source src={file.preview}  type={file.type} />
      Your browser does not support the video tag. Please try viewing this
      page in a modern browser.
    </video>}

      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center text-xs tracking-tighter leading-4 flex justify-between items-center pt-1  font-bold">
        
        


      </div>
      {renameImage && <div className="flex pl-1 pt-2">
         <button   className="bg-dasadeep text-xs px-2 font-poppins font-semibold rounded-sm py-1 ">Rename</button>
      </div>
         }
         </form>
    </div>
  );
}

export default UploadProductImg;
