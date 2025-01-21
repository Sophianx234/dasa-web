import axios from "axios";
import SVGLite from "./SVGLite";
import VideoPlayer from "./VideoPlayer";
import { useQuery } from "@tanstack/react-query";
import { getVideos } from "@/services/apiServices";
import VideoSkeleton from "@/skeletons/VideoSkeleton";
interface videoI{
  
    format: string;
    public_id: string;
    secure_url: string;
    _id: string;
}

export type videosResponse = {
  numVideos: number;
  status: string;
  videos: videoI[]

};
function Activities() {
  const { isLoading, data } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });
  const {videos} = data as videosResponse

  
  /* 
      const slideImages = [
        {
          url: 'https://i.ibb.co/z4Qb9CJ/das-1.jpg',
          
        },
       
      ]; */
  return (
    <div className="py-10 pb-20 ">
      <h1 className="text-center font-bold font-rethink">
        Experience the Fun with Us
      </h1>
      <p className="text-center px-2 text-sm font-Poppins pt-1 pb-4">
        Join the Fun! Where Culture, Friendship, and Growth Come Alive
      </p>
      <div className="pt-2 flex justify-center flex-col ">
        <div>
          <SVGLite type="sticks" />
        </div>
        <div className=" w-full items-center space-y-6 flex flex-col pt-10">

          {videos.map((video:videoI)=><VideoPlayer src={video.secure_url} />)}
          
        </div>
        <p className="text-center text-sm font-chewy pt-10 ">
          Laughter, Community, and Lifelong <br /> Memories.
        </p>
      </div>
    </div>
  );
}

export default Activities;
