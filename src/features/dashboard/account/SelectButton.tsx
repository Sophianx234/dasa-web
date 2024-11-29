import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type selectButtonProps = {
    options: string[],
    theme: string,
    
}

function SelectButton({field,options, theme }) {
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
