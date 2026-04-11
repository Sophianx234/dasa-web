import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// The user data combined with formatted IDs for the minimalist UI
const testimonials = [
  {
    id: "01",
    quote: "Being part of DaSA has completely transformed my university experience. I’ve built confidence, gained leadership skills, and made friendships that feel like family.",
    name: "Sualihatu Saeed",
    role: "Member",
    img: "https://i.ibb.co/WpNrZ3Q/photo-41-2024-10-31-06-51-41.jpg",
  },
  {
    id: "02",
    quote: "I joined DaSA a few months ago and already feel at home. Everyone is welcoming, and the events help me stay connected to my roots while enjoying campus life.",
    name: "Mohammed Muntaqah",
    role: "Member",
    img: "https://i.ibb.co/TvB4H0N/photo-93-2024-10-31-06-52-36.jpg",
  },
  {
    id: "03",
    quote: "DaSA gave me a platform to showcase my small business. I’ve grown my customer base and even found partners to collaborate with. The support here is unmatched.",
    name: "Osman Tipagra",
    role: "Member",
    img: "https://i.ibb.co/hLC8Kkv/photo-24-2024-10-31-06-50-45.jpg",
  },
  {
    id: "04",
    quote: "In DaSA, I learned that leadership is about service, just like in Dagbon. The respect, unity, and strength of our culture are what drive us forward.",
    name: "Rukaya Mohammed",
    role: "Member",
    img: "https://i.ibb.co/sH5c2wh/photo-6-2024-10-31-06-53-18.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Ultra-smooth animation variants for the text sliding cross-fade
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-[#fffcf8] text-[#33312e] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimalist Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-dasadeep px-4 py-1.5 rounded-full bg-[#fff4e6]  text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Member Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold font-Montserrat tracking-tight mb-6"
          >
            Community Voices.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-[#ffd8a8] origin-left rounded-full"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative border-t border-b border-[#33312e]/10 py-16 md:py-24 min-h-[450px] flex flex-col justify-center">
          
          {/* Faded Background Quote Icon */}
          <div className="absolute top-12 left-0 text-[#ffd8a8] pointer-events-none">
            <Quote className="w-24 h-24 md:w-40 md:h-40 rotate-180 opacity-30" fill="currentColor" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-10 md:gap-14"
              >
                {/* Quote Text */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-[#33312e]">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info Block */}
                <div className="flex items-center gap-5 md:gap-6">
                  {/* Avatar */}
                  <img 
                    src={testimonials[activeIndex].img} 
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm bg-[#ffd8a8]/20"
                  />
                  
                  {/* Decorative Line */}
                  <span className="hidden md:block h-[1px] w-12 bg-[#33312e]/20" />
                  
                  {/* Name & Role */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[#33312e]">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm font-semibold uppercase tracking-widest text-dasadeep mt-1">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-10">
          
          {/* Index Counter */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-mono font-bold text-[#33312e]">
              {testimonials[activeIndex].id}
            </span>
            <span className="text-[#33312e]/30">/</span>
            <span className="text-sm font-mono text-[#33312e]/50">
              0{testimonials.length}
            </span>
          </div>
          
          {/* Arrow Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="group p-4 rounded-full border border-[#33312e]/10 bg-white hover:bg-[#33312e] hover:border-[#33312e] hover:text-[#fffcf8] transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={handleNext}
              className="group p-4 rounded-full border border-[#33312e]/10 bg-white hover:bg-[#33312e] hover:border-[#33312e] hover:text-[#fffcf8] transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}