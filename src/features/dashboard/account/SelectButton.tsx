import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { LuShoppingBag } from "react-icons/lu";
import { PiBuildingApartmentLight } from "react-icons/pi";

export type selectButtonProps = {
  options: string[];
  theme: string;
  field: ControllerRenderProps<FieldValues, string>;
  type?: string
};

function SelectButton({ field, options, theme,type }: selectButtonProps) {
  return (
    <div>
      <Select onValueChange={field.onChange}>
        <SelectTrigger className="w-full py-6 relative indent-11">
          <div className="bg-dasalight absolute h-full flex items-center px-4 left-0">
            { type ==='category'? <LuShoppingBag className="size-4"/>:
          <PiBuildingApartmentLight className="size-4"/>
          }</div>
          <SelectValue placeholder={theme} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectButton;
