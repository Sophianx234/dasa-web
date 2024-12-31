import { FaMasksTheater } from "react-icons/fa6";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";
import AnonymousMenuItem from "./AnonymousMenuItem";

function AnonymousSection() {
  return (
    <div className="mx-5 space-y-4">
      <AnonymousMenuItem
        link="write"
        title="Write Anonymous "
        icon={<TbMessageChatbotFilled className="size-8 fill-dasadeep" />}
      />
      <AnonymousMenuItem
        link="view"
        title="View Anonymous "
        icon={<FaMasksTheater className="size-8 fill-dasadeep" />}
      />
      <AnonymousMenuItem
        link="conversation"
        title="Text A Member "
        icon={<IoChatboxEllipsesSharp className="size-8 fill-dasadeep" />}
      />
    </div>
  );
}

export default AnonymousSection;
