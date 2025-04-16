import { useGallery, useGetVideos } from "@/features/utils/hooks"
import { mediaType } from "@/services/apiServices"
import ImageViewer from "../components/ImageViewer"
import VideoPlayer from "@/features/ui/VideoPlayer"
import { videoI } from "@/features/ui/Activities"
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

  if(filter==='images')
  
  return (
    <div className="pt-4">
      {data  && <ImageViewer type="control" images={(data as imagesI).images}/>}
    </div>
  
  )
  else if(filter==='videos' && activateFilter)
  
  return (
    <div className="pt-4">
      {videosData  && (videosData as videoRes).videos.map(video=><VideoPlayer id={video._id} control="admin" src={video.secure_url}/>)}
    </div>
  
  )
}

export default MediaGallery
