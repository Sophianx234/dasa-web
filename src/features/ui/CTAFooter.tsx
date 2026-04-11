import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTAFooter() {
  const imageUrl = "https://i.ibb.co/hH6qRBM/photo-31-2024-10-31-06-51-41.jpg";

  // Framer Motion variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#33312e] flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* === LEFT SIDE: IMAGE WITH ARCHITECTURAL REVEAL === */}
      <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[700px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={imageUrl}
            alt="Association members together"
            className="w-full h-full object-cover"
          />
          {/* Refined gradient: purely darkens the image to blend seamlessly without looking muddy */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#33312e] via-[#33312e]/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#33312e] via-transparent to-transparent"></div>
        </motion.div>
      </div>

      {/* === RIGHT SIDE: TYPOGRAPHY & CTA === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-24 md:py-32 md:px-12 lg:px-20 xl:px-24 z-10 -mt-20 lg:mt-0">
        <motion.div 
          className="max-w-xl mx-auto lg:mx-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#fef4e9] leading-[1.05] mb-6 font-rethink"
          >
            Be A Part of 
            the Association.
          </motion.h2>

          {/* Animated Structural Line (Inspired by Testimonials) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-dasalight origin-left mb-10"
          />

          {/* Context/Paragraph */}
          <motion.div variants={itemVariants} className="relative mb-12">
            {/* Minimalist structural border instead of a standard left-border */}
            <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-[#fef4e9]/20 hidden md:block" />
            <p className="text-[#fef4e9]/80 font-poppins text-lg lg:text-xl leading-relaxed">
              DaSA isn’t just an association—it’s a living testament to the strength and resilience of the Dagbon people. Join us as we celebrate our culture, support each other, and strive for excellence in everything we do.
            </p>
          </motion.div>

          {/* === Elevated Newsletter Input / CTA === */}
          <motion.form 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-grow">
              <input 
                type="email" 
                className="w-full bg-transparent border border-[#fef4e9]/20 text-[#fef4e9] placeholder:text-[#fef4e9]/40 font-mono text-sm tracking-widest uppercase p-4 focus:border-dasalight focus:ring-1 focus:ring-dasalight focus:outline-none transition-all duration-300 rounded-full" 
                placeholder="Enter your email" 
                aria-label="Email subscription"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="group flex rounded-full items-center justify-center gap-3 px-8 py-4 bg-dasalight font-bold tracking-wider uppercase text-[#33312e] text-sm hover:bg-[#fef4e9] hover:text-[#33312e] transition-colors duration-300 focus:outline-none  whitespace-nowrap"
            >
              Ti Chama 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
          
          <motion.p variants={itemVariants} className="text-[#fef4e9]/40 text-xs font-mono mt-4 uppercase tracking-widest">
            Join 5,480+ members today.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTAFooter;