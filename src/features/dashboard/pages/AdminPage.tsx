import { RadialChart } from "@/components/ui/RadialChart"
import HeaderDashboard from "../components/HeaderDashboard"
import { LineChartx } from "@/components/ui/LineChart"
import { BarChartx } from "@/components/ui/barchart"
import { IoFolderOpenSharp } from "react-icons/io5"
import ControlHeader from "../administrator/ControlHeader"

function AdminPage() {
  return (
    <div>
      <HeaderDashboard/>
    <div>
     <ControlHeader/>
    </div>
      <div className="mx-4 space-y-4">
      <RadialChart/>
      <LineChartx/>
      <BarChartx/>
      </div>
      
      
    </div>
  )
}


export default AdminPage
