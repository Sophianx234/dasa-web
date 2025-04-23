import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Dispatch, InputHTMLAttributes, ReactElement, SetStateAction } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
export type accountFormInput<T extends FieldValues> = {
    register?: UseFormRegister<T>,
    inputName?: Path<T>,
    icon?: ReactElement,
    errMsg?: string,
    type?: string,
    iconBorder?: boolean
    selectItems?: string[]
    
    setSelectedValue?:Dispatch<SetStateAction<string | null>>
    
    

} & InputHTMLAttributes<HTMLInputElement>

function AccountFormInput<T extends FieldValues>({icon,errMsg,register,inputName,selectItems,setSelectedValue,type,iconBorder=false,...rest}:accountFormInput<T>) {
  if(type !=='textarea')
    return (
      <>
      
        {type=='customSelect'? 
        
          
        <Select  onValueChange={setSelectedValue}  >
      <SelectTrigger className="w-full  pl-20  focus:outline-none focus-within:outline-none relative h-12 ">
      <div className={`${iconBorder && 'bg-dasalight h-full flex justify-center items-center px-4 left-0 absolute  '}`}>

{icon}
    </div>

        <SelectValue placeholder="Select subject" 
        />
      </SelectTrigger>
      <SelectContent className=" w-full">
        <SelectGroup>
          
          {selectItems?.map((item,i)=><SelectItem  key={i} value={item}>{item}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
        :<label className={`input input-bordered flex items-center gap-2 relative bg-white`}>
          <div className={`${iconBorder && 'bg-dasalight h-full flex justify-center items-center px-4 left-0 absolute  '}`}>

      {icon}
          </div>
       {register && <input  className={`grow ${iconBorder&&'indent-10'} `}  {...register(inputName!,{required:errMsg})} {...rest}  />}
      </label>}
      
      </>
    )
    else return (
      <div>

      {register &&<textarea  className="textarea textarea-bordered w-full bg-white" placeholder="write issue here"
      { ...register(inputName!,{required:errMsg})} ></textarea>}
      </div>
    )
}

export default AccountFormInput
