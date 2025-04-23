import { IoAdd } from "react-icons/io5"
import AnnouncementList from "../announcement/AnnouncementList"
import HeaderDashboard from "../components/HeaderDashboard"
import ControlHeader from "./ControlHeader"

function AnnouncementsLayout() {
  return (
    <div>
      <HeaderDashboard/>
      <div className=" pb-32">

      <AnnouncementList type="admin"/>
      </div>
      <div className="fixed bg-white -bottom-1 left-0 right-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-3 pt-4">

      <ControlHeader>
        <IoAdd onClick={()=>console.log('bor')} className="size-10 rounded-full border-gray-700 stroke-slate-900 border-2 px-1 hover:scale-105"/>
      </ControlHeader>
      </div>
    </div>
  )
}

export default AnnouncementsLayout
