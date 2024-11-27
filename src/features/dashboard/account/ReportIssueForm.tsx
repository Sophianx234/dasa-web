import { useForm } from "react-hook-form"
import AccountFormInput from "./AccountFormInput"
import Button from "./Button"

function ReportIssueForm() {
    const {register, formState: {errors}} = useForm()
    return (
        <form >

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
