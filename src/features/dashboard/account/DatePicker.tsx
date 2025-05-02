"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form"

export type datePickerProps<T extends FieldValues> = {
    type?:'normal' | 'signup'
    field: ControllerRenderProps<T, Path<T>>,

}
export function DatePicker<T extends FieldValues>({field,type='normal'}:datePickerProps<T>) {
  const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover   >
      <PopoverTrigger className="relative indent-10 " asChild>
        <Button 
          variant={"outline"}
          className={cn(
            " w-full py-6 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <div className=" bg-dasalight h-full flex justify-center items-center left-0  px-4 absolute">

          <CalendarIcon />
          </div>
          {date ? format(date, "PPP") : <span>{type==='normal'?'Pick a date':'Date of birth'}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto  p-0">
        <Calendar
          mode="single"
          selected={date}
          
          onSelect={(selectedDate) => {
            setDate(selectedDate); // Update the local state
           field.onChange(selectedDate); // Notify React Hook Form
          }}
          initialFocus
          
        />
      </PopoverContent>
    </Popover>
  )
}
