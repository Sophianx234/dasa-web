import SVGLite from "./SVGLite";
import quote1 from "/q-2.svg";
import quote2 from "/q-3.svg";
import { motion } from "framer-motion";

export type testimonialProp = {
  testimonial: string;
  name: string;
  role: string;
  img: string;
};

function Testimonial({ testimonial, name, role, img }: testimonialProp) {
  return (
    <motion.div
      className="sm:bg-white rounded-2xl p-6 md:p-8 overflow-hidden sm:shadow-md sm:hover:shadow-xl transition-shadow duration-500 flex flex-col items-center text-center relative space-y-4 md:space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Opening Quote */}

      {/* Testimonial Text */}
      <p className="text-center text-lg md:text-xl font-bold relative z-10 px-4 md:px-2">
      <img
        src={quote2}
        alt="quote"
        className="absolute -top-3 -left-6 w-12 h-12 sm:opacity-30 opacity-40 md:w-10 md:h-10 rotate-6"
      />
        {testimonial}
      <img
        src={quote1}
        alt="quote"
        className="absolute -bottom-3 -right-6 w-12 h-12 sm:opacity-30 opacity-40 md:w-10 md:h-10 rotate-6"
      />
      </p>

      {/* Closing Quote */}

      {/* User Image */}
      <img
        src={img}
        alt={name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#ffd8a8] relative z-10"
      />

      {/* Name & Role */}
      <div className="relative z-10">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-xs md:text-sm font-bold text-gray-600">{role}</p>
      </div>

      <SVGLite type="sticks" />
    </motion.div>
  );
}

export default Testimonial;