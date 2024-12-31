import { InputHTMLAttributes, ReactElement } from "react"
import { UseFormRegister } from "react-hook-form"
import { formValues } from "./ChangeContactForm"

export type accountFormInput = {
    register: UseFormRegister<formValues>,
    inputName: keyof formValues,
    icon?: ReactElement,
    errMsg: string,
    type?: string,
    iconBorder?: boolean
    
    

} & InputHTMLAttributes<HTMLInputElement>

function AccountFormInput({icon,errMsg,register,inputName,type,iconBorder=false,...rest}:accountFormInput) {
  if(type !=='textarea')
    return (
      <>
        <label className="input input-bordered flex items-center gap-2 relative bg-white">
          <div className={`${iconBorder && 'bg-dasalight h-full flex justify-center items-center px-4 left-0 absolute  '}`}>

      {icon}
          </div>
        <input  className={`grow ${iconBorder&&'indent-10'} `}  {...register(inputName,{required:errMsg})} {...rest}  />
      </label>
      
      </>
    )
    else return (
      <textarea  className="textarea textarea-bordered w-full bg-white" placeholder="write issue here"
      {...register(inputName,{required:errMsg})} ></textarea>
    )
}

export default AccountFormInput
