import { useForm } from "react-hook-form"
import ConfirmModal from "./ConfirmModal"

function UploadImageForm() {
    const {handleSubmit,reset,register} = useForm()
    function handleOnSubmit(data){
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <ConfirmModal register={register}  type="form"/>
        </form>
    )
}

export default UploadImageForm
