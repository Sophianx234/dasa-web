import { InputHTMLAttributes, ReactElement } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export type accountFormInput<T extends FieldValues> = {
    register?: UseFormRegister<T>,
    inputName?: Path<T>,
    icon?: ReactElement,
    errMsg?: string,
    type?: string,
    iconBorder?: boolean
    
    

} & InputHTMLAttributes<HTMLInputElement>

function AccountFormInput<T extends FieldValues>({icon,errMsg,register,inputName,type,iconBorder=false,...rest}:accountFormInput<T>) {
  if(type !=='textarea')
    return (
      <>
        <label className="input input-bordered flex items-center gap-2 relative bg-white">
          <div className={`${iconBorder && 'bg-dasalight h-full flex justify-center items-center px-4 left-0 absolute  '}`}>

      {icon}
          </div>
       {register && <input  className={`grow ${iconBorder&&'indent-10'} `}  {...register(inputName!,{required:errMsg})} {...rest}  />}
      </label>
      
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
