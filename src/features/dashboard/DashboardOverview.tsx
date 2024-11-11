import { GoBell } from "react-icons/go"
import { IoMenuOutline } from "react-icons/io5"
import AvatarComponent from "./AvatarComponent"
import HeaderDashboard from "./HeaderDashboard"
import Welcome from "./Welcome"

function DashboardOverview() {
    return (
        <div>
            <HeaderDashboard/>
            <Welcome/>
        </div>
    )
}

export default DashboardOverview
