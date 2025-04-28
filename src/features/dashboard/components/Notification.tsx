import Footer from "@/features/ui/Footer"
import { TbClearAll } from "react-icons/tb"
import NotificationItem from "./NotificationItem"
import { PaginationX } from "./Pagination"
import { useAppDispatch, useGetNotifications } from "@/features/utils/hooks"
import { notificationsType } from "@/features/slices/navSlice"
import { DateAnonymous } from "@/features/utils/helpers"

type notificationsResponse = {
    notifications: notificationsType[]
}
function NotificationList() {
    
    const {isLoading,data} = useGetNotifications()
    const dispatch = useAppDispatch()
    if(isLoading) return <>loading</>
    console.log(data)
    if(data){
        const {notifications} = data as notificationsResponse
        

        return (
            <div className="bg-white">
            <div className=" pb-4 ">
                <div className=" ">
                

            <div className="flex items-center justify-between mr-4 ">

            <h1 className="dash-title text-xl px-4  ">Notifications</h1> 
            <p className="font-semibold flex items-center gap-2 bg-dasadeep  px-2 py-1 rounded-full border-2 transition-all duration-150 hover:bg-transparent hover:border-2 " onClick={()=>dispatch(loadNotifications)} >Clear <TbClearAll className="size-5"/></p>
            </div>
            </div>
            </div>
            <div className="pb-4 pt-6 space-y-2  ">
{notifications && notifications.map(notification=><NotificationItem notify={notification} key={notification._id} />)}

            
            
            </div>
            <div className="pt-6">

            <Footer navType="dash"/>
            </div>
        </div>
    )
}
}

export default NotificationList
