import { useAppSelector } from "@/features/utils/hooks";
import WriteAnonymous from "../anonymous/WriteAnonymous";
import ChatboxList from "../chat/ChatboxList";
import ChatHeader from "../chat/ChatHeader";
import { signupCredentialsExtended } from "@/services/apiServices";

function AnonymousMain() {
  const {typingUsers,user,isTyping} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  const currentlyTypingUsers = typingUsers.filter(user=>user._id != userInfo._id).map(user=>user.anonymousName).map(name=>name.match(/[A-Z][a-z]*/g)?.[0])
  console.log('curr',typingUsers)
  return (
    <div className="relative">
      <WriteAnonymous>
        <ChatHeader type="channel" title='Anonymous' />
        <div className="absolute inset-x-0  z-50 top-16">

        { currentlyTypingUsers.length && isTyping  ? <div className="bg-white  px-3 text-center font-medium py-3 text-sm font-mulish shadow-2xl  ">
        <span className="font-bold">{ currentlyTypingUsers.join(',') }</span> typing... 
        </div>:null}
        </div>

        <ChatboxList type="channel" />
      </WriteAnonymous>
    </div>
  );
}

export default AnonymousMain;
