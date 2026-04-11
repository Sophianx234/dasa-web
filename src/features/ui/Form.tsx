import { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import {
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
  IoBusinessOutline,
  IoCallOutline,
  IoArrowBackOutline,
  IoCameraOutline
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FormInput from "../ui/FormInput";
import { useAppSelector, useSignup } from "../utils/hooks";
import PrivacyPolicy from "./PrivacyPolicy";
import Select from "./Select";
import Terms from "./Terms";
import { DatePicker } from "../dashboard/account/DatePicker";
import { DasaLogo } from "./DasaLogo";

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
  const { handleSubmit, register, watch, control } = useForm<signupFormValues>();
  const isAnnex = useAppSelector((store) => store.user.isAnnex);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [step, setStep] = useState(1);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);

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

  // Framer motion variants for smooth step transitions
  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Shared premium input style
  const inputStyle = "bg-white border border-gray-200 hover:border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm rounded-xl transition-all";

  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden  bg-gray-50/50">
      
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl sm:max-w-full bg-white   overflow-hidden grid lg:grid-cols-[1fr_1.2fr] min-h-[640px] sm:min-h-dvh"
      >
        
        {/* === FORM SECTION === */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative border-r border-gray-100/50">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-2 mb-8">
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
            <h1 className="font-rethink text-3xl md:text-4xl font-extrabold tracking-tight text-[#33312e] leading-[1.1]">
              Create Account.
            </h1>
            <p className="text-[#33312e]/70 text-sm font-poppins mt-1">
              Step {step} of 3. Already registered?{" "}
              <Link to="/login" className="text-zinc-900 font-semibold hover:underline transition-colors">
                Log in
              </Link>
            </p>
          </div>

          <Toaster position="top-center" toastOptions={{ className: 'font-poppins text-sm rounded-2xl shadow-xl' }} />

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* === STEP 1: Personal Details === */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      type="text"
                      register={register}
                      inputName="firstName"
                      placeholder="First name"
                      style={inputStyle}
                      icon={<IoPersonOutline className="absolute left-3 text-gray-400 text-lg" />}
                    />
                    <FormInput
                      type="text"
                      register={register}
                      inputName="lastName"
                      placeholder="Last name"
                      style={inputStyle}
                      icon={<IoPersonOutline className="absolute left-3 text-gray-400 text-lg" />}
                    />
                  </div>

                  <FormInput
                    type="email"
                    register={register}
                    inputName="email"
                    placeholder="Email address"
                    style={inputStyle}
                    icon={<IoMailOutline className="absolute left-3 text-gray-400 text-lg" />}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      register={register}
                      inputName="hall"
                      type="select"
                      placeholder="Hall of Residence"
                      style={inputStyle}
                      icon={<IoBusinessOutline className="absolute left-3 text-gray-400 text-lg" />}
                    />
                    <Controller
                      name="birthDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker type="signup" field={field} />
                      )}
                    />
                  </div>

                  {(isAnnex === "Annex" || isAnnex === "UGEL Hostel") && (
                    <Select
                      register={register}
                      inputName="annex"
                      type="select"
                      placeholder={`${isAnnex}`}
                      style={inputStyle}
                      icon={<IoBusinessOutline className="absolute left-3 text-gray-400 text-lg" />}
                    />
                  )}

                  <Select
                    register={register}
                    inputName="course"
                    type="select"
                    placeholder="Course"
                    style={inputStyle}
                    icon={<IoBusinessOutline className="absolute left-3 text-gray-400 text-lg" />}
                  />

                  <Select
                    register={register}
                    inputName="sex"
                    type="select"
                    placeholder="Gender"
                    style={inputStyle}
                    icon={<IoPersonOutline className="absolute left-3 text-gray-400 text-lg" />}
                  />

                  <FormInput
                    register={register}
                    inputName="contact"
                    type="tel"
                    placeholder="Contact number"
                    style={inputStyle}
                    icon={<IoCallOutline className="absolute left-3 text-gray-400 text-lg" />}
                  />

                  <button className="w-full mt-4 py-3.5 text-sm font-bold tracking-wide uppercase bg-zinc-900 text-white rounded-xl hover:bg-black hover:shadow-lg transition-all duration-300">
                    Continue
                  </button>
                </motion.div>
              )}

              {/* === STEP 2: Security === */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                  <FormInput
                    register={register}
                    inputName="password"
                    type="password"
                    placeholder="Create Password"
                    style={inputStyle}
                    icon={<IoLockClosedOutline className="absolute left-3 text-gray-400 text-lg" />}
                  />

                  <div className="space-y-1">
                    <FormInput
                      register={register}
                      inputName="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      style={inputStyle}
                      icon={<IoLockClosedOutline className="absolute left-3 text-gray-400 text-lg" />}
                    />
                    {passwordMatchError && (
                      <p className="text-xs text-red-500 font-medium px-2">{passwordMatchError}</p>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500 font-poppins px-1 py-2">
                    By continuing, you agree to our <span className="text-zinc-900 font-semibold cursor-pointer hover:underline" onClick={() => setOpenTerms(true)}>Terms of Service</span> and <span className="text-zinc-900 font-semibold cursor-pointer hover:underline" onClick={() => setOpenPrivacy(true)}>Privacy Policy</span>.
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 flex items-center justify-center text-sm font-bold bg-gray-100 text-zinc-900 rounded-xl hover:bg-gray-200 transition-all duration-300"
                    >
                      <IoArrowBackOutline className="text-lg" />
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 text-sm font-bold tracking-wide uppercase bg-zinc-900 text-white rounded-xl hover:bg-black hover:shadow-lg transition-all duration-300"
                    >
                      Continue
                    </button>
                  </div>

                  {openTerms && <Terms handleClose={setOpenTerms} />}
                  {openPrivacy && <PrivacyPolicy handleClose={setOpenPrivacy} />}
                </motion.div>
              )}

              {/* === STEP 3: Profile Picture === */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6 text-center">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-zinc-900">
                      Profile Picture
                    </label>
                    <p className="text-xs text-gray-500 pb-2">Add a photo so your community can recognize you.</p>
                  </div>

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

                  <div className="flex justify-center py-4">
                    {watch("profilePicture")?.[0] ? (
                      <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <img
                          src={URL.createObjectURL(watch("profilePicture")![0])}
                          alt="preview"
                          className="h-32 w-32 rounded-full object-cover shadow-md ring-4 ring-gray-50"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <IoCameraOutline className="text-white text-3xl" />
                        </div>
                      </div>
                    ) : (
                      <div
                        className="h-32 w-32 border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center rounded-full cursor-pointer hover:border-zinc-900 hover:bg-gray-100 transition-colors group"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IoCameraOutline className="text-gray-400 group-hover:text-zinc-900 text-3xl mb-1 transition-colors" />
                        <span className="text-[10px] text-gray-400 group-hover:text-zinc-900 font-medium uppercase tracking-wider">Upload</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3.5 flex items-center justify-center text-sm font-bold bg-gray-100 text-zinc-900 rounded-xl hover:bg-gray-200 transition-all duration-300"
                    >
                      <IoArrowBackOutline className="text-lg" />
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 text-sm font-bold tracking-wide uppercase bg-zinc-900 text-white rounded-xl hover:bg-black hover:shadow-lg transition-all duration-300"
                    >
                      Complete Signup
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* === IMAGE SECTION === */}
        <div className="hidden lg:block relative bg-[#33312e] overflow-hidden group">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Refined Gradient Overlay (keep this as-is or adjust slightly) */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#33312e]/90 via-[#33312e]/40 to-transparent z-20"></div>
  
          <img
            src="https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg"
            alt="Dagbon Students Association Signup"
            className="w-full h-full object-cover opacity-80 transform transition-transform duration-1000 "
          />

          {/* Solid Dark Veil */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#33312e]/90 via-[#33312e]/40 to-transparent z-20"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-16 left-12 right-12 text-white z-30">
            <h2 className="text-4xl font-bold text-dasalight font-rethink leading-tight mb-4 tracking-tight">
              Begin your journey <br/> with us today.
            </h2>
            <div className="w-12 h-1.5 bg-dasalight mb-5 rounded-full"></div>
            <p className="text-white/80 font-poppins text-lg leading-relaxed max-w-md">
              Connect with your heritage, access academic resources, and build lifelong networks within the university.
            </p>
          </div>
          
          
        </div>

      </motion.div>
    </div>
  );
}

export default Form;