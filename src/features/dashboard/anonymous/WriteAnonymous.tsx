import ChatHeader from "../chat/ChatHeader";
import ChatboxList from "../chat/ChatboxList";

function WriteAnonymous() {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/HH6pY83/chat-bg-1.jpg')] h-dvh flex flex-col   bg-cover bg-center relative  ">
        <div className="absolute inset-0 bg-[#fef3e7cb] overflow-y-scroll   "></div>

        <ChatHeader />

        <ChatboxList />
      </div>
    </div>
  );
}

export default WriteAnonymous;
