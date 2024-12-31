import { useForm } from "react-hook-form"
import { IoIosLock } from "react-icons/io"
import { TbPasswordUser } from "react-icons/tb"
import FormError from "./FormError"

function ChangePasswordForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState:{errors}
    }= useForm()
    const password = watch('newPass')
    return (
        <form onSubmit={handleSubmit((data)=>{
          console.log(data)
          reset()})}>
        
      <label className="input input-bordered flex items-center gap-2 bg-white">
      <TbPasswordUser/>
        <input type="text" className="grow" {...register("currentPass",{required:'Please enter current password'})}  placeholder="Enter current password" />
      </label>
        <FormError errors={errors} inputName="currentPass"/>
      <label className="input input-bordered flex items-center gap-2 bg-white">
      <IoIosLock className="fill-gray-600"/>
        <input type="password" className="grow" {...register("newPass",{required:'Please enter new password'})}placeholder="Enter new password" />
      </label>
      <FormError errors={errors} inputName="newPass"/>
      <label className="input input-bordered flex items-center gap-2 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd" />
        </svg>
        <input type="password" className="grow" 
        placeholder="Confirm password" {...register("confirmPass",{required:'Please confirm password',
            validate: (value)=> value === password || 'Passwords do not match'
        })}  />
      </label>
      <FormError errors={errors} inputName="confirmPass"/>
      <button className="bg-dasadeep font-semibold w-full py-2 mt-2 rounded-md text-[#191611]">Change password</button>
            </form>
    )
}

export default ChangePasswordForm
