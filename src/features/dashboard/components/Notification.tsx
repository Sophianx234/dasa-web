import { Table } from "@/components/ui/table"
import DemoPage from "./payment/page"
import NotificationItem from "./NotificationItem"
import { PaginationX } from "./Pagination"

function NotificationList() {
    return (
        <div className="bg-white">
            <h1 className="dash-title text-xl px-4 pb-4">Notifications</h1>
            <div className="pb-4">

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
