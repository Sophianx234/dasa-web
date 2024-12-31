import { FieldError } from "react-hook-form";

export type ErrorFieldProps = {
    errors: FieldError
  };
function ErrorFieldProps({errors}:ErrorFieldProps) {
    return (
        <>
        {errors &&
             <p className="py-2 bg-dasalight ">{errors.message}</p>}
             </>
    )
}

export default ErrorFieldProps
