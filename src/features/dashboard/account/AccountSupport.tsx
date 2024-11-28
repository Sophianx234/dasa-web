import { BiError } from "react-icons/bi"
import AccountContentItem from "./AccountContentItem"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import ReportIssueForm from "./ReportIssueForm"
import Questions from "@/features/ui/Questions"
import { useAppSelector } from "@/features/utils/hooks"

function AccountSupport() {
    const {revealFaq, revealReportIssue} = useAppSelector(store=>store.nav)
    return (
        <div className="mx-3 pt-6">
            <h1 className="ml-2 font-Montserrat antialiased font-semibold text-lg">Support</h1>
            <div className=" shadow-md  px-4 rounded-md space-y-2 pt-3 pb-2">

            <AccountContentItem icon={<BiError className="size-5"/>} content="Report an issue"/>
           {revealReportIssue && <ReportIssueForm/>}
            
            <AccountContentItem icon={<AiOutlineQuestionCircle className="size-5"/>} content="FAQ"/>
            {
              revealFaq && <Questions/>  
            }
            </div>
        </div>
    )
}

export default AccountSupport
