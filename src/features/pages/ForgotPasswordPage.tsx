import { useForm } from "react-hook-form"
import DasaLogo from "../ui/DasaLogo"
import FormWrapper from "../ui/FormWrapper"

import { Link } from "react-router-dom"
import { FaArrowLeft, FaRegUser } from "react-icons/fa6"
import FormInput from "../ui/FormInput"
import { useForgotPassword } from "../utils/hooks"
import Swal from "sweetalert2"
import { Toaster } from "react-hot-toast"
type forgotpassFormValues = {
  email: string
}
function ForgotPasswordPage() {
  const {register,handleSubmit} = useForm<forgotpassFormValues>()
  const {handleforgotPassword} = useForgotPassword()
  const onSubmit = async (data:forgotpassFormValues)=>{
    if(!data.email) return 
    const result = await Swal.fire({
              title: "Are you sure?",
              heightAuto:false,
              backdrop:false,
              text: "Do you want to request password reset.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#e8590c",
              cancelButtonColor: "#3085d6",
              confirmButtonText: "Yes!",
            });
        
            if (result.isConfirmed) {
              console.log('test2233',data)
               await handleforgotPassword(data.email)
              
            }
  }
  return (
    <div>
      <FormWrapper>
      <form
          className="flex flex-col  px-2   "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex  items-center -space-x-10 pb-4">
            <h1 className="font-poppins font-semibold text-2xl text-[#33312e] leading-5 pb-2 pt-4">
              Forgot <span className="text-2xl">password</span>
            </h1>
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
          </div>
          <p className="text-base font-semibold leading-5 pb-4 text-[#495057] italic ">Please enter the email address you'd like you password reset information sent to. </p>
          <div className="space-y-8 ">
            <FormInput
              register={register}
              inputName="email"
              style="bg-white border-dasadeep py-3 border "
              
              icon={<span className="absolute  bg-dasalight items-center left-0 px-4 h-full rounded-l-md shadow-sm flex "><FaRegUser className=" size-5" /></span>}
              type="email"
              placeholder="Enter Email Address"
            />

            
            <div className="pb-3">
            
            <div className=" flex justify-between italic  text-sm font-poppins font-medium tracking-tight pl-2 items-center  ">
                Don't have an account?{" "}
                <Link
                  to="/homepage/signup"
                  className=" font-medium text-[#33312e] rounded-sm border-dasalight border bg-dasalight px-2 py-1  shadow-sm"
                >
                  Register
                </Link>
              </div>
             
            </div>
          </div>
          <button className=" rounded-full bg-dasadeep mt-3 border border-dasadeep hover:border-[#191611] hover:bg-transparent transition-all duration-300 py-2 text-sm font-bold font-poppins " >
            Continue
          </button>
           
              <div className="text-center flex justify-center">
                
                <Link
                  to="/homepage/login"
                  className=" italic  text-sm font-poppins  tracking-tight font-medium  rounded-md mt-3   text-center text-[#33312e] flex items-center gap-1 hover:gap-2 transition-all translate-y-3 duration-150 "
                >
                  <FaArrowLeft/> Back to Login
                </Link>
              </div>
              <Toaster/>
        </form>
      </FormWrapper>
    </div>
  )
}

export default ForgotPasswordPage
