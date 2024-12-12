import { useState } from "react";

export function useReactions(){
    const [isLoved, setIsLoved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSmiling, setIsSmiling] = useState<boolean>(false);

  return {isLiked,setIsLiked,isLoved,setIsLoved,isSmiling,setIsSmiling}
}
