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
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginFormValues>();
  const [isLoggingIn, setIsLogginIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [viewPass, setViewPass] = useState<"text" | "password">("password");

  const { handleLogin } = useLogin(navigate);

  const onSubmit: SubmitHandler<loginFormValues> = (data) => {
    setIsLogginIn(true);

    if (!data.email || !data.password) {
      setIsLogginIn(false);
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
    setIsLogginIn(false);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      handleLogin({ email, password });
    }
  }, []);

  function handleToggle(nextChecked: boolean) {
    setRememberMe(nextChecked);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br  relative overflow-hidden px-4">
      {/* Background accents */}
      <div className="absolute top-0 w-full opacity-70">
        {/* <SVGLite type="sticks" /> */}
      </div>

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-md border  rounded-xl shadow-lg p-6 w-full max-w-sm">
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
          <div>
            <FormInput
              register={register}
              inputName="email"
              style="bg-white border  text-sm"
              icon={
                <span className="absolute left-0 px-3 h-full flex items-center  rounded-l-md">
                  <FaRegUser className="text-gray-700 text-sm" />
                </span>
              }
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <FormInput
              register={register}
              inputName="password"
              style="bg-white border  focus:ring-2 focus:ring-black text-sm"
              type={viewPass}
              icon={
                <span className="absolute left-0 px-3 h-full flex items-center  rounded-l-md">
                  <IoLockClosedOutline className=" text-gray-800 text-sm" />
                </span>
              }
              icon2={
                <span className="absolute right-0 px-3 h-full flex items-center bg-gray-100 rounded-r-md cursor-pointer">
                  {viewPass !== "text" ? (
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
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

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
            className={`w-full rounded-xl py-2 text-sm font-medium transition-all duration-300 
              ${
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

      {/* Bottom background */}
      <div className="absolute bottom-0 w-full opacity-70">
        {/* <SVGLite type="sticks" /> */}
      </div>

      <Toaster position="top-center" />
    </div>
  );
}

export default SignIn;
