import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type AboutParagraphProps = {
  title?: string;
  content: string;
  index: number;
  icon: LucideIcon | React.ElementType; // Accept a component as a prop
};

function AboutParagraph({ title, content, index, icon: Icon }: AboutParagraphProps) {
  // Format the index to always be two digits (e.g., 01, 02)
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      // pl-10 pushes the text to the right, making room for the timeline node
      className="relative pl-10 md:pl-14 group pb-12 md:pb-16 last:pb-0"
    >
      {/* === TIMELINE NODE / ICON ===
        Sits exactly on the parent container's left border.
        -left-[21px] perfectly centers this 40px (w-10) circle on the 2px line.
      */}
      <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-dasalight border-2 border-zinc-400 flex items-center justify-center group-hover:border-dasadeep group-hover:bg-white group-hover:scale-110 transition-all duration-500 z-10 shadow-sm">
        <Icon className="w-4 h-4 text-zinc-400 group-hover:text-dasadeep transition-colors duration-300" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 -mt-1.5">
        {title ? (
          <div className="mb-4">
            <span className="block text-dasadeep font-mono text-xs md:text-sm tracking-widest mb-2 font-semibold uppercase transition-transform duration-300 group-hover:translate-x-1">
              {formattedIndex} &mdash;
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#33312e] font-rethink leading-snug">
              {title}
            </h2>
          </div>
        ) : (
          <div className="mb-3">
            <span className="block text-dasadeep font-mono text-xs md:text-sm tracking-widest font-semibold uppercase transition-transform duration-300 group-hover:translate-x-1">
              {formattedIndex} &mdash;
            </span>
          </div>
        )}

        <p className="text-base md:text-lg leading-relaxed md:leading-[1.8] text-[#33312e]/75 font-poppins sm:text-justify md:text-left transition-colors duration-300 group-hover:text-[#33312e]/90">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

export default AboutParagraph;