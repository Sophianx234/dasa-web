import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook } from "react-icons/fi"

export type videoPlayerProps = {
    src: string
} 
function VideoPlayer({src}:videoPlayerProps) {
    return (
        <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3">
            <div className="gap-4 flex flex-col items-center ">
            <FaXTwitter className="size-6 "/>
            <FiFacebook className="size-6"/>
            </div>

        <video className="w-64  pb-10" src={src} controls autoPlay muted loop></video>
        <div>

        </div>
        </div>
    )
}

export default VideoPlayer
