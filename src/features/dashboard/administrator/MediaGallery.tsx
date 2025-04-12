import { useGallery } from "@/features/utils/hooks"
import ImageViewer from "../components/ImageViewer"
import { useState } from "react"
import { mediaType } from "@/services/apiServices"
type mediaI = {
  status:string,
  numImages:number,
  images: mediaType[]
}


function MediaGallery() {
  const {isLoading,data} = useGallery(0,100)
  
  
  return (
    <div className="pt-4">
      {data  && <ImageViewer type="control" images={(data as mediaI).images}/>}
    </div>
  
  )
}

export default MediaGallery
