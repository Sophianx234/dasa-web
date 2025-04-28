import { notificationsType } from "@/features/slices/navSlice"
import { DateAnonymous } from "@/features/utils/helpers"

type notificationItemProps = {
    notify: notificationsType
} 
function NotificationItem({notify}:notificationItemProps) {
    const time = DateAnonymous(notify.createdAt)
    return (
        <div>
            <div className="flex items-center border pt-5 space-x-4 mx-4 py-4 rounded-xl px-3 relative ">
                <div className="bg-dasalight overflow-hidden rounded-full w-28">

                <img src={notify.notificationImg} alt="profile-icon-x" className="scale-150"/>
                </div>
                <div>
                    <p className="font-semibold font-Montserrat text-sm">

                    {notify.content} 
                    </p>
                    <div className="flex justify-between font-mulish font-semibold text-xs pt-2 pr-4">

                    <p>{time}</p>
                    <p>{notify.type}</p>
                    </div>
                </div>
                <div className={`size-3 rounded-full ${notify.type==='Event'?'bg-dasadeep':'bg-green-400'} absolute right-2 top-1`}></div>
            </div>
        </div>
    )
}

export default NotificationItem
