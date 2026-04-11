import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { IoEyeOutline, IoEyeOffOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import { motion } from "framer-motion";
import FormInput from "../ui/FormInput";
import { useLogin } from "../utils/hooks";
import { DasaLogo } from "./DasaLogo";

export type loginFormValues = {
  email: string;
  password: string;
};

function SignIn() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<loginFormValues>();
  
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [viewPass, setViewPass] = useState<"text" | "password">("password");

  const { handleLogin } = useLogin(navigate);

  // Pre-fill email if "Remember Me" was used previously
  useEffect(() => {
    const savedEmail = localStorage.getItem("dasa_remembered_email");
    if (savedEmail) {
      setValue("email", savedEmail);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<loginFormValues> = async (data) => {
    setIsLoggingIn(true);

    if (!data.email || !data.password) {
      setIsLoggingIn(false);
      return;
    }

    // Secure "Remember Me": Only store the email. Passwords should never touch localStorage.
    if (rememberMe) {
      localStorage.setItem("dasa_remembered_email", data.email);
    } else {
      localStorage.removeItem("dasa_remembered_email");
    }

    try {
      await handleLogin(data);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleToggle = (nextChecked: boolean) => setRememberMe(nextChecked);

  return (
    <div className="w-full min-h-dvh flex items-center justify-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full  sm:max-w-full bg-white 2xl  overflow-hidden grid lg:grid-cols-[1fr_1.2fr]  "
      >
        
        {/* === FORM SECTION === */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-sm w-full mx-auto">
            
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2 mb-8">
              <DasaLogo clns="text-sm" title="Dagbon Students Association" />
              <h1 className="font-rethink text-3xl md:text-4xl font-bold tracking-tight text-[#33312e]">
                Welcome Back.
              </h1>
              <p className="text-[#33312e]/60 text-sm font-poppins">
                Enter your credentials to continue
              </p>
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <FormInput
                register={register}
                inputName="email"
                style="bg-white border border-gray-200 focus:border-dasalight focus:ring-1 focus:ring-dasalight text-sm rounded-lg transition-all"
                icon={
                  <span className="absolute left-0 px-3 h-full flex items-center rounded-l-md pointer-events-none">
                    <IoPersonOutline className="text-gray-400 text-lg" />
                  </span>
                }
                type="email"
                placeholder="Email address"
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium px-1">
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <FormInput
                register={register}
                inputName="password"
                style="bg-white border border-gray-200 focus:border-dasalight focus:ring-1 focus:ring-dasalight text-sm rounded-lg transition-all pr-12"
                type={viewPass}
                icon={
                  <span className="absolute left-0 px-3 h-full flex items-center rounded-l-md pointer-events-none">
                    <IoLockClosedOutline className="text-gray-400 text-lg" />
                  </span>
                }
                icon2={
                  <button
                    type="button"
                    className="absolute right-0 px-3 h-full flex items-center rounded-r-lg hover:bg-gray-50 transition-colors focus:outline-none"
                    onClick={() => setViewPass(prev => prev === "password" ? "text" : "password")}
                    aria-label={viewPass === "password" ? "Show password" : "Hide password"}
                  >
                    {viewPass === "password" ? (
                      <IoEyeOutline className="text-gray-400 hover:text-gray-600 text-lg transition-colors" />
                    ) : (
                      <IoEyeOffOutline className="text-gray-400 hover:text-gray-600 text-lg transition-colors" />
                    )}
                  </button>
                }
                placeholder="Password"
              />
              {errors.password && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium px-1">
                  {errors.password.message}
                </motion.p>
              )}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm font-poppins pt-2">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                <Switch
                  onChange={handleToggle}
                  onColor="#18181B" // dasalight matching color
                  offColor="#e5e7eb"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={20}
                  width={36}
                  handleDiameter={16}
                  checked={rememberMe}
                  className="shadow-sm"
                />
                <span className="text-[#33312e]/70 select-none">Remember me</span>
              </div>
              
              <Link
                to="/forgotpassword"
                className=" font-medium hover:text-zinc-900 hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              disabled={isLoggingIn}
              className={`w-full relative flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold tracking-wide  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dasalight ${
                isLoggingIn
                  ? "bg-dasalight/70 cursor-not-allowed text-[#33312e]/50"
                  : "bg-zinc-900 text-white "
              }`}
            >
              {isLoggingIn ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Authenticating...
                </>
              ) : (
                "Log In"
              )}
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-[#33312e]/60 font-poppins pt-4 border-t border-gray-100">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#33312e] font-semibold  hover:underline transition-colors"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* === IMAGE SECTION === */}
        <div className="hidden lg:block relative bg-[#33312e] overflow-hidden group">
  {/* Path 1: Add a simple, solid dark 'veil' div right after the image.
      This darkens the ENTIRE scene evenly. Adjust the black opacity as needed (e.g., bg-black/60). */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Refined Gradient Overlay (keep this as-is or adjust slightly) */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#33312e]/90 via-[#33312e]/40 to-transparent z-20"></div>
  
  <img
    src="https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg"
    alt="Dagbon Students Association Members"
    className="w-full h-full object-cover opacity-80 transform transition-transform duration-1000 "
  />

  {/* Optional Overlay Text (keep this as-is) */}
  <div className="absolute bottom-12 left-12 right-12 text-dasalight z-30">
    <h2 className="text-3xl font-bold font-rethink leading-tight mb-3">
      Strength in unity. <br/> Excellence in action.
    </h2>
    <div className="w-12 h-1 bg-dasalight mb-4"></div>
    <p className="text-white/80 font-poppins leading-relaxed">
      Join the community dedicated to supporting the academic and personal growth of Dagbon students.
    </p>
  </div>
</div>

      </motion.div>

      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
    </div>
  );
}

export default SignIn;