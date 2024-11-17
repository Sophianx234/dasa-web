export type FieldErrorProps = {
    errors: FieldError<any>
  };
function FieldError({errors}:FieldErrorProps) {
    return (
        <>
        {errors &&
             <p className="py-2 bg-dasalight ">{errors.message}</p>}
             </>
    )
}

export default FieldError
