import { useGetVideos } from "@/features/utils/hooks"
import { videoRes } from "./MediaGallery"
import VideoPlayer from "@/features/ui/VideoPlayer"
import GallerySkeleton from "@/skeletons/GallerySkeleton"

function MediaVideosSection() {
    const {data,isLoading} = useGetVideos()
  
  
  
      return (
        
<div className="pt-8">

       { data&&(data as videoRes).videos.map(video=><VideoPlayer key={video._id} id={video._id} control="admin" src={video.secure_url}/>)}
       { isLoading &&<GallerySkeleton/>}
</div>
        
      )
    

  
}

export default MediaVideosSection
