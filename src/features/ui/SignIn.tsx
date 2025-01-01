import { FaRegUser } from "react-icons/fa6";
import { IoLockClosed } from "react-icons/io5";
import { TbBrandOpenvpn } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../ui/FormInput";
import DasaLogo from "./DasaLogo";
import SVGLite from "./SVGLite";

function SignIn() {
  /* const slideImages: slidesImagesType[] = [
    {
      url: "https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg",
    },
    {
      url: "https://i.ibb.co/5jHK7HD/IMG-20241107-WA0017.jpg",
    },
    {
      url: "https://i.ibb.co/BN6WBpn/photo-30-2024-10-31-06-53-18.jpg",
    },
    {
      url: "https://i.ibb.co/y4PdLty/photo-9-2024-10-31-06-50-45.jpg",
    },
    {
      url: "https://i.ibb.co/SNcNjPD/photo-33-2024-10-31-06-52-36.jpg",
    },
    {
      url: "https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg",
    },
  ]; */
  const navigate = useNavigate()
  function handleLogin(){
    
    navigate('/dashboard')

  }

  return (
    <div className="flex flex-col  items-center  h-dvh   text-[60%] space-y-12 ">
      <div className="absolute top-1">
        <SVGLite type="sticks" />
      </div>
      <div className="     absolute top-28 ">
       
    e.preventDefault()
        <form className="flex flex-col px-2  " onSubmit={()=>handleLogin()}>
            <div className="flex  items-center gap-4 pb-4">

          <h1  className="font-poppins font-semibold text-3xl text-[#33312e] pb-4 pt-4">
            Login
          </h1>
          <DasaLogo title="Dagbon Students Association" />
            </div>
          <div className="space-y-4 ">
            <FormInput
              style="bg-white border-dasadeep border "
              icon={<FaRegUser className="absolute left-2 " />}
              type="email"
              placeholder="Enter Email Address"
            />
            <FormInput
              style="bg-white border-dasadeep border "
              icon={<IoLockClosed className="absolute left-2  " />}
              type="password"
              placeholder="Password"
            />

            <div>
              <div className="flex  text-xs gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember Me</p>
              </div>
              <Link
                className="text-blue-900 flex items-center gap-2 pt-2 "
                to="/forgotPassword"
              >
                <TbBrandOpenvpn className="size-4 " />
                <span className="self-end">Forgot Password?</span>
              </Link>
            </div>
          </div>
          <button  className=" bg-dasadeep mt-3 rounded-sm py-2 text-sm font-bold font-Montserrat ">Login</button>
        </form>
      </div>
      <div className="absolute bottom-1">
        <SVGLite type="sticks" />
      </div>
    </div>
  );
}

export default SignIn;
