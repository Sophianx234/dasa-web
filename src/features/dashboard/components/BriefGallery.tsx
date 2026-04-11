import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { API_URL, getGalleryResponse, mediaType } from "@/services/apiServices";
import { shuffleArray } from "@/features/utils/helpers";
import { useAppSelector } from "@/features/utils/hooks";
import GallerySkeleton from "@/skeletons/GallerySkeleton";
import Footer from "@/features/ui/Footer";
import ImageViewer from "./ImageViewer";
import "react-lazy-load-image-component/src/effects/blur.css";

export type BriefGalleryProps = {
  style: "overview" | "side";
};

// 1. Extracted static array OUTSIDE the component to prevent unnecessary memory reallocation on re-renders
const fallbackImageLinks = [
  {
    secure_url: "https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_fbcpup",
    _id: "1",
  },
  {
    secure_url: "https://i.ibb.co/ngfp99X/IMG-20241107-WA0007.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_xjkjwz",
    _id: "2",
  },
  {
    secure_url: "https://i.ibb.co/mRnKQkX/IMG-20241107-WA0012.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_qwkjyz",
    _id: "3",
  },
  {
    secure_url: "https://i.ibb.co/Lg6TH9k/IMG-20241107-WA0014.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_wjkszp",
    _id: "4",
  },
  {
    secure_url: "https://i.ibb.co/YtTj94H/photo-14-2024-10-31-06-51-41.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph14yt",
    _id: "5",
  },
  {
    secure_url: "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph51fn",
    _id: "6",
  },
  {
    secure_url: "https://i.ibb.co/dp1NDpf/photo-50-2024-10-31-06-52-36.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph50dp",
    _id: "7",
  },
  {
    secure_url: "https://i.ibb.co/tBWtcWq/photo-37-2024-10-31-06-52-36.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph37tb",
    _id: "8",
  },
  {
    secure_url: "https://i.ibb.co/Hg2xT65/photo-40-2024-10-31-06-53-18.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph40hg",
    _id: "9",
  },
  {
    secure_url: "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph8fp",
    _id: "10",
  },
  {
    secure_url: "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph60xw",
    _id: "11",
  },
  {
    secure_url: "https://i.ibb.co/z4Qb9CJ/das-1.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_das1zq",
    _id: "12",
  },
  {
    secure_url: "https://i.ibb.co/tw9PYjh6/m-2.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m2m2",
    _id: "13",
  },
  {
    secure_url: "https://i.ibb.co/mC2Z728H/m-4.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m4m4",
    _id: "14",
  },
  {
    secure_url: "https://i.ibb.co/c2f6VNT/das-2.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_das2da",
    _id: "15",
  },
  {
    secure_url: "https://i.ibb.co/crpGsdn/photo-38-2024-10-31-06-51-41.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph38",
    _id: "16",
  },
  {
    secure_url: "https://i.ibb.co/TchPr99/photo-5-2024-10-31-06-53-18.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph5ph5",
    _id: "17",
  },
  {
    secure_url: "https://i.ibb.co/wF6xHLBx/m-17.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m17",
    _id: "18",
  },
  {
    secure_url: "https://i.ibb.co/bMNT7kxr/m-16.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m16",
    _id: "19",
  },
  {
    secure_url: "https://i.ibb.co/LXm2NKHZ/m-15.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m15",
    _id: "20",
  },
  {
    secure_url: "https://i.ibb.co/mFT8JHP6/m-14.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m14",
    _id: "21",
  },
  {
    secure_url: "https://i.ibb.co/bj7JMKBj/m-13.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m13",
    _id: "22",
  },
  {
    secure_url: "https://i.ibb.co/KpDWHgtm/m-12.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m12",
    _id: "23",
  },
  {
    secure_url: "https://i.ibb.co/JjCCHQjC/m-11.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m11",
    _id: "24",
  },
  {
    secure_url: "https://i.ibb.co/pjc7DfZF/m-1.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m1",
    _id: "25",
  },
  {
    secure_url: "https://i.ibb.co/QFSYQW1j/m-3.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m3",
    _id: "26",
  },
  {
    secure_url: "https://i.ibb.co/8LQhwpqd/m-5.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m5",
    _id: "27",
  },
  {
    secure_url: "https://i.ibb.co/CswF0dzb/m-18.jpg",
    format: "jpg",
    public_id: "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_m5",
    _id: "28",
  },
];

function BriefGallery({ style }: BriefGalleryProps) {
  const { numMedia } = useAppSelector((store) => store.nav);

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [images, setImages] = useState<mediaType[] | null>(null);

  // Memoize shuffled array so it doesn't reshuffle on unrelated state changes
  const [shuffledFallback] = useState(
    () => shuffleArray(fallbackImageLinks, 3) as mediaType[],
  );

  // 2. Safely fetch data with Try/Catch
  const loadImgs = useCallback(
    async (pageNumber: number) => {
      if (!hasMore || isLoading) return;

      try {
        setIsLoading(true);
        const token = localStorage.getItem("token"); // Read inside function

        const { data } = await axios.get(
          `${API_URL}/media/images?field=_id,secure_url,public_id,format&page=${pageNumber}&limit=12`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        const { images: imgs, numImages } = data as getGalleryResponse;

        // Update hasMore based on returned length or total
        if (!imgs || imgs.length === 0 || numImages === 0) {
          setHasMore(false);
        } else {
          setImages((prevImages) =>
            prevImages ? [...prevImages, ...imgs] : imgs,
          );
        }
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setHasMore(false); // Stop trying if the API is failing
      } finally {
        setIsLoading(false);
      }
    },
    [hasMore, isLoading],
  );

  // 3. Bulletproof Intersection Observer Pattern
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loaderRefCallback = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore],
  );

  // Trigger load on page change
  useEffect(() => {
    if (style !== "overview") {
      loadImgs(page);
    }
  }, [page, style, loadImgs]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {/* --- OVERVIEW VIEW --- */}
      {style === "overview" && (
        <div className="mx-4 mt-8 rounded-lg pb-6">
          <h2 className="text-2xl md:text-3xl hidden  font-bold tracking-tight text-[#33312e] pb-6 pt-4 font-rethink">
            Gallery.
          </h2>
          <ImageViewer images={shuffledFallback} />
        </div>
      )}

      {/* --- SIDE/FULL VIEW --- */}
      {style === "side" && (
        <div className="mx-4 rounded-lg pb-6 pt-20">
          <div className="pt-2">
            {images && images.length > 0 && <ImageViewer images={images} />}
          </div>

          {/* Loader Element attached to ref */}
          <div ref={loaderRefCallback} className="w-full mt-4">
            {isLoading && <GallerySkeleton />}
          </div>

          {!hasMore && images && images.length > 0 && (
            <p className="text-center text-[#33312e]/50 text-sm font-poppins py-8">
              No more images to load.
            </p>
          )}

          <div className="pt-12">
            <Footer navType="dash" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default BriefGallery;
