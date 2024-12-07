import { FaBoxOpen } from "react-icons/fa6"
import ProductNav from "../market/ProductNav"
import { BiPackage } from "react-icons/bi"
import DragZone from "../market/DragZone"

function OrderUser() {
    return (
        <div className="bg-white">
            <ProductNav type="simple" title="Your Order"/>
<div className="h-dvh flex justify-center  ">
    <div className="flex items-center space-y-10 flex-col">


            
            <div className="pt-36">
                <div className="flex flex-col items-center">

                <BiPackage className="size-24"/>
            <p className="font-semibold text-gray-600">empty</p>
                </div>
            <DragZone/>
    </div>
            </div>
</div>
        </div>
    )
}

export default OrderUser
