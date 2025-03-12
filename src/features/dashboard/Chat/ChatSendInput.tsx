import { useSocket } from "@/context/SocketContext";
import { toggleOpenEmojiMart } from "@/features/slices/navSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { useChatType } from "@/hooks/useChat";
import { signupCredentialsExtended } from "@/services/apiServices";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEmojiGrin, BsSend } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import { useParams } from "react-router-dom";
import { formValues } from "../account/ChangeContactForm";
export type sendMessageFormValues = formValues & {
  message: string;
};

function ChatSendInput({ type, hookForm }: useChatType) {
  // const [emoji,setEmoji] = useState<string|null>('')
  const dispatch = useAppDispatch();
  const socket = useSocket();
  const { register, reset, handleSubmit } = useForm<sendMessageFormValues>();

  const { user } = useAppSelector((store) => store.nav);
  const { id: recipientId } = useParams();

  const handleSendAnonymous: SubmitHandler<sendMessageFormValues> = (
    data: sendMessageFormValues
  ) => {
    console.log(data);

    const userInfo = user as signupCredentialsExtended;
    console.log("loggedInUserID:", userInfo._id);

    if (!data.message) return;
    if (type === "channel"){

      socket?.emit(
        "anonymous",
        { content: data.message, userId: userInfo?._id },
        (response: Response) => {
          console.log("Server response Y:", response);
        }
      );
      console.log('testXXX')
    }
    if (type === "direct"){

      socket?.emit(
        "message",
        { content: data.message, userId: userInfo?._id, recipientId },
        (response: Response) => {
          console.log("Server response X :", response);
        }
      );
    }

    if (hookForm) hookForm?.reset();
    else reset();
  };

  return (
    <>
      <form
        onSubmit={hookForm? hookForm?.handleSubmit(handleSendAnonymous):handleSubmit(handleSendAnonymous)}
        className="flex py-3  items-center space-x-2 z-40 justify-center   text-black "
      >
        <label className="flex relative w-screen  items-center ">
          <input
            {...(hookForm?.register("message") || { ...register("message") })}
            type="text"
            placeholder="Type here"
            className="input mx-4 w-full      "
          />
          <div className="flex space-x-1 items-center right-[2%] pr-4 absolute">
            <BsEmojiGrin onClick={() => dispatch(toggleOpenEmojiMart(true))} />
            <IoMdAttach />
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
