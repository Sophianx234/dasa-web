import React from "react";
import { motion } from "framer-motion";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { LiaSeedlingSolid, LiaSlideshare } from "react-icons/lia";
import { PiUsersFourFill } from "react-icons/pi";

// 1. Abstracted data for a clean, DRY component structure
const coreValues = [
  {
    id: "01",
    icon: FaScaleUnbalanced,
    title: "Integrity",
    desc: "We uphold honesty, accountability, and transparency in all our actions, believing that true leadership grows from unwavering moral principles.",
  },
  {
    id: "02",
    icon: LiaSlideshare,
    title: "Teamwork",
    desc: "We achieve more together. Through collaboration and mutual respect, we build relationships that empower every member to contribute and succeed.",
  },
  {
    id: "03",
    icon: PiUsersFourFill,
    title: "Unity & Community",
    desc: "We are one family, bonded by shared heritage and purpose. Our strength lies in unity and in creating a welcoming space for all.",
  },
  {
    id: "04",
    icon: LiaSeedlingSolid,
    title: "Growth & Learning",
    desc: "We value lifelong learning and curiosity. Through innovation and adaptability, we inspire growth within and beyond the DaSA community.",
  },
];

// Framer Motion staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Values() {
  return (
    <section className="w-full py-24 md:py-32 px-6 bg-zinc-900 relative overflow-hidden">
      
      {/* Subtle Background Glow - Changed to a soft orange glow for the dark background */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === HEADER === */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-dasadeep mb-6 rounded-full"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-rethink font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            What We <span className="text-dasadeep">Stand For.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 font-poppins leading-relaxed max-w-2xl"
          >
            The core principles that unite us, inspire our journey, and guide our service to Dagbon and beyond.
          </motion.p>
        </div>

        {/* === VALUES GRID === */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {coreValues.map((value) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={value.id}
                variants={cardVariants}
                className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-zinc-700/50 hover:border-dasadeep/30 hover:bg-zinc-800 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {/* Number Watermark - Adjusted for dark mode */}
                <div className="absolute top-6 right-8 text-zinc-700/30 font-rethink font-extrabold text-6xl pointer-events-none transition-colors duration-500 group-hover:text-dasadeep/10">
                  {value.id}
                </div>

                {/* Icon Container - Adjusted for dark mode */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-8 group-hover:bg-dasadeep group-hover:border-dasadeep group-hover:scale-110 transition-all duration-500">
                  <Icon className="size-8 text-dasadeep group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Text Content - Adjusted for dark mode */}
                <h3 className="font-rethink font-bold text-2xl text-white mb-4 group-hover:text-dasadeep transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-poppins text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {value.desc}
                </p>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-8 right-8 h-[3px] bg-gradient-to-r from-dasadeep to-[#ffb085] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-full"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}