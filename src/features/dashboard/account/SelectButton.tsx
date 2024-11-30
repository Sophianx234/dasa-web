import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { PiBuildingApartmentLight } from "react-icons/pi";

export type selectButtonProps = {
  options: string[];
  theme: string;
  field: ControllerRenderProps<FieldValues, string>;
  type?: string
};

function SelectButton({ field, options, theme }: selectButtonProps) {
  return (
    <div>
      <Select onValueChange={field.onChange}>
        <SelectTrigger className="w-full py-6 relative indent-11">
          <div className="bg-dasalight absolute h-full flex items-center px-4 left-0">
          <PiBuildingApartmentLight className="size-4"/>
          </div>
          <SelectValue placeholder={theme} />
        </SelectTrigger>
        <SelectContent>
          {options.map((hall) => (
            <SelectItem key={hall} value={hall.toLowerCase()}>
              {hall}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectButton;
