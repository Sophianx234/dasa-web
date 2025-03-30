import { useAppSelector } from "@/features/utils/hooks";
import WriteAnonymous from "../anonymous/WriteAnonymous";
import ChatboxList from "../chat/ChatboxList";
import ChatHeader from "../chat/ChatHeader";

function AnonymousMain() {
  const {typingUsers} = useAppSelector(store=>store.nav)
  const currentlyTypingUsers = typingUsers.map(user=>user.anonymousName).map(name=>name.match(/[A-Z][a-z]*/g)?.[0])
  const displayedNames = currentlyTypingUsers.slice(0,3)
  console.log('tp',typingUsers)
  return (
    <div>
      <WriteAnonymous>
        <ChatHeader title='Anonymous' />
        { typingUsers.length && <div className="bg-white z-50 px-3 text-center font-medium py-3 text-sm font-mulish shadow-2xl relative -top-2">
        <span className="font-bold">{ currentlyTypingUsers.join(',') }</span> typing 
        </div>}

        <ChatboxList type="channel" />
      </WriteAnonymous>
    </div>
  );
}

export default AnonymousMain;
