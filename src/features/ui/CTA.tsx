import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTImages from "./CTImages";

function CTA() {
  // 3 distinct sizes for a dynamic, gapless mosaic style
  const sizeS = "w-14 h-14 md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem]";
  const sizeM = "w-20 h-20 md:w-24 md:h-24 lg:w-[6.5rem] lg:h-[6.5rem]";
  const sizeL = "w-28 h-28 md:w-36 md:h-36 lg:w-[10rem] lg:h-[10rem]"; // Massive centerpiece

  // 21 images mapped perfectly into a gapless 3x7 woven block
  const positionedImages = [
    // --- ROW 1 (Top) ---
    { url: "https://i.ibb.co/tBWtcWq/photo-37-2024-10-31-06-52-36.jpg", position: "top-[28%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },
    { url: "https://i.ibb.co/d2jtx5G/photo-7-2024-10-31-06-52-36.jpg", position: "top-[28%] left-[23.3%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS },
    { url: "https://i.ibb.co/pjc7DfZF/m-1.jpg", position: "top-[28%] left-[36.6%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/YtfKtdq/photo-79-2024-10-31-06-52-36.jpg", position: "top-[28%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS }, // Tucked under center
    { url: "https://i.ibb.co/fHq4Nnv/photo-72-2024-10-31-06-52-36.jpg", position: "top-[28%] left-[63.3%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/dGn3b9b/photo-56-2024-10-31-06-50-45.jpg", position: "top-[28%] left-[76.6%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS },
    { url: "https://i.ibb.co/QFSYQW1j/m-3.jpg", position: "top-[28%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },

    // --- ROW 2 (Middle) ---
    { url: "https://i.ibb.co/mC2Z728H/m-4.jpg", position: "top-[50%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },
    { url: "https://i.ibb.co/bj7JMKBj/m-13.jpg", position: "top-[50%] left-[23.3%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg", position: "top-[50%] left-[36.6%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS }, // Tucked
    { url: "https://i.ibb.co/mcC35n7/photo-1-2024-10-31-06-53-18.jpg", position: "top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50", size: sizeL }, // MASSIVE Centerpiece
    { url: "https://i.ibb.co/tw9PYjh6/m-2.jpg", position: "top-[50%] left-[63.3%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS }, // Tucked
    { url: "https://i.ibb.co/8LQhwpqd/m-5.jpg", position: "top-[50%] left-[76.6%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/GfyS2LV4/m-6.jpg", position: "top-[50%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },

    // --- ROW 3 (Bottom) ---
    { url: "https://i.ibb.co/N6WS0xVx/m-10.jpg", position: "top-[72%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },
    { url: "https://i.ibb.co/MxFVg7hM/m-9.jpg", position: "top-[72%] left-[23.3%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS },
    { url: "https://i.ibb.co/WW1r4MLT/m-8.jpg", position: "top-[72%] left-[36.6%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/v4Bt5BYj/m-7.jpg", position: "top-[72%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS }, // Tucked under center
    { url: "https://i.ibb.co/JjCCHQjC/m-11.jpg", position: "top-[72%] left-[63.3%] -translate-x-1/2 -translate-y-1/2 z-30", size: sizeM }, // Medium Pop-out
    { url: "https://i.ibb.co/KpDWHgtm/m-12.jpg", position: "top-[72%] left-[76.6%] -translate-x-1/2 -translate-y-1/2 z-20", size: sizeS },
    { url: "https://i.ibb.co/mFT8JHP6/m-14.jpg", position: "top-[72%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10", size: sizeS },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#33312e] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Background Glow behind the entire card */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dasalight/10 to-transparent pointer-events-none"></div>

          {/* Text Content (Left Side) */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left relative z-40 w-full">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-Montserrat text-white leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join <span className="text-dasalight">5,482</span> <br className="hidden lg:block" />
              other Members
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hang out, support each other, and have fun while making a real impact in the Dagbon community and beyond.
            </motion.p>
            
            <motion.div 
              className="pt-4 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="signup"
                className="group inline-flex items-center gap-3 bg-dasalight text-[#33312e] font-bold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white hover:scale-105 shadow-lg transition-all duration-300"
              >
                Get instant access
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" /> 
              </Link>
            </motion.div>
          </div>

          {/* Floating Images Cluster (Right Side) */}
          <div className="w-full lg:w-[45%] h-[320px] sm:h-[380px] lg:h-[450px] relative z-10">
            {/* Soft decorative ambient glow behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-dasalight/25 blur-[90px] rounded-full pointer-events-none"></div>

            {positionedImages.map((img, idx) => (
              <motion.div
                key={idx}
                // Removed rounded-full here to prevent it from clipping the hover shadow/scale
                // hover:!z-50 ensures any hovered item comes to the absolute front
                className={`absolute ${img.position} rounded-full size-full hover:!z-50 group`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
              >
                {/* Continuous floating animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + (idx % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CTImages
                    imageUrl={img.url}
                    // Added: block, aspect-square, overflow-hidden to strictly enforce perfect mathematical circles
                    className={`${img.size} block aspect-square rounded-full overflow-hidden object-cover ring-2 md:ring-4 ring-[#33312e] shadow-xl group-hover:scale-110 transition-transform duration-300 cursor-pointer`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;