import React, { useState } from "react";
import { getVideos } from "@/services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SVGLite from "./SVGLite";
import VideoPlayer from "./VideoPlayer";
import VideoSkeleton from "@/skeletons/VideoSkeleton";

export interface videoI {
  format: string;
  public_id: string;
  secure_url: string;
  _id: string;
}

export type videosResponse = {
  numVideos: number;
  status: string;
  videos: videoI[];
};

function Activities() {
  const { isLoading, data } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  const videosToShow = (data as videosResponse)?.videos.slice(0, -1) || [];

  // Slider State
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNext = () => {
    if (!videosToShow.length) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % videosToShow.length);
  };

  const handlePrev = () => {
    if (!videosToShow.length) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? videosToShow.length - 1 : prev - 1));
  };

  // Framer Motion variants for cross-fade/slide
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="py-10 pb-20 overflow-hidden">
      <h1 className="text-center text-2xl md:text-4xl font-bold font-rethink">
        Experience the Fun with Us
      </h1>
      <p className="text-center px-2 text-sm font-Poppins pt-1 pb-4">
        Join the Fun! Where Culture, Friendship, and Growth Come Alive
      </p>

      {/* Decorative Section */}
      <div className="pt-2">
        {/* Small screens: original SVGLite */}
        <div className="block md:hidden text-center mb-8 mx-auto w-fit">
          <SVGLite type="sticks" />
        </div>

        {/* Large screens: border decoration */}
        <div className="hidden md:block relative w-full border-t border-t-dasalight mb-14" />

        {isLoading ? (
          <div className="flex justify-center max-w-4xl mx-auto w-full">
            <VideoSkeleton />
          </div>
        ) : videosToShow.length > 0 ? (
          <div className="max-w-4xl mx-auto px-4 md:px-0">
            {/* Video Container */}
            <div className="relative z-10 w-full flex justify-center items-center min-h-[300px] md:min-h-[500px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex justify-center"
                >
                  <div className="w-full md:w-[80%] shadow-lg rounded-xl overflow-hidden bg-black">
                     <VideoPlayer src={videosToShow[activeIndex].secure_url} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-12 md:w-[80%] mx-auto gap-6 md:gap-0">
              
              {/* Desktop fraction indicator (Optional extra touch from inspiration) */}
              <p className="hidden md:block text-sm font-mono tracking-widest text-zinc-500">
                {activeIndex + 1} / {videosToShow.length}
              </p>

              {/* Custom Pagination Bullets (Maintained original colors) */}
              <div className="flex items-center gap-2">
                {videosToShow.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-dasadeep opacity-100"
                        : "w-2.5 bg-black opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev/Next Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="group p-3 md:p-4 border border-zinc-200 hover:border-white hover:bg-zinc-900 hover:text-white transition-colors duration-300 rounded-full focus:outline-none"
                  aria-label="Previous Video"
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={handleNext}
                  className="group p-3 md:p-4 border border-zinc-200 hover:border-white hover:bg-zinc-900 hover:text-white transition-colors duration-300 rounded-full focus:outline-none"
                  aria-label="Next Video"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-zinc-500">No videos available.</p>
        )}

        <p className="text-center text-sm font-chewy pt-12 md:pt-16">
          Laughter, Community, and Lifelong <br /> Memories.
        </p>
      </div>
    </div>
  );
}

export default Activities;