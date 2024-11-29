import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

export type selectButtonProps = {
  options: string[];
  theme: string;
  field: ControllerRenderProps<FieldValues, string>;
};

function SelectButton({ field, options, theme }: selectButtonProps) {
  return (
    <div>
      <Select onValueChange={field.onChange}>
        <SelectTrigger className="w-full py-6">
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
