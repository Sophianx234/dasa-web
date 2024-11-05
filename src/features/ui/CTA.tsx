import { TiTick } from "react-icons/ti"
import TickList from "./TickList"
import InputEmail from "./InputEmail"

function CTA() {
    return (
        <div>
            <div className="max-w-[45rem] mx-auto px-6">
                <h1 className="text-2xl text-center font-mulish font-bold ">Get full access to <br /> DaSA</h1>
                <p className="text-center text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit voluptas officiis magnam illo magni nam? Commodi neque possimus veritatis. Dolor non, cupiditate, a ad voluptas dolorem, nihil enim quis.</p>
            </div>
            <div>
                
                {/* TICKS */}

               <TickList/>
               <div>
                <InputEmail/>
               </div>
            </div>
            
        </div>
    )
}

export default CTA
