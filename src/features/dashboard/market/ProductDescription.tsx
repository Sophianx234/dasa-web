import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6"
import Rating from "./Rating";

function ProductDescription() {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleReadMore(){
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="mx-4 pt-4  ">
                <div>
                    <div className="flex mt-4 justify-between items-center">

                    <h1 className="font-Montserrat font-bold">Ipad Pro 6th Generation 11 inch 2022</h1>
                    <FaRegHeart/>
                    </div>
                    <Rating/>
                    <div className="flex gap-4 items-center pt-2">
                        <span className="text-lg font-bold">
                        GH₵15.299
                        </span>
                        <p className="border px-3  rounded-full bg-red-100 text-red-600 font-semibold">6% off</p>

                    </div>
                    <p className="line-through opacity-70">GH₵55.00</p>

                </div>

                <div>
                    <h1 className="font-bold pt-6 pb-2 ">Product Description</h1>
                    <p className="text-sm "> {!isExpanded?'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit maiores placeat perferendis quas debitis voluptas nesciunt optio ipsam quidem, dolor distinctio? Aut, nemo distinctio!....':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore a debitis beatae? Illo possimus, deleniti incidunt quidem voluptas maiores quis magni soluta tempora nesciunt laudantium totam eaque excepturi accusamus debitis perspiciatis sunt veniam eveniet ab facilis mollitia odio aliquid? Enim.'} <span onClick={()=>setIsExpanded(expand=>!expand)} className="text-dasadeep">{isExpanded?'Read less':'Read more'}</span></p>
                    
                    
                </div>
            </div>
    )
}

export default ProductDescription
