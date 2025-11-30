import { useEffect, useRef, useState } from "react";
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
import FormInput from "../ui/FormInput";
import { useAppSelector, useSignup } from "../utils/hooks";
import PrivacyPolicy from "./PrivacyPolicy";
import Select from "./Select";
import Terms from "./Terms";
import { FiPlus } from "react-icons/fi";
import DasaLogo from "./DasaLogo";
import { DatePicker } from "../dashboard/account/DatePicker";

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
  profilePicture?: FileList;
};

function Form() {
  const navigate = useNavigate();
  const { handleSubmit, register, watch, control } =
    useForm<signupFormValues>();
  const isAnnex = useAppSelector((store) => store.user.isAnnex);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [step, setStep] = useState(1);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError(null);
    }
  }, [password, confirmPassword]);

  const { handleSignup } = useSignup(navigate);

  const onSubmit: SubmitHandler<signupFormValues> = (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSignup(data);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.5fr] w-full  bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Form Section */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center text-center space-y-1 mb-6">
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
            <h1 className="font-poppins text-3xl font-semibold text-gray-800">
              Let’s get started
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Create your DaSA account. Already registered? <br />
              <Link
                to="/homepage/login"
                className="text-orange-500 font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>

          <Toaster position="top-center" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 w-full max-w-md mx-auto"
          >
            {/* Step 1 */}
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
                  placeholder="Email address"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                  icon={<IoMailOutline className="absolute left-2 text-gray-500" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    type="select"
                    register={register}
                    inputName="hall"
                    placeholder="Hall of Residence"
                    style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    icon={
                      <PiBuildingApartmentLight className="absolute left-2 text-gray-500" />
                    }
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
                    placeholder={`${isAnnex}`}
                    style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    icon={
                      <PiBuildingApartmentLight className="absolute left-2 text-gray-500" />
                    }
                  />
                ) : null}

                <Select
                  register={register}
                  inputName="course"
                  type="select"
                  placeholder="Course"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  icon={
                    <PiBuildingApartmentLight className="absolute left-2 text-gray-500" />
                  }
                />

                <Select
                  register={register}
                  inputName="sex"
                  type="select"
                  placeholder="Gender"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  icon={
                    <PiBuildingApartmentLight className="absolute left-2 text-gray-500" />
                  }
                />

                <FormInput
                  register={register}
                  inputName="contact"
                  type="tel"
                  placeholder="Contact number"
                  style="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                  icon={<LuContact2 className="absolute left-2 text-gray-500" />}
                />

                <button className="w-full py-2 text-sm font-semibold bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition-all">
                  Continue
                </button>
              </>
            )}

            {/* Step 2 */}
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
                    className="w-1/2 py-2 text-sm font-semibold bg-dasadeep text-white rounded-full hover:bg-orange-500 transition-all"
                  >
                    Continue
                  </button>
                </div>

                {openTerms && <Terms handleClose={setOpenTerms} />}
                {openPrivacy && <PrivacyPolicy handleClose={setOpenPrivacy} />}
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4 text-center">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Profile Picture
                </label>

                <input
                  type="file"
                  accept="image/*"
                  {...register("profilePicture")}
                  ref={(e) => {
                    register("profilePicture").ref(e);
                    fileInputRef.current = e;
                  }}
                  className="hidden"
                />

                {watch("profilePicture")?.[0] ? (
                  <img
                    src={URL.createObjectURL(watch("profilePicture")[0])}
                    alt="preview"
                    className="mx-auto h-32 w-32 rounded-full object-cover cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  />
                ) : (
                  <div className="flex justify-center">
                    <div
                      className="h-32 w-32 border flex items-center justify-center border-gray-300 rounded-full cursor-pointer hover:bg-gray-100"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FiPlus className="text-gray-400 text-2xl" />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/2 py-2 text-sm font-semibold bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2 text-sm font-semibold bg-dasadeep text-white rounded-full hover:bg-orange-500 transition-all"
                  >
                    Signup
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden relative lg:block">
          <img src="https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg" 
            alt="Signup illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#191611] bg-opacity-70"></div>
        </div>
      </div>
    </div>
  );
}

export default Form;
