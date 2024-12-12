import { ReactElement } from "react";

export type reactionProps = {
  outline: ReactElement;
  fill: ReactElement;
  isLiked?: boolean;
  isLoved?: boolean;
  isSmiling?: boolean;
  handleLiked?: () => void;
  handleLoved?: () => void;
  handleSmiling?: () => void;
};
function Reaction({ outline, fill, isLiked, isLoved,isSmiling,handleLiked,handleLoved,handleSmiling }: reactionProps) {
  function handleReaction(){
    if( handleLiked) handleLiked()
    if(handleLoved) handleLoved()
    if(handleSmiling) handleSmiling()
  }
  return (
    <div>
      <button
        onClick={() => {
          handleReaction()
        }}
      >
        {isLiked || isSmiling || isLoved ? fill : outline}
      </button>
    </div>
  );
}

export default Reaction;
