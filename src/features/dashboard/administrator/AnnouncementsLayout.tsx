import { IoAdd } from "react-icons/io5"
import AnnouncementList from "../announcement/AnnouncementList"
import HeaderDashboard from "../components/HeaderDashboard"
import ControlHeader from "./ControlHeader"
import ControlPageTitle from "./ControlPageTitle"
import AnnouncementForm from "./AnnouncementForm"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { toggleRevealAnnouncementForm } from "@/features/slices/navSlice"

function AnnouncementsLayout() {
  const {revealCreateAnnouncementForm} = useAppSelector(store=>store.nav)
  const dispatch = useAppDispatch()

  return (
    <div>
      <HeaderDashboard/>
      <div className=" pb-32">
      <ControlPageTitle title="Announcements"/>
      <AnnouncementList type="admin"/>
      </div>
        {revealCreateAnnouncementForm && <AnnouncementForm/>}
      <div className="fixed bg-white -bottom-1 left-0 right-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-3 pt-4">

      <ControlHeader>
        <IoAdd onClick={()=>dispatch(toggleRevealAnnouncementForm())} className="size-10 rounded-full border-gray-700 stroke-slate-900 border-2 px-1 hover:scale-105"/>
      </ControlHeader>
      </div>
    </div>
  )
}

export default AnnouncementsLayout
