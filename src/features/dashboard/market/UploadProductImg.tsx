import { File } from "buffer";
import { IoMdClose } from "react-icons/io";
import { extendFile } from "./DragZone";
import RenameFile from "./RenameFile";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import DropDownButton from "./DropDownButton";
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
  return (
    <div className="relative select-none   ">
      <IoMdClose
        className="absolute  left-0 top-0"
        onClick={() => handleRemoveImage(id)}
      />
      <img
        src={file?.preview}
        alt={file.name}
        className="size-44 object-cover object-center "
      />
      <p className="text-center text-xs tracking-tight flex justify-between items-center pt-1 font-bold">
        
        <input type="text" name="" id="" className="bg-white"/>
        {file.name.split(".")[0].slice(0, 12)}

<DropDownButton icon={<BiDotsVerticalRounded className="translate-x-1 size-4"/>} handleRemoveImage={handleRemoveImage} id={id}/>
      </p>
    </div>
  );
}

export default UploadProductImg;
