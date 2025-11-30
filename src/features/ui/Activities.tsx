import { getVideos } from "@/services/apiServices";
import { useQuery } from "@tanstack/react-query";
import SVGLite from "./SVGLite";
import VideoPlayer from "./VideoPlayer";
import VideoSkeleton from "@/skeletons/VideoSkeleton";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

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

  const videosToShow = (data as videosResponse)?.videos.slice(0, -1); // Skip last video

  return (
    <div className="py-10 pb-20">
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

        {/* Large screens: new artistic design */}
        <div className="hidden md:block relative w-full border-t border-t-dasalight mb-14">
        </div>

        {isLoading ? (
          <div className="flex justify-center gap-4 flex-wrap">
            {Array.from({ length: 5 }, (_, i) => (
              <VideoSkeleton key={i} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="pt-10"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {videosToShow.map((video: videoI) => (
              <SwiperSlide key={video._id}>
                <VideoPlayer src={video.secure_url} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <p className="text-center text-sm font-chewy pt-10">
          Laughter, Community, and Lifelong <br /> Memories.
        </p>
      </div>

      {/* Swiper Pagination Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #000; /* Default bullet color */
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffb347; /* Active bullet color */
          opacity: 1;
        }
        /* optional: slow spin animation */
        
      `}</style>
    </div>
  );
}

export default Activities;
