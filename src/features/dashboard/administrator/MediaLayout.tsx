import { CiFilter } from "react-icons/ci"
import HeaderDashboard from "../components/HeaderDashboard"
import FilterItem from "./FilterItem"
import MediaGallery from "./MediaGallery"
import { useAppSelector } from "@/features/utils/hooks"
import { useState } from "react"
import { IoAdd } from "react-icons/io5"
import DragZone from "../market/DragZone"
import { useDispatch } from "react-redux"
import { toggleUploadVideo } from "@/features/slices/navSlice"

function MediaLayout() {
  const {selectFilter,uploadVideo} = useAppSelector(store=>store.nav)
  const [activateFilter,setActivateFilter] = useState<boolean>(false)
  const dispatch = useDispatch()
  console.log('1yes',selectFilter)
  
  return (
    <div>
      <HeaderDashboard/>
      <div className="flex items-center justify-center  gap-2 ">
        <FilterItem/>
        <div className="border-2 p-2 rounded-sm hover:scale-105">

        <CiFilter onClick={()=>setActivateFilter(true)} className="size-4"/>
        </div>
      </div>
<MediaGallery filter={selectFilter} activateFilter={activateFilter}/>

<div className="fixed -bottom-1 left-0 right-0 flex items-center justify-center z-50 bg-white py-4 "><IoAdd onClick={()=>dispatch(toggleUploadVideo())} className="size-10 rounded-full border-gray-500 border-2 px-1 hover:scale-105"/></div>

{uploadVideo && <DragZone type={selectFilter}/>}
    </div>
  )
}

export default MediaLayout
