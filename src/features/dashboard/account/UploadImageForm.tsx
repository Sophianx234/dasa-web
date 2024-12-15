import { useForm } from "react-hook-form"
import ConfirmModal from "./ConfirmModal"

export type uploadImageFormProps = {
    handleClose: ()=>void
}
function UploadImageForm({handleClose}:uploadImageFormProps) {
    const {handleSubmit,register} = useForm()
    function handleOnSubmit(data:unknown){
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <ConfirmModal register={register} handleClose={handleClose} type="form"/>
        </form>
    )
}

export default UploadImageForm
