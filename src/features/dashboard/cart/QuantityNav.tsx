import { useState } from "react"

function QuantityNav() {
    const [quantity,setQuantity] = useState<number>(0)
    function handleIncrease(){
        setQuantity(quantity=>quantity+1)
        
    }
    function handleDecrease(){
        if(quantity===0) return 
        setQuantity(quantity=>quantity-1)
    }
    return (
        <div className="space-x-3" >
        <button onClick={()=>handleDecrease()}  className="border p-2 py-0 rounded-lg font-bold text-[#ccad86] border-dasadeep">-</button>
        <span className="font-mulish font-medium">{quantity}</span>
        <button onClick={()=>handleIncrease()} className="border p-2 py-0 rounded-lg text-[#ccad86] font-bold border-dasadeep">+</button>
    </div>
    )
}

export default QuantityNav
