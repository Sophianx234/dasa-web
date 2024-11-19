import { CiMedicalMask } from "react-icons/ci"
import { FaArrowLeftLong, FaMasksTheater } from "react-icons/fa6"

function WriteAnonymous() {
    return (
        <div>
            

         <div className="items-center  grid grid-cols-[1fr_2fr_1fr] justify-items-center border py-4  ">
         <FaArrowLeftLong className="size-7"/>
         <div className="text-lg ">Anonymous</div>
         <FaMasksTheater className="size-8"/>
            </div>
            
            
            <div className="bg-[url('https://i.ibb.co/HH6pY83/chat-bg-1.jpg')] h-dvh flex pt-16  bg-cover bg-center relative ">
            
                
                <div className="absolute inset-0 bg-[#fef3e775] mix-blend-multiply">
                    
                <div className="  flex items-center  ">
<div className="rounded-full mt-10 bg-[#121212]">

<CiMedicalMask className="size-12 self-end fill-white"/>
</div>
                <div className="border px-4 mr-4 py-4 rounded-bl-none rounded-2xl text-dasadeep  bg-[#121212]">Hey, There is this girl called Azimpa'a a dey feel am waa </div>
                </div>  
</div>
                </div>
                
 
                    </div>
    )
}

export default WriteAnonymous
