import { BsInstagram } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook } from "react-icons/fi"
import { PiTelegramLogo } from "react-icons/pi"
import ReactionList from "./ReactionList"
import SVGLite from "./SVGLite"
import { useEffect, useRef, useState } from "react"

export type videoPlayerProps = {
    src: string
} 
function VideoPlayer({src}:videoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true); // Load video when in view
          videoRef.current?.play(); // Play video automatically
        } else {
          videoRef.current?.pause(); // Pause video when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in view
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);
    
    return (
        
        <>
        <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3">
            <div className="flex   flex-col items-center  gap-16 pt-2">

            <div className="gap-4 flex flex-col items-center   pl-2">
            <FaXTwitter className="size-5 fill-[#ffd8a8] "/>
            <FiFacebook className="size-5 stroke-[#ffd8a8]"/>
            </div>
            <div className="pb-10 space-y-3">
            <PiTelegramLogo className="size-5 fill-[#ffd8a8] "/>
            <BsInstagram className="size-5 fill-[#ffd8a8]"/>
            </div>
            </div>

            {isVideoLoaded && (
          <video
            ref={videoRef}
            className="w-64 pb-10"
            src={src}
            controls
            muted
            loop
          ></video>
        )}
        

        <div className="flex">
            <div className="self-end">
                <ReactionList/>
            </div>
        </div>
        </div>
        <SVGLite type='lines'/>
        </>
    )
}

export default VideoPlayer
