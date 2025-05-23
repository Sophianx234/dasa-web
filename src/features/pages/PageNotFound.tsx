import { FaArrowCircleLeft } from "react-icons/fa"
import { TbError404 } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className="bg-white h-dvh">
            <div className="flex items-center ">

            <TbError404 className="size-96 "/>
            </div>

            <div className="space-y-3">
                <h1 className="text-center font-semibold font-poppins  text-xl px-3 ">
                 Looks like this page took a detour.
                </h1>
                <p className=" text-center font-Montserrat font-medium italic">Let’s find our way back together!"</p>
            </div>
            <div className="text-center flex items-center justify-center pt-4">

            <button onClick={()=>navigate(-1)} className="bg-dasalight px-6 py-2 gap-1 flex  items-center rounded-3xl text-lg font-medium text-[#33312e] hover-primary hover:gap-3">
            <FaArrowCircleLeft/>
               <span className=" text-lg"> Back</span> 
            </button>
            </div>

            
        </div>
    )
}

export default PageNotFound

