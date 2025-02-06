import WriteAnonymous from "../anonymous/WriteAnonymous";
import ChatboxList from "../chat/ChatboxList";
import ChatHeader from "../chat/ChatHeader";

function AnonymousMain() {
  return (
    <div>
      <WriteAnonymous>
        <ChatHeader title='Anonymous' />

        <ChatboxList type="channel" />
      </WriteAnonymous>
    </div>
  );
}

export default AnonymousMain;
