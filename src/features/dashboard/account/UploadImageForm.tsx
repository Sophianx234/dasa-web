import { useForm } from "react-hook-form"
import ConfirmModal from "./ConfirmModal"

export type uploadImageFormProps = {
    handleClose: ()=>boolean
}
function UploadImageForm({handleClose}:uploadImageFormProps) {
    const {handleSubmit,reset,register} = useForm()
    function handleOnSubmit(data){
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <ConfirmModal register={register} handleClose={handleClose} type="form"/>
        </form>
    )
}

export default UploadImageForm
