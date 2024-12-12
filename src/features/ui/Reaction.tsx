import { ReactElement } from "react";

export type reactionProps = {
  outline: ReactElement;
  fill: ReactElement;
  isLiked?: boolean;
  isLoved: boolean;
  isSmiling: boolean;
  setIsLiked?: () => void;
  setIsLoved?: () => boolean;
  setIsSmiling?: () => boolean;
};
function Reaction({ outline, fill, isLiked, setIsLiked }: reactionProps) {
  return (
    <div>
      <button
        onClick={() => {
          setIsLiked?.((isLiked) => !isLiked);
        }}
      >
        {isLiked ? fill : outline}
      </button>
    </div>
  );
}

export default Reaction;
