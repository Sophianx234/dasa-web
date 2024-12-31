import { UseFormRegister } from "react-hook-form"

export type fileInputButtonProps = {
    register:UseFormRegister<FormData> ,
    inputName: string
}
function FileInputButton({register,inputName}:fileInputButtonProps) {
    return (
        <input {...register(inputName,{required: 'please select an image'})}
  type="file"
  className="file-input file-input-bordered inp   w-full max-w-xs" />
    )
}

export default FileInputButton
