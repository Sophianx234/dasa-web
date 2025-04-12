import { useDeleteImage, useGallery } from "@/features/utils/hooks"
import { mediaType } from "@/services/apiServices"
import ImageViewer from "../components/ImageViewer"
type mediaI = {
  status:string,
  numImages:number,
  images: mediaType[]
}


function MediaGallery() {
  const {data} = useGallery()
  
  
  
  
  return (
    <div className="pt-4">
      {data  && <ImageViewer type="control" images={(data as mediaI).images}/>}
    </div>
  
  )
}

export default MediaGallery
