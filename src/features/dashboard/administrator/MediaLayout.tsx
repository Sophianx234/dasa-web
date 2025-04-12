import { useGallery } from "@/features/utils/hooks"
import HeaderDashboard from "../components/HeaderDashboard"
import FilterItem from "./FilterItem"
import MediaGallery from "./MediaGallery"

function MediaLayout() {
  
  
  return (
    <div>
      <HeaderDashboard/>
      <div className="flex items-center justify-center gap-2">
        <FilterItem/>
        <FilterItem type='limit'/>
      </div>
<MediaGallery/>
    </div>
  )
}

export default MediaLayout
