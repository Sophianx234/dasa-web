import { useSocket } from "@/context/SocketContext";
import {
  setIsOpenAttachFile,
  toggleIsOpenAttachFile,
  toggleOpenEmojiMart,
} from "@/features/slices/navSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { useChatType } from "@/hooks/useChat";
import { signupCredentialsExtended } from "@/services/apiServices";
import { useEffect, useRef } from "react";
import { SubmitHandler } from "react-hook-form";
import { BsEmojiGrin, BsSend } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import { useParams } from "react-router-dom";
import { formValues } from "../account/ChangeContactForm";
import AttachFile from "./AttachFile";
export type sendMessageFormValues = formValues & {
  message: string;
};

function ChatSendInput({ type, hookForm }: useChatType) {
  // const [emoji,setEmoji] = useState<string|null>('')
  const dispatch = useAppDispatch();
  const socket = useSocket();
  const { isOpenAttachFile,user} = useAppSelector((store) => store.nav);
  const attachFileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        attachFileRef.current &&
        !attachFileRef.current.contains(event?.target as Node)
      ) {
        dispatch(setIsOpenAttachFile(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // const { register, reset, handleSubmit } = useForm<sendMessageFormValues>();
  const { id: recipientId } = useParams();
  const userInfo = user as signupCredentialsExtended;

  const handleSendAnonymous: SubmitHandler<sendMessageFormValues> = (
    data: sendMessageFormValues
  ) => {

    if (!data.message) return;
    if (!socket) {
      return;
    }
    if (type === "channel") {
      socket?.emit(
        "anonymous",
        { content: data.message, userId: userInfo?._id },
        (response: Response) => {
          console.log("Server response Y:", response);
        }
      );
    }
    if (type === "direct") {
      socket?.emit(
        "message",
        { content: data.message, userId: userInfo?._id, recipientId },
        (response: Response) => {
          console.log("Server response X :", response);
        }
      );
    }

    hookForm?.reset();
  };

  return (
    <>
      <form
        onSubmit={hookForm?.handleSubmit(handleSendAnonymous)}
        className="flex py-2  items-center space-x-2   justify-center relative -z-1   text-black "
      >
        {isOpenAttachFile && <AttachFile type={type} attachFileRef={attachFileRef}  />}
        <label className="flex  w-screen    z-40 items-center justify-center ">
          <textarea
            {...hookForm?.register("message")}
            placeholder="Type here"
            className="  h-12 pt-[.86rem]  rounded-md   mx-4 focus:outline-none w-full resize-none overflow-hidden pr-20 tracking-tight leading-5 text-sm pl-2    "
            onChange={()=>socket?.emit('typing',{
              userInfo,recipientId,type
            })}
          ></textarea>
          <div className="flex space-x-1 items-center right-[2%] pr-4 absolute ">
            <BsEmojiGrin
              className="size-5"
              onClick={() => dispatch(toggleOpenEmojiMart())}
            />
            <div>
              <IoMdAttach
                className="size-5"
                onClick={() => dispatch(toggleIsOpenAttachFile())}
              />
            </div>
            <button className="bg-dasadeep p-2 rounded-full">
              <BsSend className="hover:stroke-white duration-150 transition-all size-4 stroke-slate-900 " />
            </button>
          </div>
        </label>
      </form>
    </>
  );
}

export default ChatSendInput;
