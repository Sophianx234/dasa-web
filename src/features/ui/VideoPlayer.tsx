import { BsInstagram } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook } from "react-icons/fi"
import { PiTelegramLogo } from "react-icons/pi"
import SVGLite from "./SVGLite"

export type videoPlayerProps = {
    src: string
} 
function VideoPlayer({src}:videoPlayerProps) {
    return (
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

        <video className="w-64  pb-10" src={src} controls autoPlay muted loop></video>
        <div>

        <SVGLite type='lines'/>
        </div>
        </div>
    )
}

export default VideoPlayer
