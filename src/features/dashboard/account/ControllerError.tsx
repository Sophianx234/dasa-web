import { FieldErrors, FieldValues } from "react-hook-form"
export type fieldTypes = {
    message:string
    }

export type controllerErrorProps = {
    err: FieldErrors<FieldValues>,
    inputName: string
}
function ControllerError({err,inputName}:controllerErrorProps) {
    return (
        
        <div className="">
            
            {err[inputName] && <p className=" bg-red-200 w-full pl-2 rounded-sm py-1 text-red-950">{err[inputName].message}</p>}

        </div>
    )
}

export default ControllerError
