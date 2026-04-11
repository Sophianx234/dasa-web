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
      className="bg-white border border-[#ffd8a8]/40 rounded-[1.5rem] p-8 md:p-10 hover:shadow-[0_8px_30px_rgba(230,126,34,0.06)] hover:border-[#ffd8a8] transition-all duration-300 flex flex-col h-full group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Minimalist Typographic Quote Mark */}
      <span className="text-[#e67e22]/40 group-hover:text-[#e67e22] transition-colors duration-300 text-6xl font-serif leading-none block -mb-4">
        &ldquo;
      </span>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1 mb-10 relative z-10">
        {testimonial}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover bg-gray-50"
        />
        <div>
          <p className="font-bold text-[#33312e]">{name}</p>
          <p className="text-xs md:text-sm font-semibold text-[#e67e22] tracking-wide uppercase mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonial;