import { FieldErrors, FieldValues } from "react-hook-form"

export type formErrorProps<T extends FieldValues> = {
    errors: FieldErrors<T>,
    inputName: keyof T
}
function FormError<T extends FieldValues>({errors,inputName}:formErrorProps<T>){
    return (
        <>
        {errors[inputName] && <p className="text-center bg-red-200 py-1 my-2 rounded-sm text-[#321010] font-semibold">{errors[inputName].message as string}</p>}
        </>
    )
}

export default FormError
