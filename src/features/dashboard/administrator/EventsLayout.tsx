import { IoAdd } from "react-icons/io5"
import HeaderDashboard from "../components/HeaderDashboard"
import ControlHeader from "./ControlHeader"
import EventsControlList from "./EventsControlList"
import ControlPageTitle from "./ControlPageTitle"
import EventScheduler from "./EventScheduler"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { toggleRevealEventScheduler } from "@/features/slices/navSlice"

function EventsLayout() {
  const {revealEventScheduler} = useAppSelector(store=>store.nav)
  const dispatch = useAppDispatch()
  
  
  return (
    <div className="relative">
      <HeaderDashboard/>
      <ControlPageTitle title="Events"/>
      <EventsControlList/>
    {revealEventScheduler&&<EventScheduler/>}
      <div className=" fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]  -bottom-1 left-0 right-0 bg-white py-4">
      <ControlHeader>
        <IoAdd onClick={()=>dispatch(toggleRevealEventScheduler())} className="size-10 rounded-full border-gray-700 stroke-slate-900 border-2 px-1 hover:scale-105"/>
      </ControlHeader>
      </div>
    </div>
  )
}

export default EventsLayout
