import ProductNav from "../market/ProductNav"
import { BiPackage } from "react-icons/bi"
import EmptyList from "./EmptyList"

function OrderUser() {
    return (
        <div className="bg-white">
            <ProductNav type="simple" title="Your Order"/>
<div className="h-dvh flex justify-center  ">
    <div className="flex items-center space-y-10 flex-col">


            
          <EmptyList/>
            </div>
</div>
        </div>
    )
}

export default OrderUser
