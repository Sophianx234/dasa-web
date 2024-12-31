import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export type fileInputButtonProps<T extends FieldValues> = {
    register:UseFormRegister<T> ,
    inputName: Path <T> 
}
function FileInputButton<T extends FieldValues>({register,inputName}:fileInputButtonProps<T>) {
    return (
        <input {...register(inputName,{required: 'please select an image'})}
  type="file"
  className="file-input file-input-bordered inp   w-full max-w-xs" />
    )
}

export default FileInputButton
