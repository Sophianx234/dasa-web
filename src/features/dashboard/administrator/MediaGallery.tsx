import { videoI } from "@/features/ui/Activities"
import VideoPlayer from "@/features/ui/VideoPlayer"
import { useGetVideos } from "@/features/utils/hooks"
import { mediaType } from "@/services/apiServices"
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


function MediaGallery() {
  
  const {data:videosData} = useGetVideos()



  if(!videosData) return null
    return (
      (videosData as videoRes).videos.map(video=><VideoPlayer id={video._id} control="admin" src={video.secure_url}/>)
  
)






}

export default MediaGallery
