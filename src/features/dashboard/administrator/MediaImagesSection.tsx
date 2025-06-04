import { useGallery } from "@/features/utils/hooks"
import ImageViewer from "../components/ImageViewer"
import { imagesI } from "./MediaGallery"
import GallerySkeleton from "@/skeletons/GallerySkeleton"

function MediaImagesSection() {
  const {data,isLoading} = useGallery()
  
      
      return (
        <div className="pt-8 ">

        {data &&<ImageViewer type="control" images={(data as imagesI).images}/>}
        {isLoading && <GallerySkeleton/>}
        </div>
        
    
  )
  
}

export default MediaImagesSection
