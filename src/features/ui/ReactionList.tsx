import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsEmojiLaughing, BsFillEmojiLaughingFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import Reaction from "./Reaction";

function ReactionList() {
  const [activeReaction,setActiveReaction] = useState<string|null>(null)
  function handleReaction(type:string){
    setActiveReaction(reaction=>reaction === type? null: type )
    console.log(activeReaction)
    
    
  }
  return (
    <div className="space-y-3  h-fit mb-10 pt-10 px-2 rounded-md">
      <button  onClick={()=>handleReaction('smile')}>

      <Reaction
        isLiked={activeReaction === 'smile'}
        type="smile"
        outline={<BsEmojiLaughing className="size-6    " />}
        fill={
          <BsFillEmojiLaughingFill className="size-6  fill-[#ffe066] self-end  " />
        }
        />
        </button>
        <button onClick={()=>handleReaction('like')}>

      <Reaction
      isLiked={activeReaction === 'like'}
      type="like"
      outline={<SlLike className="size-6    " />}
      fill={<AiFillLike className="size-6  fill-[#339af0] self-end  " />}
      
      />
      </button>
      <button onClick={()=>handleReaction('love')}>
      

      <Reaction
      isLiked={activeReaction === 'love'}
      type="love"
      outline={<FaRegHeart className="size-6    mb-10" />}
      fill={<FaHeart className="size-6  fill-[#fa5252] self-end mb-10  " />}
      
      />
      </button>
    </div>
  );
}

export default ReactionList;
