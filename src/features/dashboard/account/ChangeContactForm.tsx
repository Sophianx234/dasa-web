import { useForm } from "react-hook-form"
import AccountFormInput from "./AccountFormInput"
import { IoIosContact } from "react-icons/io"
import Button from "./Button"
import ConfirmModal from "./ConfirmModal"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { toggleChangeContact, toggleRevealConfirmModal } from "@/features/slices/navSlice"

function ChangeContactForm() {
    const {handleSubmit,reset, register}= useForm()
    const {revealConfirmModal} = useAppSelector(store=>store.nav)
    const dispatch = useAppDispatch()
    function handleOnSubmit(data){
        console.log(data)
        dispatch(toggleRevealConfirmModal())
        reset()

    } 
    return (
        <>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <AccountFormInput icon={<IoIosContact/>} errMsg="Please enter new number" inputName="newContact" register={register} placeholder='Enter new phone number' type='tel' />
            <Button desc='Change number' submittable={false}/>
            {revealConfirmModal &&<ConfirmModal title="Change Contact" desc=" Are you sure you want to change Contact."/>}
        </form>
        
        </>
    )
}

export default ChangeContactForm
