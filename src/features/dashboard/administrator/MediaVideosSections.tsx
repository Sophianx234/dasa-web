import { useGetVideos } from "@/features/utils/hooks"
import { videoRes } from "./MediaGallery"
import VideoPlayer from "@/features/ui/VideoPlayer"

function MediaVideosSection() {
    const {data:videosData} = useGetVideos()
  
  
  
    if(!videosData) return null
      return (
        
<div className="pt-8">

       { (videosData as videoRes).videos.map(video=><VideoPlayer key={video._id} id={video._id} control="admin" src={video.secure_url}/>)}
</div>
        
      )
    

  
}

export default MediaVideosSection
