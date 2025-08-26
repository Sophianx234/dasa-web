import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa6";
import {
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoMailOutline,
} from "react-icons/io5";
import { LuContact2 } from "react-icons/lu";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "../dashboard/account/DatePicker";
import FormInput from "../ui/FormInput";
import { useAppSelector, useSignup } from "../utils/hooks";
import PrivacyPolicy from "./PrivacyPolicy";
import Select from "./Select";
import SVGLite from "./SVGLite";
import Terms from "./Terms";

export type signupFormValues = {
  firstName: string;
  lastName: string;
  course: string;
  hall: string;
  annex: string;
  email: string;
  contact: string;
  password: string;
  sex: string;
  confirmPassword: string;
  birthDate: Date;
};

function Form() {
  const { handleSubmit, register, watch, control } = useForm<signupFormValues>();
  const navigate = useNavigate();
  const isAnnex = useAppSelector((store) => store.user.isAnnex);

  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [step, setStep] = useState(1); // 👈 Track step

  const { handleSignup } = useSignup(navigate);

  const onSubmit: SubmitHandler<signupFormValues> = (data) => {
    if (step === 1) {
      // move to step 2 instead of submitting
      setStep(2);
    } else {
      handleSignup(data);
    }
  };

  // Password matching check
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError(null);
    }
  }, [password, confirmPassword]);

  return (
    <div className="flex items-center justify-center min-h-screen  relative overflow-hidden px-4">
      {/* Background accents */}
      <div className="absolute top-0 w-full opacity-70">
        {/* <SVGLite type="sticks" /> */}
      </div>

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-md border  rounded-xl shadow-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Let’s get started</h1>
          <p className="text-sm text-gray-600 mt-1">
            Create your DaSA account. Already registered?{" "}
            <Link
              to="/homepage/login"
              className="text-orange-300 font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>

        <Toaster position="top-center" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 👇 Step 1: Personal Info */}
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  type="text"
                  register={register}
                  inputName="firstName"
                  placeholder="First name"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                  icon={<FaRegUser className="absolute left-2 text-gray-500" />}
                />
                <FormInput
                  type="text"
                  register={register}
                  inputName="lastName"
                  placeholder="Last name"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                  icon={<FaRegUser className="absolute left-2 text-gray-500" />}
                />
              </div>

              <FormInput
                type="email"
                register={register}
                inputName="email"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                placeholder="Email address"
                icon={<IoMailOutline className="absolute left-2 text-gray-500" />}
              />

              <div className="grid grid-cols-1 gap-4">
                <FormInput
                  type="select"
                  register={register}
                  inputName="hall"
                  placeholder="Hall of Residence"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  icon={<PiBuildingApartmentLight className="absolute left-2 text-gray-500" />}
                />
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => <DatePicker type="signup" field={field} />}
                />
              </div>

              {isAnnex === "Annex" || isAnnex === "UGEL Hostel" ? (
                <Select
                  register={register}
                  inputName="annex"
                  type="select"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder={`${isAnnex}`}
                  icon={<PiBuildingApartmentLight className="absolute left-2 text-gray-500" />}
                />
              ) : null}

              <Select
                register={register}
                inputName="course"
                type="select"
                form="course"
                placeholder="Course"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                icon={<PiBuildingApartmentLight className="absolute left-2 text-gray-500" />}
              />

              <Select
                register={register}
                inputName="sex"
                type="select"
                form="gender"
                placeholder="Gender"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                icon={<PiBuildingApartmentLight className="absolute left-2 text-gray-500" />}
              />

              <FormInput
                register={register}
                inputName="contact"
                type="tel"
                placeholder="Contact number"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                icon={<LuContact2 className="absolute left-2 text-gray-500" />}
              />

              <button className="w-full py-2 text-sm font-semibold bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all">
                Continue
              </button>
            </>
          )}

          {/* 👇 Step 2: Account Details */}
          {step === 2 && (
            <>
              <FormInput
                register={register}
                inputName="password"
                type="password"
                placeholder="Password"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                icon={<IoLockClosedOutline className="absolute left-2 text-gray-500" />}
              />

              <FormInput
                register={register}
                inputName="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                icon={<IoLockOpenOutline className="absolute left-2 text-gray-500" />}
              />

              {passwordMatchError && (
                <p className="text-xs text-red-600">{passwordMatchError}</p>
              )}

              <p className="text-xs text-gray-600">
                By signing up, you acknowledge that you’ve read and accepted our{" "}
                <span
                  onClick={() => setOpenTerms(true)}
                  className="text-orange-700 font-medium hover:underline cursor-pointer"
                >
                  Terms of Service
                </span>{" "}
                and{" "}
                <span
                  onClick={() => setOpenPrivacy(true)}
                  className="text-orange-700 font-medium hover:underline cursor-pointer"
                >
                  Privacy Policy
                </span>.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 py-2 text-sm font-semibold bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 text-sm font-semibold bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all"
                >
                  Signup
                </button>
              </div>

              {/* Modals */}
              {openTerms && <Terms handleClose={setOpenTerms} />}
              {openPrivacy && <PrivacyPolicy handleClose={setOpenPrivacy} />}
            </>
          )}
        </form>
      </div>

      {/* Bottom accents */}
      <div className="absolute bottom-0 w-full opacity-70">
        {/* <SVGLite type="sticks" /> */}
      </div>
    </div>
  );
}

export default Form;
