import { IoLockClosed } from "react-icons/io5"
import FormInput  from "../ui/FormInput"
import { FaRegUser } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { TbBrandOpenvpn } from "react-icons/tb"
import SVGLite from "./SVGLite"

function SignIn() {
    const signinImgUrl = ["https://i.ibb.co/TchPr99/photo-5-2024-10-31-06-53-18.jpg","https://i.ibb.co/BN6WBpn/photo-30-2024-10-31-06-53-18.jpg"
    ] 
    return (
        <div className="flex items-center justify-center h-dvh px-10 text-[60%]">
            <div className="flex   bg-dasalight   ">
                <form className="flex flex-col px-2 ">
                <h1 className="font-poppins font-semibold text-3xl text-[#33312e] pb-4 pt-4">Login</h1>
                <div className="space-y-3">

                    <FormInput icon={<FaRegUser className="absolute left-2  "/>} type="email" placeholder="Enter Email Address"/>
                    <FormInput icon={<IoLockClosed className="absolute left-2 "/>} type="password" placeholder="Password"/>
                    
                    <div>

            <div className="flex  text-xs gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember Me</p>
            </div>
            <Link className="text-blue-900 flex items-center gap-2 pt-2 " to='/forgotPassword'>
            <TbBrandOpenvpn className="size-4 "/>
            <span className="self-end">
            Forgot Password?
                
            </span>
            </Link>
                    </div>
                </div>
                    <button className=" bg-dasadeep mt-3 rounded-sm py-1 ">Log In</button>
                </form>
                <div className="overflow-hidden bg-[#191611c9] max-h-72 max-w-48 w-48 ">

                <img src={signinImgUrl[1]} alt="" className="scale-[1.4] mix-blend-overlay border-0 max-w-48" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
