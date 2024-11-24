import AccountContent from "../account/AccountContent"
import AccountHeader from "../account/AccountHeader"
import AccountProfile from "../account/AccountProfile"
import AccountSupport from "../account/AccountSupport"
import DeleteAccount from "../account/DeleteAccount"

function AccountPage() {
    return (
        <div className="bg-white">
            <AccountHeader/>
            <AccountProfile/>
            <AccountContent/>
            <AccountSupport/>
            <DeleteAccount/>
        </div>
    )
}

export default AccountPage
