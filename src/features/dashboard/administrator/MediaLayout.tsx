import { toggleRevealUploadProduct } from "@/features/slices/navSlice"
import { useAppSelector } from "@/features/utils/hooks"
import { useState } from "react"
import { IoAdd } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import HeaderDashboard from "../components/HeaderDashboard"
import DragZone from "../market/DragZone"
import ControlHeader from "./ControlHeader"

function MediaLayout() {
  const {selectFilter,isOpenUploadProduct} = useAppSelector(store=>store.nav)
  const [filter,setFilter] = useState<'images'|'videos'>('images')
  const dispatch = useDispatch()
  
  return (
    <div>
      <HeaderDashboard/>

      <div className="flex items-center justify-center  gap-2 ">
        <Link to='images' onClick={()=>setFilter('images')} className={` font-mulish font-semibold border px-3 py-2 rounded-full ${filter==='images'&&'bg-dasadeep'}`}>Images</Link>
        <Link  to='videos' onClick={()=>setFilter('videos')} className={`font-mulish font-semibold border px-3 py-2 rounded-full ${filter==='videos'&&'bg-dasadeep'}`}>Videos</Link>
        
      </div>
      <Outlet/> 


<div className="fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] -bottom-1 left-0 right-0 flex items-center justify-center z-50 bg-white py-3 ">
  <ControlHeader>

  <IoAdd onClick={()=>dispatch(toggleRevealUploadProduct())} className="size-10 rounded-full border-gray-700 stroke-slate-900 border-2 px-1 hover:scale-105"/>
  </ControlHeader>

  </div>

{isOpenUploadProduct && <DragZone type={selectFilter}/>}
    </div>
  )
}

export default MediaLayout
