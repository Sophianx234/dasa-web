import AccountContent from "../account/AccountContent"
import AccountHeader from "../account/AccountHeader"
import AccountProfile from "../account/AccountProfile"
import AccountSupport from "../account/AccountSupport"

function AccountPage() {
    return (
        <div>
            <AccountHeader/>
            <AccountProfile/>
            <AccountContent/>
            <AccountSupport/>
        </div>
    )
}

export default AccountPage
