import { FieldErrors } from "react-hook-form"

export type formErrorProps = {
    errors: FieldErrors<FormData>,
    inputName: string
}
function FormError({errors,inputName}:formErrorProps) {
    return (
        <>
        {errors[inputName] && <p className="text-center bg-red-200 py-1 my-2 rounded-sm text-[#321010] font-semibold">{errors[inputName].message}</p>}
        </>
    )
}

export default FormError
