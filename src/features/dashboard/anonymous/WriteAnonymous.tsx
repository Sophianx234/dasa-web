import { CiMedicalMask } from "react-icons/ci";
import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6";
import { PiFaceMaskBold } from "react-icons/pi";
import ChatItem from "../components/ChatItem";
import ChatHeader from "../components/ChatHeader";

function WriteAnonymous() {
  const anonymousMessages = [
    "There’s this girl in DaSA I can’t stop thinking about. Anytime you smile, my heart skips a beat. Fati… one day, you’ll call me yours. 🥺",
    "To the most beautiful girl in DaSA, you’ve got me crushing hard. Zainab, I know I’m not your favorite person yet, but just wait—I’ll change that soon. 😉",
    "There’s a star in DaSA that shines brighter than the rest, and her name is Mariam. I hope one day I’ll be lucky enough to stand by her side.",
    "To the girl with the radiant smile in DaSA, you’ve been on my mind a lot lately. One day, I hope to find the courage to tell you who I am. Until then, just know you’re deeply admired. 🌸",
    "There’s a certain someone in DaSA who makes my day without even trying. Let’s just say, Amina, one day, you’ll realize who’s been crushing on you all along. 😏",
    "Dear pretty girl in DaSA, every time I see you, I forget my own name. Can you blame me, though? Khadija, you’ve got me wrapped around your little finger. 😅",
    "In the crowd at DaSA, there’s one face I can’t ignore. Her laughter is a melody, her presence a warm embrace. Nafisa, one day, I hope to be more than just the guy who admires you from afar. 🌹",
  ];

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/HH6pY83/chat-bg-1.jpg')] h-dvh flex flex-col   bg-cover bg-center relative  ">
        <div className="absolute inset-0 bg-[#fef3e775] overflow-y-scroll  ">
          
        </div>

            <ChatHeader/>
       

<div className="relative overflow-y-scroll" >
        {

            anonymousMessages.map((text,i)=><ChatItem chat={text} orient={i%2==0 && 'reverse'}/>)   
        }
</div>


      </div>
    </div>
  );
}

export default WriteAnonymous;
