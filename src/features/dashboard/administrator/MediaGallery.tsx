import { useGallery, useGetVideos } from "@/features/utils/hooks"
import { mediaType } from "@/services/apiServices"
import ImageViewer from "../components/ImageViewer"
import VideoPlayer from "@/features/ui/VideoPlayer"
import { videoI } from "@/features/ui/Activities"
import { memo, useMemo } from "react"
export type imagesI = {
  status:string,
  numImages:number,
  images: mediaType[]
}
export type videoRes = {
  status:string,
  numImages:number,
  videos: videoI[]
}
export type mediaGalleryI = {
  filter: 'images'|'videos'
  activateFilter: boolean
}


function MediaGallery({filter}:mediaGalleryI) {
  
  const {data:videosData} = useGetVideos()



  if(!videosData) return null
    return (
      (videosData as videoRes).videos.map(video=><VideoPlayer id={video._id} control="admin" src={video.secure_url}/>)
  
)






if(filter==='videos')
    
  return (
    <div className="pt-4">{videoList}</div>
  )
}

export default MediaGallery
