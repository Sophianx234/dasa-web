import { FaRegUser } from "react-icons/fa6"
import FormInput  from "../ui/FormInput"
import { Link } from "react-router-dom"
import { IoLockClosed, IoLockClosedOutline, IoLockOpenOutline, IoMailOutline } from "react-icons/io5"
import { PiBuildingApartmentLight } from "react-icons/pi"
import { useAppSelector } from "../utils/hooks"
import Select from "./Select"
import SVGLite from "./SVGLite"

function Form() {
    const isAnnex = useAppSelector(store=>store.user.isAnnex)
    console.log(isAnnex)
    
    return (
        <div className="bg-dasalight h-dvh pt-6 ">
            <div className="px-4">
                <div>
                    <h1 className="text-[#33312e] font-bold text-3xl ">Let's get started</h1>
                    <p className=" font-mulish text-sm">Create your DaSA account. Already <br /> registered? <Link to='login' className="text-blue-950 font-bold">Login here</Link></p>
                </div>

                <form action="" className="grid grid-cols-2">

                    <FormInput type="text" placeholder="First name" icon={<FaRegUser className="absolute left-2  "/>}/>

                    <FormInput type="text" placeholder="Last name" icon={<FaRegUser className="absolute left-2  "/>}/>

                    <FormInput type="email" addClass="col-span-2" placeholder="Enter your email address" icon={<IoMailOutline className="absolute left-2  "/>}/>

                    <FormInput type="select" placeholder="Hall of Residence " icon={<PiBuildingApartmentLight className="absolute left-2   "/>}/>
                    

                    {isAnnex === 'Annex' || isAnnex === 'UGEL Hostel'?<Select type="select" placeholder={`${isAnnex}`} icon={<PiBuildingApartmentLight className="absolute left-2   "/>}/>: null}

                    <Select type="select" 
                   form="course" placeholder={`Course`} icon={<PiBuildingApartmentLight className="absolute left-2   "/>}/>
                    <FormInput type="password" placeholder="Password " addClass="col-span-2"
                     icon={<IoLockClosedOutline
                    className="absolute left-2   "/>}/>

                    <FormInput type="password" placeholder="Confirm Password " icon={<IoLockOpenOutline className="absolute left-2   "/>}/>
                </form>
                <p>By signing up, you acknowledge that you’ve read and accepted our Terms of Service and Privacy Policy.</p>
                <button className="bg-dasadeep" >Signup</button>
            </div>
            <SVGLite type="sticks"/>
        </div>
    )
}

export default Form
