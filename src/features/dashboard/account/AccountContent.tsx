function AccountContent() {
    return (
        <div className="mx-6">
            <ul>
                <h1>Preferences</h1>
                <li>
                    Change password
                </li>
                <li className="flex items-center justify-between">
                    Theme <input type="checkbox" className=" indeterminate:bg-white toggle" defaultChecked />
                </li>
            </ul>
        </div>
    )
}

export default AccountContent
