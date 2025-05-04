import { Toaster } from "react-hot-toast"
import FormWrapper from "../ui/FormWrapper"
import { FaArrowLeft, FaRegUser } from "react-icons/fa6"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import DasaLogo from "../ui/DasaLogo"
import FormInput from "../ui/FormInput"
import { useResetPassword } from "../utils/hooks"
export type resetPassFormValues = {
  pass:string;
  confirmPass:string
}
function ResetPasswordPage() {
  const navigate = useNavigate()
  const {handlePassReset} = useResetPassword(navigate)
  const {register,handleSubmit} = useForm<resetPassFormValues>()
  const {token} = useParams()
  const onSubmit = async(body:resetPassFormValues)=>{
    console.log(body)
    console.log('token',token)
    if(body.pass !== body.confirmPass) return 
    if(token){

      handlePassReset({token,body})
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
            <h1 className="font-poppins font-semibold text-3xl text-[#33312e] pb-2 pt-4">
              Reset <span className="text-3xl">password</span>
            </h1>
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
          </div>
          <p className="text-lg  font-medium leading-6 pb-4 text-[#495057] italic">Please enter your new password. </p>
          <div className="space-y-6 ">
            <FormInput
              register={register}
              inputName="pass"
              style="bg-white border-dasadeep py-3 border "
              
              icon={<span className="absolute  bg-dasalight items-center left-0 px-4 h-full rounded-l-md shadow-sm flex "><FaRegUser className=" size-5" /></span>}
              type="text"
              placeholder="Enter new password"
            />
            <FormInput
              register={register}
              inputName="confirmPass"
              style="bg-white border-dasadeep py-3 border "
              
              icon={<span className="absolute  bg-dasalight items-center left-0 px-4 h-full rounded-l-md shadow-sm flex "><FaRegUser className=" size-5" /></span>}
              type="text"
              placeholder="Confirm password"
            />

            
            <div>
            
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
            Reset Password
          </button>
           
              <div className="text-center flex justify-center">
                
                <Link
                  to="/homepage/login"
                  className=" italic  text-sm font-poppins  tracking-tight font-medium  rounded-md mt-3   text-center text-[#33312e] flex items-center gap-1 hover:gap-2 transition-all translate-y-3 duration-150 "
                >
                  <FaArrowLeft/> Back to Home
                </Link>
              </div>
              <Toaster/>
        </form>
      
      </FormWrapper>
    </div>
  )
}

export default ResetPasswordPage
