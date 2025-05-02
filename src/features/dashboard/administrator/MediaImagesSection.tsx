import { useGallery } from "@/features/utils/hooks"
import ImageViewer from "../components/ImageViewer"
import { imagesI } from "./MediaGallery"

function MediaImagesSection() {
  const {data} = useGallery()
  
      if(!data) return null
      
      return (
        <div className="pt-8 ">

        <ImageViewer type="control" images={(data as imagesI).images}/>
        </div>
        
    
  )
  
}

export default MediaImagesSection
