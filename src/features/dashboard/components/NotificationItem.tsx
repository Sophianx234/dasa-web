function NotificationItem() {
    return (
        <div>
            <div className="flex items-center border space-x-4 mx-4 py-4 rounded-md px-3 relative">
                <div className="bg-[#d3f9d8] rounded-full px-3 py-3">

                <img src="https://i.ibb.co/Mnn5KD5/profile-icon-x.png" alt="profile-icon-x" className="w-14"/>
                </div>
                <div>
                    <p className="font-semibold font-Montserrat">

                    Ryo wants to edit SupaUI <br />
                    Design System
                    </p>
                    <div className="flex justify-between font-mulish font-semibold">

                    <p>1hour.ago</p>
                    <p>Anonymous</p>
                    </div>
                </div>
                <div className="size-4 rounded-full bg-green-300 absolute right-2 top-1"></div>
            </div>
        </div>
    )
}

export default NotificationItem
