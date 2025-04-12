import { useGallery } from "@/features/utils/hooks"
import HeaderDashboard from "../components/HeaderDashboard"
import FilterItem from "./FilterItem"
import MediaGallery from "./MediaGallery"
import { CiFilter } from "react-icons/ci"

function MediaLayout() {
  
  
  return (
    <div>
      <HeaderDashboard/>
      <div className="flex items-center mx-4 gap-2 ">
        <FilterItem/>
        <div className="border-2 p-2 rounded-sm hover:scale-105">

        <CiFilter className="size-4"/>
        </div>
      </div>
<MediaGallery/>
    </div>
  )
}

export default MediaLayout
