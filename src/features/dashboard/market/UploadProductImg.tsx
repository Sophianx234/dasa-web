import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { extendFile } from "./DragZone";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DropDownButton from "./DropDownButton";
import SelectButton from "../account/SelectButton";
export type uploadPrductImgProps = {
  file: extendFile;
  id: number;
  handleRemoveImage: (id:number) => void;
};

function UploadProductImg({
  id,
  file,
  handleRemoveImage,
}: uploadPrductImgProps) {
  const productCategories = [
    "Electronics",
    "Furniture",
    "Fashion",
    "Health & Beauty",
    "Food & Beverages",
    "Home & Living",
    "Books & Stationery",
    "Sports & Outdoors",
    "Baby & Kids",
    "Automotive",
    "Services",
    "Miscellaneous"
  ];
  
  const [renameImage, setRenameImage] = useState<boolean|null>()
  const [newImgName, setNewImgName] = useState<string|null>()
  const {handleSubmit,register,reset,control} = useForm()
  function handleRename(data){
    
    setNewImgName(data?.imgName)
    reset()
    handleToggleRename()

  }
  function handleToggleRename(){
    setRenameImage(reveal=>!reveal)
  }
  return (
    <div className="relative    ">
      <IoMdClose
        className="absolute  left-0 top-0"
        onClick={() => handleRemoveImage(id)}
      />
      <img
        src={file?.preview}
        alt={file.name}
        className="size-48 object-cover object-center "
      />

      <form onSubmit={handleSubmit((data)=>handleRename(data))}>
      <div className="text-center text-xs tracking-tighter leading-4 flex justify-between items-center pt-1  font-bold">
        
        {renameImage?<input type="text" {...register("imgName")} id="" className="bg-white w-full focus:outline-none focus:border indent-2 border-dasadeep py-1" />:
        newImgName || file.name.split(".")[0].slice(0, 12)
      }


{!renameImage &&<DropDownButton icon={<BiDotsVerticalRounded className="translate-x-1 size-4"/>} handleRemoveImage={handleRemoveImage} handleToggleRename={handleToggleRename} id={id}/>}
      </div>
      {renameImage && <div className="flex pl-1 pt-2">
         <button   className="bg-dasadeep text-xs px-2 font-poppins font-semibold rounded-sm py-1 ">Rename</button>
      </div>
         }
  <Controller
    name='product-category'
    control={control}
    render={({ field }) => (
      <SelectButton field={field} theme="select category" options={productCategories}/>
       
      )}
    />
         </form>
    </div>
  );
}

export default UploadProductImg;
