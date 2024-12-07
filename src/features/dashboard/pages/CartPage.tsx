import { useState } from "react"
import ConfirmModal from "../account/ConfirmModal"
import CartItem from "../cart/CartItem"
import ProductNav from "../market/ProductNav"
import Checkbox from "../components/Checkbox"

function CartPage() {
    const [openModal,setOpenModal] = useState<boolean>(false)
    function handleModal(){
        setOpenModal(isOpen=>!isOpen)
    }
    return (
        <div className="bg-white">
            

            <ProductNav title="My Cart" type="simple"/>
            <div className="space-y-2 pt-4 overflow-y-scroll">
                
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
            <div className=" sticky -bottom-1 shadow-top   ">
                <div className=" py-3  px-3 bg-white flex justify-between  items-center gap-">

                <div className="flex items-center gap-2">
                <Checkbox/>
                    <span>Select All</span>
                </div>
                <div>
                    <h1 className="text-sm opacity-55 ">Total</h1>
                    <p className="font-bold">GH₵ 65.99</p>
                </div>
                <div onClick={handleModal} className="bg-dasadeep py-3 rounded-md hover-primary text-[#4c4132] font-bold px-5">
                    Checkout
                </div>
             </div>
            </div>
           {openModal && <ConfirmModal handleClose={handleModal} desc="Are you sure you want to proceed with checkout" title="Confirm Checkout"/>}
        </div>
    )
}

export default CartPage
