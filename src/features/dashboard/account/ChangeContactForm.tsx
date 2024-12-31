import { useAppSelector } from "@/features/utils/hooks"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { IoIosContact } from "react-icons/io"
import AccountFormInput from "./AccountFormInput"
import Button from "./Button"
import ConfirmModal from "./ConfirmModal"


export type formValues = {
    newContact: string
}
function ChangeContactForm() {
    const {handleSubmit, register}= useForm<formValues>()
    const {revealConfirmModal} = useAppSelector(store=>store.nav)
    
    const onSubmit:SubmitHandler<formValues> = (data:formValues)=> console.log(data.newContact)
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <AccountFormInput icon={<IoIosContact/>} errMsg="Please enter new number" inputName='newContact' register={register} placeholder='Enter new phone number' type='tel' />
            <Button desc='Change number' submittable={false}/>
            {revealConfirmModal &&<ConfirmModal title="Change Contact" desc=" Are you sure you want to change Contact."/>}
        </form>
        
        </>
    )
}

export default ChangeContactForm
