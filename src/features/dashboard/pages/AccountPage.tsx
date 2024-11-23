import AccountContent from "../account/AccountContent"
import AccountHeader from "../account/AccountHeader"
import AccountProfile from "../account/AccountProfile"

function AccountPage() {
    return (
        <div>
            <AccountHeader/>
            <AccountProfile/>
            <AccountContent/>
        </div>
    )
}

export default AccountPage
