import { useForm } from "react-hook-form"
import AccountFormInput from "./AccountFormInput"
import Button from "./Button"

function ReportIssueForm() {
    const {handleSubmit,reset,register, formState: {errors}} = useForm()
    function onSubmitIssue (data){
        console.log(data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmitIssue)} >

            <AccountFormInput
            register={register}
            inputName='complaint'
            errMsg='Please input issue'
            type='textarea'   />
            <Button desc="Submit"/>
            
        </form>
    )
}

export default ReportIssueForm
