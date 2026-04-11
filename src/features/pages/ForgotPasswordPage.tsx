import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoMailOutline, IoArrowBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Toaster } from "react-hot-toast";
import FormInput from "../ui/FormInput";
import { useForgotPassword } from "../utils/hooks";
import { DasaLogo } from "../ui/DasaLogo";

type forgotpassFormValues = {
  email: string;
};

function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<forgotpassFormValues>();
  const { handleforgotPassword } = useForgotPassword();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: forgotpassFormValues) => {
    if (!data.email) return;

    const result = await Swal.fire({
      title: "Reset Password?",
      text: "We will send a secure password reset link to your email.",
      icon: "info",
      heightAuto: false,
      backdrop: false,
      showCancelButton: true,
      confirmButtonColor: "#18181b", // Matches zinc-900 theme
      cancelButtonColor: "#f3f4f6", // Light gray
      cancelButtonText: "<span style='color: #18181b'>Cancel</span>",
      confirmButtonText: "Yes, send link",
      customClass: {
        popup: 'rounded-3xl shadow-2xl border border-gray-100 font-poppins',
        title: 'font-rethink text-2xl font-bold text-[#33312e]',
        confirmButton: 'rounded-xl font-bold tracking-wide',
        cancelButton: 'rounded-xl font-bold tracking-wide transition-colors',
      }
    });

    if (result.isConfirmed) {
      setIsSubmitting(true);
      try {
        await handleforgotPassword(data.email);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Shared premium input style matching your new design system
  const inputStyle = "bg-white border border-gray-200 hover:border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm  transition-all";

  return (
    <div className="  flex items-center justify-center h-dvh overflow-hidden bg-gray-50/50 ">
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full  min-h-screen  bg-white  overflow-hidden grid lg:grid-cols-[1fr_1.2fr]  "
      >
        
        {/* === FORM SECTION === */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative 0">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-2 mb-8">
            <DasaLogo clns="text-sm" title="Dagbon Students Association" />
            <h1 className="font-rethink text-3xl md:text-4xl font-extrabold tracking-tight text-[#33312e] leading-[1.1]">
              Reset Password.
            </h1>
            <p className="text-[#33312e]/70 text-sm font-poppins mt-2 max-w-xs mx-auto">
              Enter your email address and we'll send you instructions to securely reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-6">
            
            {/* Email Input */}
            <div className="space-y-1">
              <FormInput
                register={register}
                inputName="email"
                type="email"
                placeholder="Email address"
                style={inputStyle}
                icon={<IoMailOutline className="absolute left-3 text-gray-400 text-lg pointer-events-none" />}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium px-2 pt-1">
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className={`w-full relative flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 ${
                isSubmitting
                  ? "bg-zinc-900/70 cursor-not-allowed text-white/50"
                  : "bg-zinc-900 text-white hover:bg-black hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending Link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>

            {/* Back to Login Footer */}
            <div className="flex justify-center pt-6">
              <Link
                to="/login"
                className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors group"
              >
                <IoArrowBackOutline className="text-lg transform transition-transform group-hover:-translate-x-1" />
                Return to Log in
              </Link>
            </div>
            
          </form>
        </div>

        {/* === IMAGE SECTION === */}
        <div className="hidden lg:block relative bg-[#33312e] overflow-hidden group">
          <img
            src="https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg"
            alt="Dagbon Students Association Security"
            className="w-full h-full object-cover opacity-80 transform transition-transform duration-1000 "
          />

          {/* Solid Dark Veil */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#33312e]/90 via-[#33312e]/40 to-transparent z-20"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-16 left-12 right-12 text-white z-30">
            <h2 className="text-4xl font-bold text-dasalight font-rethink leading-tight mb-4 tracking-tight">
              Secure your <br/> account.
            </h2>
            <div className="w-12 h-1.5 bg-dasalight mb-5 rounded-full"></div>
            <p className="text-white/80 font-poppins text-lg leading-relaxed max-w-md">
              We are committed to protecting your privacy and ensuring your academic journey remains uninterrupted.
            </p>
          </div>
          
          
        </div>

      </motion.div>

      <Toaster position="top-center" toastOptions={{ className: 'font-poppins text-sm rounded-2xl shadow-xl' }} />
    </div>
  );
}

export default ForgotPasswordPage;