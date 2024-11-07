import { MdPersonOutline } from "react-icons/md"
import CTImages from "./CTImages"

function CTA() {
    const ctaImages = [
        "https://i.ibb.co/d2jtx5G/photo-7-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/YtfKtdq/photo-79-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/fHq4Nnv/photo-72-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg",
        "https://i.ibb.co/dGn3b9b/photo-56-2024-10-31-06-50-45.jpg"]
    return (
        <div className="">
            <div className="max-w-[15rem] mx-auto flex flex-col justify-center items-center space-y-2 pt-5">
                <div className="flex items-center -space-x-2">
                {ctaImages.map(image=><CTImages imageUrl = {image} key={image} />)}
                </div>
                <div className="space-y-1 pt-2">

                <h1 className="font-bold font-rethink text-center">Join <span className=" border-b-primary border-b-[3px]">5,482</span> other Members</h1>
                <p className="text-xs text-center px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus voluptatibus eligendi dignissimos pariatur!</p>
                <div className="  text-center flex justify-center  ">
                    <button className="bg-primary text-sm px-3 py-1 flex justify-center items-center rounded-full gap-1 "> <MdPersonOutline className="size-4" />Get innstant access</button>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default CTA
