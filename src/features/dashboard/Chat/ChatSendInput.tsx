import { sendMessage } from "@/features/slices/userSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { useForm } from "react-hook-form"
import { LuSendHorizonal } from "react-icons/lu"

function ChatSendInput() {
    const dispatch = useAppDispatch()
    const {handleSubmit,register,reset} = useForm()
    return (
        <form onSubmit={handleSubmit(data=>{

            dispatch(sendMessage(data.text))
            reset()
            })} className="flex py-3 text-white items-center space-x-2 z-40 justify-center  bg-dasalight">
              <input {...register('text')} type="text" placeholder="Type here" className="input input-bordered  max-w-xs" />
              <button>
      
              <LuSendHorizonal  className="hover:stroke-dasalight duration-150 transition-all size-9 stroke-slate-900 "/>
              </button>
              </form>
    )
}

export default ChatSendInput
