import { FaRegHeart } from "react-icons/fa6"
import QuantityNav from "./QuantityNav"

function CartItem() {
    return (
        <div className="mx-2 " >
            <div className="grid grid-cols-[1fr_2fr] items-center border rounded-lg relative">
            
            <input type="checkbox" defaultChecked className="checkbox absolute top-2 left-2 checkbox-warning " />
            <img src="https://i.ibb.co/GdLN0zn/Luxury-watch-with-leather-wrist-band-isolated-on-transparent-background-PNG.png" alt="Luxury-watch-with-leather" />
                <div>
                    <h1 className="text-xs font-bold font-mulish tracking-tight opacity-60 text-gray-700">Apple Watch Ultra 2 with Ocean Band</h1>
                    <p className=" font-bold ">GH₵ 65.99</p>
                    <div className="flex items-center justify-between mr-6 pt-2" >
                <FaRegHeart/>
               <QuantityNav/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem
