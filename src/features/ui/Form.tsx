import { FaRegUser } from "react-icons/fa6"
import FormInput  from "../ui/FormInput"
import { Link } from "react-router-dom"
import { IoLockClosed, IoLockClosedOutline, IoLockOpenOutline, IoMailOutline } from "react-icons/io5"
import { PiBuildingApartmentLight } from "react-icons/pi"
import { useAppSelector } from "../utils/hooks"
import Select from "./Select"

function Form() {
    const isAnnex = useAppSelector(store=>store.user.isAnnex)
    console.log(isAnnex)
    
    return (
        <div>
            <div>
                <div>
                    <h1>Let's get started</h1>
                    <p>Create your DaSA account. Already registered? <Link to='login'>Login here</Link></p>
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
                <p>By pressing continue you agree to to the Pipe terms of service and privacy policy</p>
                <button >Signup</button>
            </div>
        </div>
    )
}

export default Form
