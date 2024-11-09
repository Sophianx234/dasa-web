import { FaArrowRight } from "react-icons/fa6"

/* < src="https://i.ibb.co/0cXhh8Q/photo-43-2024-10-31-06-51-41.jpg"> */
function CTAFooter() {
    return (
        <div>
<div>

</div>
        <div className="bg-gradient-to-t from-[#33312eef] relative mix-blend-darken text-center  ">
            <img src="https://i.ibb.co/hH6qRBM/photo-31-2024-10-31-06-51-41.jpg" alt="" className="max-w-screen object-contain mix-blend-color-burn" />
            <div className="absolute -translate-y-52 grid grid-cols-1">
                <div className="grid grid-cols-1 space-y-1">
                    <h1 className="font-bold text-xl text-[#fef4e9]">Be Apart Of the Association</h1>
                    <p className="text-dasalight text-xs font-poppins px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis voluptatum nihil molestias ex ullam quae provident soluta libero adipisci!</p>
                </div>
<div className="flex justify-center pt-4  w-32 mx-auto ">

            <input type="email" className="absolute  z-2 py-1 pl-6 max-w-72 w-72  px-4  " placeholder="damian" />
            <button className="bg-dasalight absolute translate-x-[75%] px-3  border-0 flex gap-1 font-semibold py-1 items-center  text-[#66615c]">Ti Chama <FaArrowRight/>
            </button>
</div>
            </div>
        </div>
        </div>
    )
}

export default CTAFooter
