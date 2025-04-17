import { useGallery, useGetVideos } from "@/features/utils/hooks"
import { mediaType } from "@/services/apiServices"
import ImageViewer from "../components/ImageViewer"
import VideoPlayer from "@/features/ui/VideoPlayer"
import { videoI } from "@/features/ui/Activities"
import { memo, useMemo } from "react"
type imagesI = {
  status:string,
  numImages:number,
  images: mediaType[]
}
type videoRes = {
  status:string,
  numImages:number,
  videos: videoI[]
}
type mediaGalleryI = {
  filter: 'images'|'videos'
  activateFilter: boolean
}


function MediaGallery({filter,activateFilter}:mediaGalleryI) {
  const {data} = useGallery( filter === 'images' )
  const {data:videosData} = useGetVideos(filter === 'videos')

  const imagesList = useMemo(()=>{
    if(!data) return null
    
    return (
      
      <ImageViewer type="control" images={(data as imagesI).images}/>
  
)
},[data]
);

const videoList = useMemo(()=>{
  if(!videosData) return null
    return (
      (videosData as videoRes).videos.map(video=><VideoPlayer id={video._id} control="admin" src={video.secure_url}/>)
  
)
},[videosData])


if(filter==='images')
return (
  <div className="pt-4">{imagesList}</div>
)


if(filter==='videos')
    
  return (
    <div className="pt-4">{videoList}</div>
  )
}

export default MediaGallery
