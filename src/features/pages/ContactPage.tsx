import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { MapPin, Mail, Phone, Send, ArrowRight } from "lucide-react";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you soon.", {
      icon: '✨',
      style: {
        borderRadius: '16px',
        background: '#33312e',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
      },
    });
    
    reset();
    setIsSubmitting(false);
  };

  // Shared premium input style
  const inputStyle = "w-full bg-[#f9f7f4]/50 border border-gray-200 hover:border-gray-300 focus:bg-white focus:border-dasadeep focus:ring-1 focus:ring-dasadeep text-sm rounded-xl px-4 py-3.5 transition-all duration-300 outline-none font-poppins text-[#33312e] placeholder:text-gray-400";

  return (
    <>
    <Header/>
    <section className="relative w-full bg-[#f9f7f4] py-24 md:py-32 overflow-hidden min-h-screen flex items-center">
      
      {/* === BACKGROUND WATERMARK === */}
      <div className="absolute top-20 right-0 md:-right-10 text-[8rem] md:text-[18rem] font-rethink font-black text-[#33312e]/[0.02] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        HELLO.
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* === LEFT COLUMN: CONTACT INFO === */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col pt-4"
        >
          {/* Structural Line & Label */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[2px] w-12 bg-dasadeep rounded-full"></div>
            <span className="font-mono text-sm tracking-[0.2em] text-dasadeep font-bold uppercase">
              Get in Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#33312e] font-rethink leading-[1.05] tracking-tighter mb-6">
            Let's start a <br className="hidden lg:block" />
            <span className="text-dasadeep/60">conversation.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#595652] font-poppins leading-relaxed mb-12 max-w-md">
            Whether you have a question about membership, partnerships, or upcoming events, our executive team is here to help.
          </p>

          {/* Contact Details List */}
          <div className="space-y-8">
            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-dasadeep group-hover:shadow-md transition-all duration-300">
                <MapPin className="w-5 h-5 text-dasadeep" />
              </div>
              <div className="pt-1">
                <h3 className="font-rethink font-bold text-[#33312e] text-lg">Office Location</h3>
                <p className="font-poppins text-[#595652] mt-1 leading-relaxed">
                  University of Ghana, Legon Campus<br/>
                  Accra, Ghana
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-dasadeep group-hover:shadow-md transition-all duration-300">
                <Mail className="w-5 h-5 text-dasadeep" />
              </div>
              <div className="pt-1">
                <h3 className="font-rethink font-bold text-[#33312e] text-lg">Email Us</h3>
                <a href="mailto:info@dasa-ug.com" className="font-poppins text-[#595652] hover:text-dasadeep transition-colors mt-1 inline-block">
                  info@dasa-ug.com
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-dasadeep group-hover:shadow-md transition-all duration-300">
                <Phone className="w-5 h-5 text-dasadeep" />
              </div>
              <div className="pt-1">
                <h3 className="font-rethink font-bold text-[#33312e] text-lg">Call Us</h3>
                <a href="tel:+233540000000" className="font-poppins text-[#595652] hover:text-dasadeep transition-colors mt-1 inline-block">
                  +233 (0) 54 000 0000
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === RIGHT COLUMN: FLOATING FORM === */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 lg:pl-10"
        >
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-[#33312e]/5 border border-gray-100 relative">
            
            {/* Form Header */}
            <h2 className="text-2xl font-bold font-rethink text-[#33312e] mb-8">Send us a message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    type="text"
                    placeholder="First Name"
                    className={inputStyle}
                  />
                  {errors.firstName && <span className="text-red-500 text-xs font-medium px-2 mt-1 block">{errors.firstName.message}</span>}
                </div>

                {/* Last Name */}
                <div>
                  <input
                    {...register("lastName", { required: "Last name is required" })}
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                  />
                  {errors.lastName && <span className="text-red-500 text-xs font-medium px-2 mt-1 block">{errors.lastName.message}</span>}
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  type="email"
                  placeholder="Email Address"
                  className={inputStyle}
                />
                {errors.email && <span className="text-red-500 text-xs font-medium px-2 mt-1 block">{errors.email.message}</span>}
              </div>

              {/* Subject */}
              <div>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className={inputStyle}
                />
                {errors.subject && <span className="text-red-500 text-xs font-medium px-2 mt-1 block">{errors.subject.message}</span>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="How can we help you?"
                  rows={5}
                  className={`${inputStyle} resize-none pt-4`}
                />
                {errors.message && <span className="text-red-500 text-xs font-medium px-2 mt-1 block">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-dasadeep/30 ${
                    isSubmitting 
                      ? "opacity-70 cursor-not-allowed" 
                      : "bg-zinc-900"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
      <Toaster position="bottom-right" />
    </section>
    <Footer/>
    </>
  );
}