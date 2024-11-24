import { BiError } from "react-icons/bi"
import AccountContentItem from "./AccountContentItem"

function AccountSupport() {
    return (
        <div>
            <h1 className="ml-2 font-poppins antialiased">Support</h1>
            <AccountContentItem icon={<BiError className="size-5"/>} content="Report an issue"/>
        </div>
    )
}

export default AccountSupport
