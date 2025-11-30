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

export type loginFormValues = {
  email: string;
  password: string;
};

function SignIn() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginFormValues>();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [viewPass, setViewPass] = useState<"text" | "password">("password");

  const { handleLogin } = useLogin(navigate);

  const onSubmit: SubmitHandler<loginFormValues> = (data) => {
    setIsLoggingIn(true);

    if (!data.email || !data.password) {
      setIsLoggingIn(false);
      return;
    }

    if (rememberMe) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }

    handleLogin(data);
    setIsLoggingIn(false);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      handleLogin({ email, password });
    }
  }, []);

  const handleToggle = (nextChecked: boolean) => setRememberMe(nextChecked);

  return (
    <div className="w-full h-screen flex items-center overflow-hidden justify-center bg-gray-50">
      <div className="grid lg:grid-cols-[1fr_1.5fr] w-full  bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Form Section */}
        <div className="p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-1">
              <DasaLogo clns="text-sm" title="Dagbon Students Association" />
              <h1 className="font-poppins text-3xl font-semibold text-gray-800">
                Welcome Back
              </h1>
              <p className="text-gray-500 text-sm">Login to continue</p>
            </div>

            {/* Email */}
            <FormInput
              register={register}
              inputName="email"
              style="bg-white border text-sm"
              icon={
                <span className="absolute left-0 px-3 h-full flex items-center rounded-l-md">
                  <FaRegUser className="text-gray-700 text-sm" />
                </span>
              }
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}

            {/* Password */}
            <FormInput
              register={register}
              inputName="password"
              style="bg-white border focus:ring-2 focus:ring-black text-sm"
              type={viewPass}
              icon={
                <span className="absolute left-0 px-3 h-full flex items-center rounded-l-md">
                  <IoLockClosedOutline className="text-gray-800 text-sm" />
                </span>
              }
              icon2={
                <span className="absolute right-0 px-3 h-full flex items-center bg-gray-100 rounded-r-md cursor-pointer">
                  {viewPass === "password" ? (
                    <IoEyeOutline
                      className="text-gray-500 text-sm"
                      onClick={() => setViewPass("text")}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="text-gray-500 text-sm"
                      onClick={() => setViewPass("password")}
                    />
                  )}
                </span>
              }
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}

            {/* Options */}
            <div className="flex flex-col gap-2 text-xs">
              <Link
                to="/homepage/forgotpassword"
                className="text-gray-700 hover:underline self-end"
              >
                Forgot Password?
              </Link>

              <div className="flex items-center justify-between">
                <p className="text-gray-700 text-sm">Remember me</p>
                <Switch
                  onChange={handleToggle}
                  onColor="#ff922b"
                  offColor="#dcdcdc"
                  height={18}
                  width={40}
                  checked={rememberMe}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              disabled={isLoggingIn}
              className={`w-full rounded-xl py-2 text-sm font-medium transition-all duration-300 ${
                isLoggingIn
                  ? "bg-orange-300 cursor-not-allowed text-white"
                  : "bg-orange-300 text-white hover:bg-orange-500"
              }`}
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/homepage/signup"
                className="text-gray-700 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden relative lg:block">
          <img
            src="https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg"
            alt="Sign in illustration"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-[#191611] bg-opacity-70"></div>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}

export default SignIn;
