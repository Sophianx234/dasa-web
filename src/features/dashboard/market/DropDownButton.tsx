import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactElement } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuTextCursorInput } from "react-icons/lu";

export type dropDownButtonProps = {
  icon: ReactElement;
  id: number;
  handleToggleRename: ()=>void
  handleRemoveImage: (id: number) => void;
};
function DropDownButton({ icon, id, handleRemoveImage,handleToggleRename }: dropDownButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{icon}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Edit Image</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleToggleRename()} className="flex justify-between pr-2">
          Rename <LuTextCursorInput/>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between pr-2" onClick={()=>handleRemoveImage(id)}>Delete<AiOutlineDelete/></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownButton;
