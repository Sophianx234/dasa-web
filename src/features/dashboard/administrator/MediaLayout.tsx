import { toggleRevealUploadProduct } from "@/features/slices/navSlice"
import { useAppSelector } from "@/features/utils/hooks"
import { useState } from "react"
import { CiFilter } from "react-icons/ci"
import { IoAdd } from "react-icons/io5"
import { useDispatch } from "react-redux"
import HeaderDashboard from "../components/HeaderDashboard"
import DragZone from "../market/DragZone"
import FilterItem from "./FilterItem"
import MediaGallery from "./MediaGallery"

function MediaLayout() {
  const {selectFilter,isOpenUploadProduct} = useAppSelector(store=>store.nav)
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

<div className="fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] -bottom-1 left-0 right-0 flex items-center justify-center z-50 bg-white py-3 "><IoAdd onClick={()=>dispatch(toggleRevealUploadProduct())} className="size-8 rounded-full border-gray-500 border-2 px-1 hover:scale-105"/></div>

{isOpenUploadProduct && <DragZone type={selectFilter}/>}
    </div>
  )
}

export default MediaLayout
