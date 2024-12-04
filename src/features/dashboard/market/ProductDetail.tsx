import { IoArrowBack, IoShareSocialOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SliderMain from "../components/SliderMain"






function ProductDetail() {
    const navigate = useNavigate()
    const imgs = ["https://i.ibb.co/5T0GmMy/sneaker-2.png","https://i.ibb.co/F7K9fjg/sneaker-3.png","https://i.ibb.co/L5Z1hNM/sneaker-4.png","https://i.ibb.co/PcPBVyC/sneaker-1.jpg"
        ]
    return (
        <div>
            <div className="flex items-center justify-between px-3 pt-3">
            <div className="border p-2 rounded-full" onClick={()=>navigate(-1)}>

            <IoArrowBack className="size-5"/>
            </div>
                <span className="font-bold">Product Detail</span>
                <div className="border p-2 rounded-full">

                <IoShareSocialOutline className="size-5"/>
                </div>
            </div>
            <div>
                <SliderMain el={imgs}/>
            </div>
        </div>
    )
}

export default ProductDetail
