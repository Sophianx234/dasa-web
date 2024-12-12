import { AiFillLike } from "react-icons/ai";
import { BsEmojiLaughing, BsFillEmojiLaughingFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { useReactions } from "../services/hooks/reactionsHook";
import Reaction from "./Reaction";

function ReactionList() {
  const {isSmiling,isLoved,isLiked,handleToggleLike,handleToggleLove,handleToggleSmiling} = useReactions()
  
  return (
    <div className="space-y-3">
      <Reaction
        outline={<BsEmojiLaughing className="size-6    " />}
        fill={
          <BsFillEmojiLaughingFill className="size-6  fill-[#ffe066] self-end  " />
        }
        isSmiling={isSmiling}
        handleSmiling={handleToggleSmiling}
      />
      <Reaction
        outline={<SlLike className="size-6    " />}
        fill={<AiFillLike className="size-6  fill-[#339af0] self-end  " />}
        isLiked={isLiked}
        handleLiked={handleToggleLike}
        
      />

      <Reaction
        outline={<FaRegHeart className="size-6    mb-10" />}
        fill={<FaHeart className="size-6  fill-[#fa5252] self-end  mb-10" />}
        isLoved={isLoved}
        handleLoved={handleToggleLove}
       
      />
    </div>
  );
}

export default ReactionList;
