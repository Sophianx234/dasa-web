import { HTMLAttributes, ReactElement } from "react"
import { UseFormRegister } from "react-hook-form"

export type accountFormInput = {
    register: UseFormRegister<any>,
    inputName: string,
    icon: ReactElement,
    errMsg: string,
    type:string

} & InputHTMLAttributes<HTMLInputElement>
function AccountFormInput({icon,errMsg,register,inputName,...rest}:accountFormInput) {
    return (
        <label className="input input-bordered flex items-center gap-2 bg-white">
      {icon}
        <input  className="grow"  {...register(inputName,{required:errMsg})} {...rest}  />
      </label>
    )
}

export default AccountFormInput
