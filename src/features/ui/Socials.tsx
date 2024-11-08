import { BsInstagram } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook } from "react-icons/fi"
import { PiTelegramLogo } from "react-icons/pi"

function Socials() {
    return (
        <div className="flex   l items-center  gap-16 pt-2">

            <div className="gap-4 flex  items-center   pl-2">
            <FaXTwitter className="size-5 fill-gray-800"/>
            <FiFacebook className="size-5 stroke-gray-800"/>
            <BsInstagram className="size-5 fill-gray-800"/>
            <PiTelegramLogo className="size-5 fill-gray-800 "/>
            </div>
            
            </div>
    )
}

export default Socials
