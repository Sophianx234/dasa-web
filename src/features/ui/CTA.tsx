import { MdPersonOutline } from "react-icons/md"
import CTImages from "./CTImages"
import { Link } from "react-router-dom"

function CTA() {
    const ctaImages = [
        "https://i.ibb.co/d2jtx5G/photo-7-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/YtfKtdq/photo-79-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/fHq4Nnv/photo-72-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg",
        "https://i.ibb.co/dGn3b9b/photo-56-2024-10-31-06-50-45.jpg"]
    return (
        <div className="pb-32 pt-11 ">
            <div className="max-w-[15rem] mx-auto flex flex-col justify-center items-center space-y-2 pt-5">
                <div className="flex items-center -space-x-2">
                {ctaImages.map(image=><CTImages imageUrl = {image} key={image} />)}
                </div>
                <div className="space-y-1 pt-2">

                <h1 className="font-bold font-rethink text-center">Join <span className=" border-b-dasalight border-b-[3px]">5,482</span> other Members</h1>
                <p className="text-xs text-center px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus voluptatibus eligendi dignissimos pariatur!</p>
                <div className="  text-center flex justify-center  pt-2 ">
                    <Link to='signup' className="bg-dasalight text-sm px-3  flex justify-center items-center rounded-full gap-1  hover-primary py-3"> <MdPersonOutline className="size-4" />Get instant access</Link>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default CTA
