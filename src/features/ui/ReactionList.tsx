import { Lightbulb, LightbulbOff } from "lucide-react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsEmojiLaughing, BsFillEmojiLaughingFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import store from "store";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import Reaction from "./Reaction";
import { toggleTurnOffLight } from "../slices/navSlice";

function ReactionList() {
  const [activeReaction,setActiveReaction] = useState<string|null>(null)
  // const [isOn, setIsOn] = useState(false)
  const dispatch = useAppDispatch()

// Inside your ReactionList component
const turnOffLight = useAppSelector((state) => state.nav.turnOffLight);
  function handleReaction(type:string){
    setActiveReaction(reaction=>reaction === type? null: type )
    console.log(activeReaction)

    
    
  }
  return (
    <div className="space-y-3  h-fit mb-10 pt-10 px-2 rounded-md">
      

{!turnOffLight ? <Lightbulb onClick={()=>dispatch(toggleTurnOffLight(true))} className={`size-6  ${turnOffLight ? 'text-white' : 'text-black'}`} />:<LightbulbOff onClick={()=>dispatch(toggleTurnOffLight(false))} className={`size-6  ${turnOffLight ? 'text-white' : 'text-white'}`} />}
      <button  onClick={()=>handleReaction('smile')}>
      <Reaction
        isLiked={activeReaction === 'smile'}
        type="smile"
        outline={<BsEmojiLaughing className={`size-6  ${turnOffLight ? 'text-white' : 'text-black'}`} />}
        fill={
          <BsFillEmojiLaughingFill className={`size-6 ${turnOffLight ? 'text-white' : 'text-dasadeep sm:text-white'}  fill-[#ffe066] self-end  `} />
        }
        />
        </button>
        <button onClick={()=>handleReaction('like')}>

      <Reaction
      isLiked={activeReaction === 'like'}
      type="like"
      outline={<SlLike className={`size-6  ${turnOffLight ? 'text-white' : 'text-black'}`} />}
      fill={<AiFillLike className="size-6  fill-[#339af0] self-end  " />}
      
      />
      </button>
      <button onClick={()=>handleReaction('love')}>
      

      <Reaction
      isLiked={activeReaction === 'love'}
      type="love"
      outline={<FaRegHeart className={`size-6  mb-10 ${turnOffLight ? 'text-white' : 'text-black'}`}    />}
      fill={<FaHeart className="size-6  fill-[#fa5252] self-end mb-10  " />}
      
      />
      </button>
    </div>
  );
}

export default ReactionList;
