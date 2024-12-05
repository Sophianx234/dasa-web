import { IoArrowBack, IoShareSocialOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SliderMain from "../components/SliderMain"
import { FaRegHeart } from "react-icons/fa6"
import { useState } from "react"
import ProductDescription from "./ProductDescription"
import { FaShoppingCart } from "react-icons/fa"
import ProductNav from "./ProductNav"






function ProductDetail() {
    const navigate = useNavigate()
    const imgs = ["https://i.ibb.co/5T0GmMy/sneaker-2.png","https://i.ibb.co/F7K9fjg/sneaker-3.png","https://i.ibb.co/L5Z1hNM/sneaker-4.png","https://i.ibb.co/PcPBVyC/sneaker-1.jpg"
        ]

      
    return (
        <div className="bg-white">
            <ProductNav title="Product Detail"/>
            <div >

            <div className="mx-8" >
                <SliderMain el={imgs}/>
            </div>
            <ProductDescription/>
            </div>
            <div className="flex shadow-top  items-center justify-center sticky bottom-0  py-4 gap-4 bg-white ">
                <div className="flex items-center border border-dasadeep p-3 px-5 rounded-lg text-dasadeep gap-2">
                <FaShoppingCart/><span> Add to Cart</span>
                </div>
                <div className="flex items-center border border-dasadeep bg-dasadeep p-3 px-5 rounded-lg text-white gap-2">
                    Checkout
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
