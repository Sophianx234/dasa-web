import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toggleRenameImage } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { ReactElement } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { LuTextCursorInput } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
export type dropDownButtonProps = {
  icon: ReactElement;
  handleRemoveImage: (id: number) => void;
  id: number;
};
function DropDownButton({ icon, id, handleRemoveImage }: dropDownButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{icon}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Edit Image</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(toggleRenameImage())} className="flex justify-between pr-2">
          Rename <LuTextCursorInput/>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between pr-2" onClick={()=>handleRemoveImage(id)}>Delete<AiOutlineDelete/></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownButton;
