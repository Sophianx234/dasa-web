import { IoArrowBack, IoShareSocialOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"






function ProductDetail() {
    const navigate = useNavigate()
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
           
            </div>
        </div>
    )
}

export default ProductDetail
