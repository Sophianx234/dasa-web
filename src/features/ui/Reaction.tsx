import { ReactElement } from "react";

export type reactionProps = {
  outline: ReactElement;
  fill: ReactElement;
  type: "like" | "smile" | "love";
  isLiked: boolean;
};
function Reaction({ isLiked, outline, fill, type }: reactionProps) {
  
  return (
    <div>
      {isLiked ? fill : outline}
    </div>
  );
}

export default Reaction;
