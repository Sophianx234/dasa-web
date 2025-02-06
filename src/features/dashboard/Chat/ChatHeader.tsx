import { toggleChatMenu } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";
type chatHeaderProps = {
  title?: string;
  user?: signupCredentialsExtended;
};
function ChatHeader({ title, user }: chatHeaderProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (!user)
    return (
      <div className="items-center  grid grid-cols-[1fr_2fr_1fr] justify-items-center border py-4 z-10 bg-white  sticky top-0  ">
        <FaArrowLeftLong className="size-7" onClick={() => navigate(-1)} />
        <div className="text-lg ">{title}</div>
        <FaMasksTheater
          className="size-8 hover:scale-105"
          onClick={() => dispatch(toggleChatMenu())}
        />
      </div>
    );
  else if (user) {
    return (
      <div className="items-center  grid grid-cols-[1fr_1.5fr_1fr] justify-items-center border py-4 z-10 bg-white  sticky top-0  ">
                <MdMenu className="size-10" 
                 onClick={() => dispatch(toggleChatMenu())} />
        <div className="text-lg font-bold ">{user.username}</div>

        <PhotoProvider>
          <PhotoView src={user.profileImage}>
            <img
              src={user.profileImage}
              className="object-cover object-top size-14 rounded-full"
              />
          </PhotoView>
        </PhotoProvider>
      </div>
    );
  }
}

export default ChatHeader;
