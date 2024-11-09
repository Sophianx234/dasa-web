import { FaArrowRight } from "react-icons/fa6"
import { TbError404 } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex items-center">

            <TbError404 className="size-96 "/>
            </div>

            <div className="space-y-3">
                <h1 className="text-center font-semibold font-poppins  px-3 ">
                Grab some kulikuli and sit tight! Looks like this page took a detour.
                </h1>
                <p className=" text-center font-Montserrat font-medium">Let’s find our way back together!"</p>
            </div>
            <div className="text-center flex items-center justify-center pt-4">

            <button onClick={()=>navigate(-1)} className="bg-dasalight px-6 py-3 gap-1 flex  items-center rounded-3xl text-lg font-medium text-[#33312e] hover-primary">Back 
                <FaArrowRight/>
            </button>
            </div>

            
        </div>
    )
}

export default PageNotFound

