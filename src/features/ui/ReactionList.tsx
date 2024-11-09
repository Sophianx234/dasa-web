import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Reaction from "./Reaction";
import { BsEmojiLaughing, BsFillEmojiLaughingFill } from "react-icons/bs";
import { AiFillHeart, AiFillLike } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { useState } from "react";

function ReactionList() {
  const [isLoved, setIsLoved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSmiling, setIsSmiling] = useState<boolean>(false);
  return (
    <div className="space-y-3">
      <Reaction
        outline={<BsEmojiLaughing className="size-6    " />}
        fill={
          <BsFillEmojiLaughingFill className="size-6  fill-[#ffe066] self-end  " />
        }
        isLiked={isSmiling}
        setIsLiked={setIsSmiling}
        setIsLoved={setIsLoved}
        setIsSmiling={setIsSmiling}
      />
      <Reaction
        outline={<SlLike className="size-6    " />}
        fill={<AiFillLike className="size-6  fill-[#339af0] self-end  " />}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        setIsLoved={setIsLoved}
        setIsSmiling={setIsSmiling}
      />

      <Reaction
        outline={<FaRegHeart className="size-6    mb-10" />}
        fill={<FaHeart className="size-6  fill-[#fa5252] self-end  mb-10" />}
        isLiked={isLoved}
        setIsLiked={setIsLoved}
        setIsLoved={setIsLoved}
        setIsSmiling={setIsSmiling}
      />
    </div>
  );
}

export default ReactionList;
