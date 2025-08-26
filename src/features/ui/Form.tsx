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
import { DatePicker } from "../dashboard/account/DatePicker";
import FormInput from "../ui/FormInput";
import { useAppSelector, useSignup } from "../utils/hooks";
import PrivacyPolicy from "./PrivacyPolicy";
import Select from "./Select";
import Terms from "./Terms";
import { FiPlus } from "react-icons/fi";

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
  profilePicture?: FileList; // new
};

function Form() {
  const { handleSubmit, register, watch, control } = useForm<signupFormValues>();
  const navigate = useNavigate();
  const isAnnex = useAppSelector((store) => store.user.isAnnex);

  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [step, setStep] = useState(1);

  const { handleSignup } = useSignup(navigate);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<signupFormValues> = (data) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // send data including profilePicture
      handleSignup(data);
    }
  };

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
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="mb-6 text-center flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800">Let’s get started</h1>
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
        className="w-full max-w-2xl space-y-6"
      >
        {/* Step 1 */}
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                render={({ field }) => (
                  <DatePicker type="signup" field={field} />
                )}
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
                className="w-1/2 py-2 text-sm font-semibold bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all"
              >
                Continue
              </button>
            </div>

            {openTerms && <Terms handleClose={setOpenTerms} />}
            {openPrivacy && <PrivacyPolicy handleClose={setOpenPrivacy} />}
          </>
        )}

        {/* Step 3 - Profile Picture */}
        {step === 3 && (
  <div className="space-y-4 text-center">
    <label className="block text-sm font-medium text-gray-700">
      Upload Profile Picture
    </label>

    {/* Hidden file input */}
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

    {/* Preview OR Upload Button */}
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
          className="size-32 border flex items-center justify-center border-gray-300 rounded-full cursor-pointer hover:bg-gray-100"
          onClick={() => fileInputRef.current?.click()}
        >
          <FiPlus className="size-8 text-gray-400" />
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
        className="w-1/2 py-2 text-sm font-semibold bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all"
      >
        Signup
      </button>
    </div>
  </div>
)}

      </form>
    </div>
  );
}

export default Form;
