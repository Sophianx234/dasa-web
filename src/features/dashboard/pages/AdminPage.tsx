import { LineChartx } from "@/components/ui/LineChart"
import { RadialChart } from "@/components/ui/RadialChart"
import { BarChartx } from "@/components/ui/barchart"
import ControlHeader from "../administrator/ControlHeader"
import HeaderDashboard from "../components/HeaderDashboard"

function AdminPage() {
  return (
    <div>
      <HeaderDashboard/>
    <div>
      <h1 className="text-center text-xl font-semibold pb-4">
      Admin Dashboard
      </h1>
    </div>
      <div className="mx-4 space-y-4 pb-24">
      <RadialChart/>
      <LineChartx/>
      <BarChartx/>
      </div>
      <div className="fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] -bottom-1 left-0 right-0 flex items-center justify-center z-40 bg-white py-3 ">

     <ControlHeader/>
      </div>
      
    </div>
  )
}


export default AdminPage
