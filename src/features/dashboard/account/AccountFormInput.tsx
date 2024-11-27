import { InputHTMLAttributes, ReactElement } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import FormError from "./FormError"

export type accountFormInput = {
    register: UseFormRegister<any>,
    inputName: string,
    icon?: ReactElement,
    errMsg: string,
    type: string
    
    

} & InputHTMLAttributes<HTMLInputElement>

function AccountFormInput({icon,errMsg,register,inputName,type,...rest}:accountFormInput) {
  if(type !=='textarea')
    return (
      <>
        <label className="input input-bordered flex items-center gap-2 bg-white">
      {icon}
        <input  className="grow "  {...register(inputName,{required:errMsg})} {...rest}  />
      </label>
      
      </>
    )
    else return (
      <textarea  className="textarea textarea-bordered w-full bg-white" placeholder="Bio"
      {...register(inputName,{required:errMsg})} ></textarea>
    )
}

export default AccountFormInput
