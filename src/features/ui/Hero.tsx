"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { motion } from "framer-motion";

export type slidesImagesType = {
  url: string;
};

const slideImages: slidesImagesType[] = [
  { url: "https://i.ibb.co/z4Qb9CJ/das-1.jpg" },
  { url: "https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg" },
  { url: "https://i.ibb.co/dg27dzH/photo-32-2024-10-31-06-53-18.jpg" },
  { url: "https://i.ibb.co/k9Gh1t0/photo-52-2024-10-31-06-52-36.jpg" },
  { url: "https://i.ibb.co/ns2h563/photo-46-2024-10-31-06-50-45.jpg" },
  { url: "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg" },
  { url: "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg" },
];

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="mt-[5.6rem] relative max-h-[25rem] h-[25rem] sm:h-[50rem] sm:max-h-[30rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          speed={1500}
          className="w-full h-full"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Title */}
        <motion.div
          className="text-[#ffe8cbbd] absolute top-[10.5rem] left-0 z-10 w-fit mx-auto right-0 flex justify-center text-center font-extrabold font-Montserrat text-3xl sm:text-6xl"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Dagbon Tooni Tibu <br /> Shikuru Bihi Nuu Beni
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.div
        className="pt-10 bg-dasalight uppercase text-xs pb-8 font-mulish px-1"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-bold text-center sm:text-lg text-[#33312e]">
          Your gateway to a world of networking, mentorship, and cultural
          exchange.
        </h1>
      </motion.div>

      {/* Custom Swiper navigation button & pagination colors */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffd8a8;
          font-size: 2rem; /* larger arrows */
          z-index: 50 !important;
        }
        .swiper-pagination-bullet {
          background-color: #fff; /* bullet color */
          opacity: 0.8;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffd8a8; /* active bullet color */
          opacity: 1;
        }

      `}</style>
    </div>
  );
}

export default Hero;
