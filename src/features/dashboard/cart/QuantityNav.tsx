import { useState } from "react"

function QuantityNav() {
    const [quantity,setQuantity] = useState<number>(0)
    function handleIncrease(){
        setQuantity(quantity=>quantity+1)
        
    }
    function handleDecrease(){
        setQuantity(quantity=>quantity-1)
    }
    return (
        <div className="space-x-3" >
        <button onClick={()=>handleDecrease()}  className="border p-2 py-0 rounded-lg">-</button>
        <span>{quantity}</span>
        <button onClick={()=>handleIncrease()} className="border p-2 py-0 rounded-lg">+</button>
    </div>
    )
}

export default QuantityNav
