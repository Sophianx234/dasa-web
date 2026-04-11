import { Users, Lightbulb, Earth } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesBanner() {
  return (
    <>
    <motion.div
      className="bg-[#faf8f5] py-6 sm:block hidden md:py-10 px-4 sm:px-6 shadow-inner"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl sm:max-w-6xl mx-auto text-center">
        <h2 className="font-mulish font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-base text-[#33312e] leading-relaxed flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-x-4 md:gap-y-3">
          
          <span className="flex items-center gap-1.5 md:gap-3">
            <Users 
              strokeWidth={1.5} 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-zinc-900 hover:scale-110 transition-transform duration-300" 
            />
            Your gateway to a world of networking
          </span>
          
          <span className="flex items-center gap-1.5 md:gap-3">
            <Lightbulb 
              strokeWidth={1.5} 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-zinc-900 hover:scale-110 transition-transform duration-300" 
            />
            mentorship
          </span>
          
          <span className="flex items-center gap-1.5 md:gap-3">
            <Earth 
              strokeWidth={1.5} 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-zinc-900 hover:scale-110 transition-transform duration-300" 
            />
            and cultural exchange
          </span>
          
        </h2>
      </div>
    </motion.div>
 {/*Rest of the Hero component remains unchanged*/}
    <motion.div
        className="bg-[#faf8f5] py-10 sm:hidden block px-6 sm:px-12 shadow-inner"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Decorative Icons Group */}
          <div className="flex items-center justify-center gap-6 mb-5 text-[#33312e]/70">
            <Users size={26} strokeWidth={1.5} className="hover:text-zinc-900 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            <Lightbulb size={26} strokeWidth={1.5} className="hover:text-zinc-900 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            <Earth size={26} strokeWidth={1.5} className="hover:text-zinc-900 transition-colors duration-300" />
          </div>

          <h2 className="font-mulish font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg text-[#33312e] leading-relaxed">
            Your gateway to a world of networking, mentorship, and cultural exchange.
          </h2>
          
        </div>
      </motion.div>
      </>
  );
}