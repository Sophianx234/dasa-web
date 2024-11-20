import { CiMedicalMask } from "react-icons/ci";
import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6";
import { PiFaceMaskBold } from "react-icons/pi";
import ChatItem from "../components/ChatItem";
import ChatHeader from "../components/ChatHeader";
import ChatboxList from "../components/ChatboxList";

function WriteAnonymous() {
 
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/HH6pY83/chat-bg-1.jpg')] h-dvh flex flex-col   bg-cover bg-center relative  ">
        <div className="absolute inset-0 bg-[#fef3e7cb] overflow-y-scroll   ">
          
        </div>

            <ChatHeader/>
       

<ChatboxList/>


      </div>
    </div>
  );
}

export default WriteAnonymous;
