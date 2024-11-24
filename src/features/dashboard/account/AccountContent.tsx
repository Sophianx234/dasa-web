import { IoIosArrowForward } from "react-icons/io"
import AccountContentItem from "./AccountContentItem"
import { VscSymbolColor } from "react-icons/vsc"
import { CiBellOn } from "react-icons/ci"
import { FaRegBell } from "react-icons/fa6"
import { GoBell, GoLock, GoUnlock } from "react-icons/go"
import { GiSmartphone } from "react-icons/gi"

function AccountContent() {
    return (
        <div className="mx-3 pt-6">
            <ul className="space-y-2 ">
                <h1 className="ml-2 font-Montserrat antialiased font-semibold text-lg">Preferences</h1>
                <div className=" shadow-md  px-4 rounded-md space-y-2 pt-3 pb-2">

                <AccountContentItem content="Change Password" icon={<GoLock className="size-5"/>}/>
                <AccountContentItem content="Change Phone Number" icon={<GiSmartphone className="size-5 "/>}/>
                
                <AccountContentItem content="Notification" type="toggle" icon={<GoBell className="size-5" />} />
                
                <AccountContentItem content="Theme" icon={<VscSymbolColor className="size-5"/>} type="toggle"/>
                
                </div>
                
                
                
            </ul>
        </div>
    )
}

export default AccountContent
