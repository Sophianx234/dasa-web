import { Table } from "@/components/ui/table"
import DemoPage from "./payment/page"
import NotificationItem from "./NotificationItem"
import { PaginationX } from "./Pagination"
import { TbClearAll } from "react-icons/tb"

function NotificationList() {
    return (
        <div className="bg-white">
            <div className=" pb-4 ">
            <div className="flex items-center justify-between mr-4">

            <h1 className="dash-title text-xl px-4  sticky bottom-0">Notifications</h1> 
            <p className="font-semibold flex items-center gap-2 bg-dasadeep  px-2 py-1 rounded-full border-2 transition-all duration-150 hover:bg-transparent hover:border-2 ">Clear <TbClearAll className="size-5"/></p>
            </div>
            </div>
            <div className="pb-4 space-y-2  ">

            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            </div>
            <PaginationX/>
        </div>
    )
}

export default NotificationList
