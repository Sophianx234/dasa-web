import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IoOptions } from "react-icons/io5"
export type selectButtonProps = {
    options: [string],
    theme: string
}
function SelectButton({options,theme}:selectButtonProps) {
    return (
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={theme} />
        </SelectTrigger>
        <SelectContent>
            {options.map(hall=><SelectItem value={hall.toLowerCase()}>{hall}</SelectItem>)}
          
          
        </SelectContent>
      </Select>
    )
}

export default SelectButton
