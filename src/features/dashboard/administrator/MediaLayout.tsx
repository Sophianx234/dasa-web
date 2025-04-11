import { useGallery } from "@/features/utils/hooks"
import HeaderDashboard from "../components/HeaderDashboard"
import FilterItem from "./FilterItem"

function MediaLayout() {
  
  const {isLoading,data} = useGallery(0,600)
  if(data){
    console.log('data',data)
  }
  return (
    <div>
      <HeaderDashboard/>
      <div className="flex items-center justify-center gap-2">
        <FilterItem/>
        <FilterItem type='limit'/>
      </div>
    </div>
  )
}

export default MediaLayout
