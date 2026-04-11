import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MessageSquare, UsersRound, Globe } from "lucide-react";

const IMPACT_IMAGE_SRC = "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg";

export default function Impact() {
  // A single intersection observer for the entire stats block
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  return (
    <section className="w-full bg-dasalight py-20 md:py-32 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 pointer-events-none rounded-l-full blur-3xl transform translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* === LEFT: IMAGE SECTION === */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            src={IMPACT_IMAGE_SRC}
            alt="Dagbon Students Association Impact"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle overlay to give the image a cinematic, premium depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#33312e]/60 via-[#33312e]/10 to-transparent mix-blend-multiply"></div>
        </motion.div>

        {/* === RIGHT: TEXT & STATS SECTION === */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-[#33312e] rounded-full"></div>
              <span className="text-[#33312e] font-mono text-sm tracking-widest font-bold uppercase">
                Our Global Reach
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-rethink font-extrabold text-[#33312e] leading-[1.1] tracking-tight">
              Impact in <br className="hidden md:block" /> Numbers.
            </h2>
            <p className="text-[#33312e]/75 font-poppins text-lg mt-6 max-w-lg leading-relaxed">
              We are rapidly growing our network, fostering communication, and building a stronger, more united Dagbon student community across the globe.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div ref={ref} className="grid grid-cols-2 gap-8 md:gap-12">
            
            {/* Stat 1: Messages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col border-l-2 border-[#33312e]/20 pl-5 md:pl-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#33312e]/10 flex items-center justify-center mb-5">
                <MessageSquare className="w-5 h-5 text-[#33312e]" />
              </div>
              <div className="text-5xl md:text-6xl font-rethink font-extrabold text-[#33312e] tracking-tighter">
                {inView ? <CountUp start={0} end={100} duration={2.5} separator="," /> : "0"}
                <span className="text-4xl md:text-5xl">M</span>
              </div>
              <p className="font-poppins text-[#33312e]/70 mt-2 font-medium">
                Messages sent
              </p>
            </motion.div>

            {/* Stat 2: Users */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col border-l-2 border-[#33312e]/20 pl-5 md:pl-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#33312e]/10 flex items-center justify-center mb-5">
                <UsersRound className="w-6 h-6 text-[#33312e]" />
              </div>
              <div className="text-5xl md:text-6xl font-rethink font-extrabold text-[#33312e] tracking-tighter">
                {inView ? <CountUp start={0} end={100} duration={2.5} separator="," /> : "0"}
                <span className="text-4xl md:text-5xl text-dasadeep">+</span>
              </div>
              <p className="font-poppins text-[#33312e]/70 mt-2 font-medium">
                Active users
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}