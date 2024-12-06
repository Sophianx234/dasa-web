import { FaHeart, FaRegHeart } from "react-icons/fa6"
import QuantityNav from "./QuantityNav"
import { useState } from "react"

function CartItem() {
    const [love,setLove] = useState<boolean>(false)
    return (
        <div className="mx-2 " >
            <div className="grid grid-cols-[1fr_2fr] items-center border rounded-lg relative">
            

            <input type="checkbox" defaultChecked className="appearance-none size-5  rounded-sm border border-dasadeep checked:bg-dasadeep checked:border-transparent focus:outline-none focus:ring-1 focus:ring-dasadeep absolute top-2 left-2 
             checked:before:content-['✓'] checked:before:text-white
             checked:before:text-sm checked:before:font-bold
             checked:before:font-Montserrat
             duration-150
             checked:before:flex checked:before:justify-center checked:before:items-center bg-white text-purple-200  " />
            
            <img src="https://i.ibb.co/GdLN0zn/Luxury-watch-with-leather-wrist-band-isolated-on-transparent-background-PNG.png" alt="Luxury-watch-with-leather" />
                <div>
                    <h1 className="text-sm  font-bold font-mulish tracking-tighter opacity-60 text-gray-700">Apple Watch Ultra 2 with Ocean Band</h1>
                    <p className=" font-bold ">GH₵ 65.99</p>
                    <div className="flex items-center justify-between mr-4 pt-2 select-none" onClick={()=>setLove(love=>!love)} >{
                        love?
                <FaRegHeart className="size-5 opacity-55 "/>:
                <FaHeart className="size-5"/>}
               <QuantityNav/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem
