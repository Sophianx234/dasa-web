import { ReactElement } from "react";
import { useReactions } from "../services/hooks/reactionsHook";

export type reactionProps = {
  outline: ReactElement;
  fill: ReactElement;
  type: 'like'|'smile'|'love'
};
function Reaction({ outline, fill,type}: reactionProps) {
  const {isSmiling,isLoved,isLiked,setIsSmiling,setIsLiked,setIsLoved} = useReactions()
  function handleReaction(e){
    console.log(e)
    if(type === 'smile'){
      setIsSmiling(smile=>!smile)
      setIsLiked?.(false)
      setIsLoved?.(false)
    }
    if(type === 'love'){
      
      setIsLoved(love=>!love)
      setIsSmiling?.(false)
      setIsLiked?.(false)
    }
    if(type === 'like'){
      
      setIsLiked(like=>!like)
      setIsSmiling?.(false)
      setIsLoved?.(false)
    }
   
  }
  return (
    <div>
      <button
        onClick={handleReaction}
      >
        {isLiked || isSmiling || isLoved ? fill : outline}
      </button>
    </div>
  );
}

export default Reaction;
