import { CiFilter } from "react-icons/ci"
import HeaderDashboard from "../components/HeaderDashboard"
import FilterItem from "./FilterItem"
import MediaGallery from "./MediaGallery"
import { useAppSelector } from "@/features/utils/hooks"
import { useState } from "react"

function MediaLayout() {
  const {selectFilter} = useAppSelector(store=>store.nav)
  const [activateFilter,setActivateFilter] = useState<boolean>(false)
  console.log('1yes',selectFilter)
  
  return (
    <div>
      <HeaderDashboard/>
      <div className="flex items-center mx-4 gap-2 ">
        <FilterItem/>
        <div className="border-2 p-2 rounded-sm hover:scale-105">

        <CiFilter onClick={()=>setActivateFilter(true)} className="size-4"/>
        </div>
      </div>
<MediaGallery filter={selectFilter} activateFilter={activateFilter}/>
    </div>
  )
}

export default MediaLayout
