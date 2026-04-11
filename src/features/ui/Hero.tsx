"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Users, Lightbulb, Earth } from "lucide-react";

import { motion } from "framer-motion";
import FeaturesBanner from "./FeaturesBanner";

export type SlidesImagesType = {
  url: string;
};

const slideImages: SlidesImagesType[] = [
  { url: "https://i.ibb.co/z4Qb9CJ/das-1.jpg" },
  { url: "https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg" },
  { url: "https://i.ibb.co/dg27dzH/photo-32-2024-10-31-06-53-18.jpg" },
  { url: "https://i.ibb.co/k9Gh1t0/photo-52-2024-10-31-06-52-36.jpg" },
  { url: "https://i.ibb.co/ns2h563/photo-46-2024-10-31-06-50-45.jpg" },
  { url: "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg" },
  { url: "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col mt-[5.6rem]">
      
      {/* Slider Container */}
      <motion.div
        // CHANGED: Restored mobile/sm heights, added md: prefix to the full-screen calc
        className="relative w-full h-[55vh] min-h-[400px] sm:h-[65vh] md:h-[calc(100vh-5.6rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          speed={1500}
          className="w-full h-full"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative h-full w-full ">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
                {/* Restored Solid Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 sm:bg-black/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Title Overlay - Flawlessly Centered */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none">
          <motion.h1
            className="text-[#ffe8cb] text-center font-extrabold font-Montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Dagbon Tooni Tibu <br />
            <span className="text-white">Shikuru Bihi Nuu Beni</span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Description Banner */}


      <FeaturesBanner />

      {/* Scoped Custom Swiper Overrides */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffd8a8 !important;
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          background-color: #ffffff !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffd8a8 !important;
          opacity: 1 !important;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}