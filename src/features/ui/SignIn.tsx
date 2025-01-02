import { login } from "@/services/apiServices";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa6";
import { IoLockClosed } from "react-icons/io5";
import { TbBrandOpenvpn } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../ui/FormInput";
import DasaLogo from "./DasaLogo";
import SVGLite from "./SVGLite";
import { useLogin } from "../utils/hooks";

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
  const { handleSubmit, register,formState: {errors} } = useForm<loginFormValues>();

  const {handleLogin} = useLogin(navigate)
  const onSubmit: SubmitHandler<loginFormValues> = (data:loginFormValues)=>{
    console.log(data)
    console.log(errors)
    if(!data.email ||!data.password) return
    handleLogin(data)
  };

  return (
    <div className="flex flex-col   items-center  h-dvh overflow-x-hidden overflow-y-hidden   text-[60%] space-y-12 ">
      <div className="absolute top-1">
        <SVGLite type="sticks" />
      </div>
      <div className="   shadow-lg px-2 rounded-md border py-8  absolute top-28 ">
        <form className="flex flex-col  px-2  " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center gap-4 pb-4">
            <h1 className="font-poppins font-semibold text-3xl text-[#33312e] pb-4 pt-4">
              Login
            </h1>
            <DasaLogo title="Dagbon Students Association" />
          </div>
          <div className="space-y-4 ">
            <FormInput
              errMsg="Email is required"
              register={register}
              inputName="email"
              style="bg-white border-dasadeep border "
              icon={<FaRegUser className="absolute left-2 " />}
              type="email"
              placeholder="Enter Email Address"
            />
            {errors&&<div className="bg-black">{errors.email?.message}</div>}
            
            <FormInput
              register={register}
              inputName="password"
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
              <div className="pt-2">
                Already have an account{" "}
                <Link
                  to="/homepage/signup"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <button className=" bg-dasadeep mt-3 rounded-sm py-2 text-sm font-bold font-Montserrat " >
            Login
          </button>
        </form>
      </div>
      <div className="absolute bottom-1">
<Toaster
  position="top-center"
  
/>
        <SVGLite type="sticks" />
      </div>
    </div>
  );
}

export default SignIn;
