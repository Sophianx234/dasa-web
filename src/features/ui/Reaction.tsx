
import { ReactElement, useState } from "react"

export type reactionProps = {
    outline: ReactElement,
    fill: ReactElement
    isLiked?: boolean,
    setIsLiked?: React.Dispatch<React.SetStateAction<boolean>>;
    
}
function Reaction({outline,fill, isLiked, setIsLiked}: reactionProps) {
    
    return (
        <div>
            <button onClick={()=>{
                setIsLiked?.(isLiked=>!isLiked)
                

                }}>

{
    
    isLiked? 
    fill
    : outline
}
</button>
        </div>
    )
}

export default Reaction
