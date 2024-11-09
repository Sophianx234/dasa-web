import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { useState } from "react"

function Reaction() {
    
    const [isLiked, setIsliked] = useState(false)
    return (
        <div>
            <button onClick={()=>setIsliked(liked=>!isLiked)}>

{
    
    isLiked? 
    <FaHeart   className="size-6  fill-[#fa5252] self-end  mb-10"/>
    :
    <FaRegHeart   className="size-6    mb-10"/>
}
</button>
        </div>
    )
}

export default Reaction
