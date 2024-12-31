import { DeepRequired, FieldErrors, FieldValues } from "react-hook-form"


export type controllerErrorProps<T extends FieldValues> = {
    err: FieldErrors<T>,
    inputName: keyof DeepRequired<T>
}
function ControllerError<T extends FieldValues>({err,inputName}:controllerErrorProps<T>) {
    return (
        
        <div className="">
            
            {err[inputName] && <p className=" bg-red-200 w-full pl-2 rounded-sm py-1 text-red-950">{err[inputName].message as string}</p>}

        </div>
    )
}

export default ControllerError
