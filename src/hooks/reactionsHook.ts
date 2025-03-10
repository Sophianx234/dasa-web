import { useState } from "react";

export function useReactions(){
    const [isLoved, setIsLoved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSmiling, setIsSmiling] = useState<boolean>(false);

  function handleToggleLove(){
    setIsLoved(love=>!love)

  }
  function handleToggleLike(){
    setIsLiked(like=>!like)

  }
  function handleToggleSmiling(){
    setIsSmiling(smile=>!smile)

  }

  return {isLiked,isLoved,isSmiling,handleToggleLike,handleToggleLove,handleToggleSmiling,setIsSmiling,setIsLiked,setIsLoved}
}

