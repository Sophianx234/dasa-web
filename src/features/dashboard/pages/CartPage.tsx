import CartItem from "../cart/CartItem"
import ProductNav from "../market/ProductNav"

function CartPage() {
    return (
        <div className="bg-white">
            <div className="sticky -top-1  left-0 bg-white z-40 py-2 pb-3 right-0">

            <ProductNav title="My Cart" type="simple"/>
            </div>
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
                <input type="checkbox" defaultChecked className="appearance-none size-5  rounded-sm border border-dasadeep checked:bg-dasadeep checked:border-transparent focus:outline-none focus:ring-1 focus:ring-dasadeep  
             checked:before:content-['✓'] checked:before:text-white
             checked:before:text-sm checked:before:font-bold
             checked:before:font-Montserrat
             duration-150
             checked:before:flex checked:before:justify-center checked:before:items-center bg-white text-purple-200  " />
                    <span>Select All</span>
                </div>
                <div>
                    <h1 className="text-sm opacity-55 ">Total</h1>
                    <p className="font-bold">GH₵ 65.99</p>
                </div>
                <div className="bg-dasadeep py-3 rounded-md hover-primary text-[#4c4132] font-bold px-5">
                    Checkout
                </div>
             </div>
            </div>
        </div>
    )
}

export default CartPage
