import { useSocket } from "@/context/SocketContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuSendHorizonal } from "react-icons/lu";
import { formValues } from "../account/ChangeContactForm";
type sendMessageFormValues = formValues & {
  message: string;
};
function ChatSendInput() {
  const socket = useSocket();
  const { handleSubmit, register, reset } = useForm<sendMessageFormValues>();

  const handleSendAnonymous: SubmitHandler<sendMessageFormValues> = (
    data: sendMessageFormValues
  ) => {
    console.log(data)
    
    socket?.emit("anonymous", { content: data.message }, (response:Response) => {
      console.log("Server response:", response); 
    });
    reset();
  }

    return (
      <form
        onSubmit={handleSubmit(handleSendAnonymous)}
        className="flex py-3 text-white items-center space-x-2 z-40 justify-center  bg-dasalight"
      >
        <input
          {...register("message")}
          type="text"
          placeholder="Type here"
          className="input input-bordered  max-w-xs"
        />
        <button>
          <LuSendHorizonal className="hover:stroke-dasadeep duration-150 transition-all size-9 stroke-slate-900 " />
        </button>
      </form>
    );
  };

export default ChatSendInput;
