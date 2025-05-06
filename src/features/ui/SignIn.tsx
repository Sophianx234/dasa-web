import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FaRegEyeSlash, FaRegUser } from "react-icons/fa6";
import { IoEyeOutline, IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import FormInput from "../ui/FormInput";
import { useLogin } from "../utils/hooks";
import DasaLogo from "./DasaLogo";
import SVGLite from "./SVGLite";

export type loginFormValues = {
  email: string;
  password: string;
};
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

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginFormValues>();
  const [isLoggingIn,setIsLogginIn] = useState<boolean>(false)
  const [rememberMe,setRememberMe] = useState<boolean>(false)
  const [viewPass,setsetViewPass] = useState<"text"|'password'>('password')


  const { handleLogin } = useLogin(navigate);
  const onSubmit: SubmitHandler<loginFormValues> = (data: loginFormValues) => {
    setIsLogginIn(true)
    console.log(data);
    console.log(errors);
    if (!data.email || !data.password){
      setIsLogginIn(false)
      return;
      
    } 
    if(rememberMe){
      localStorage.setItem('email',data.email)
      localStorage.setItem('password',data.password)
      
      
    }else{
      
      localStorage.removeItem('email')
      localStorage.removeItem('password')
    }
    handleLogin(data);
    setIsLogginIn(false)
  };

  useEffect(()=>{
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if(email && password){
      handleLogin({email,password})

    }else return 
    
  },[])



  function handleToggle(nextChecked:boolean){
    setRememberMe(nextChecked)

  }
  

  return (
    <div className="flex flex-col overflow-hidden mx-4 items-center  h-dvh text-[60%] space-y-12 ">
      <div className="absolute top-1 overflow-hidden">
        <div className="overflow-x-hidden w-dvw">

        <SVGLite type="sticks" />
        </div>
      </div>
      <div className="   shadow-lg px-2 rounded-md border py-8  absolute top-20 w-[22rem]  ">
        <form
          className="flex  flex-col  px-2   "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex  items-center gap-4 pb-4">
            <h1 className="font-poppins font-semibold text-3xl text-[#33312e] pb-4 pt-4">
              Login
            </h1>
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
          </div>
          <div className="space-y-6  ">
            <FormInput
              register={register}
              inputName="email"
              style="bg-white border-dasadeep border "
              icon={<span className="absolute  bg-dasalight items-center left-0 px-4 h-full rounded-l-md shadow-sm flex "><FaRegUser className=" size-5" /></span>}
              type="email"
              placeholder="Enter Email Address"
            />
            {errors && <div className="bg-black">{errors.email?.message}</div>}

            <FormInput
              register={register}
              inputName="password"
              style="bg-white border-dasadeep border "
              type={viewPass}
              icon={<span className="absolute  bg-dasalight items-center left-0 px-4 h-full rounded-l-md shadow-sm flex "> <IoLockClosedOutline className="  size-5  " /></span>}
              icon2={<span className="absolute  bg-[#f1f3f5] items-center right-0 px-4 h-full  rounded-r-md shadow-sm flex ">{viewPass!=='text'?<IoEyeOutline className=" size-5"
                onClick={()=>setsetViewPass("text")}/>:<FaRegEyeSlash className="  size-5" onClick={()=>setsetViewPass("password")}/>}</span>}
              placeholder="Password"
            />

            <div className="pt-2">
            <Link
                className="text-gray-700 flex items-center  gap-1  -mt-1 pb-2 hover:underline"
                to="/homepage/forgotpassword"
              >
                
                <span className="self-end text-sm font-poppins italic">Forgot Password?</span>
              </Link>
              <div className="flex  text-xs gap-2 items-center">
                
                <p className="font-medium text-sm tracking-wide ">Remember Sign in details</p> <Switch onChange={handleToggle}  
                onColor="#ffd8a8"
                height={25}
                width={55}
                className=""
                checked={rememberMe} />
              </div>
              
              <div className=" italic  text-sm font-poppins font-medium tracking-tight py-2 pt-4">
                Do not have an account?{" "}
                <Link
                  to="/homepage/signup"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <button className=" rounded-full bg-dasadeep mt-3 border border-dasadeep hover:border-[#191611] hover:bg-transparent transition-all duration-300 py-2 text-sm font-bold font-Montserrat " disabled={isLoggingIn}>
            Login
          </button>
        </form>
      </div>
      <div className="absolute bottom-1">
      <div className="overflow-x-hidden w-dvw">

        <SVGLite type="sticks" />
      </div>
      </div>
      <Toaster position={"top-center"} />
    </div>
  );
}

export default SignIn;
