import { useAppSelector } from "@/features/utils/hooks"
import { GiSmartphone } from "react-icons/gi"
import { GoBell, GoLock } from "react-icons/go"
import { VscSymbolColor } from "react-icons/vsc"
import AccountContentItem from "./AccountContentItem"
import ChangeContactForm from "./ChangeContactForm"
import ChangePasswordForm from "./ChangePasswordForm"

function AccountContent() {
    const {isOpenChangePassword,showChangeContact} = useAppSelector(store=>store.nav)
    return (
        <div className="mx-3 pt-10">
            <ul className="space-y-2 ">
                <h1 className="ml-2 font-Montserrat antialiased font-semibold text-lg">Preferences</h1>
                <div className=" shadow-md  px-4 rounded-md space-y-2 pt-3 pb-2">

                <AccountContentItem content="Change Password" icon={<GoLock className="size-5"/>}/>
                {isOpenChangePassword &&<ChangePasswordForm/>}
                <AccountContentItem content="Change Phone Number" icon={<GiSmartphone className="size-5 "/>}/>
                {showChangeContact && <ChangeContactForm/>}
                
                

                
                <AccountContentItem content="Notification" type="toggle" icon={<GoBell className="size-5" />} />
                
                <AccountContentItem content="Theme" icon={<VscSymbolColor className="size-5"/>} type="toggle"/>
                
                </div>
                
                
                
            </ul>
        </div>
    )
}

export default AccountContent
