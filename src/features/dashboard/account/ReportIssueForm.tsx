import { SubmitHandler, useForm } from "react-hook-form"
import AccountFormInput from "./AccountFormInput"
import Button from "./Button"

export type reportIssueFormValues = {
    complaint: string,
    
}
function ReportIssueForm() {
    const {handleSubmit,register } = useForm<reportIssueFormValues>()
    const onSubmit:SubmitHandler<reportIssueFormValues> = (data:reportIssueFormValues)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >

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
