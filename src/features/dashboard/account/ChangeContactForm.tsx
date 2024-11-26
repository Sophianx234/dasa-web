import { useForm } from "react-hook-form"
import AccountFormInput from "./AccountFormInput"
import { IoIosContact } from "react-icons/io"

function ChangeContactForm() {
    const {handleSubmit,reset, register}= useForm()
    return (
        <form>
            <AccountFormInput icon={<IoIosContact/>} errMsg="Please enter new number" inputName="newContact" register={register} placeholder='Enter new phone number' type='tel' />
            
        </form>
    )
}

export default ChangeContactForm
