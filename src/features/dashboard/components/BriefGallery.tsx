import Footer from "@/features/ui/Footer";
import { shuffleArray } from "@/features/utils/helpers";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageViewer from "./ImageViewer";
import { PaginationX } from "./Pagination";
import { useEffect, useRef, useState } from "react";
import { useGallery } from "@/features/utils/hooks";
import { PropagateLoader } from "react-spinners";
export type BriefGalleryProps = {
    style: "overview"|'side'
}
function BriefGallery({style}:BriefGalleryProps) {
    
    const imageLinks = [
        "https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg",
        "https://i.ibb.co/ngfp99X/IMG-20241107-WA0007.jpg",
        "https://i.ibb.co/mRnKQkX/IMG-20241107-WA0012.jpg",
        "https://i.ibb.co/Lg6TH9k/IMG-20241107-WA0014.jpg",
        "https://i.ibb.co/YtTj94H/photo-14-2024-10-31-06-51-41.jpg",
        "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/dp1NDpf/photo-50-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/tBWtcWq/photo-37-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/Hg2xT65/photo-40-2024-10-31-06-53-18.jpg",
        "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg",
        "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg",
        "https://i.ibb.co/z4Qb9CJ/das-1.jpg",
    
    
    ];
    const [page, setPage] = useState<number>(1)
    const [images,setImages] = useState<string[]|null>(null)
    const {isLoading,error,data} = useGallery(page,12)
    const [isIntersecting,setIsIntersecting] = useState<boolean>(false)
    const [hasMore,setHasMore] = useSate<boolean>(false)
    const spinnerRef = useRef<HTMLDivElement|null>(null)
      const shuffledImageLinks = shuffleArray(imageLinks, 3)
    useEffect(function(){
        const ref = spinnerRef.current
        const observer = new IntersectionObserver(function([entry]){
            setIsIntersecting(entry.isIntersecting)
        },{
            root: null,
            rootMargin: '0px',
            threshold: 1
        })
        if(spinnerRef.current){
            observer.observe(spinnerRef.current)
        }
        return ()=> observer.unobserve(ref as HTMLDivElement)
    },[spinnerRef])
    return (
        <div>

        <div className={`mx-4  rounded-lg  pb-6 ${style==='side' && 'pt-20'}`}>
            {style === 'overview'&&<h1 className="dash-title pb-6 pt-4">Gallery</h1>}
           

            
                { style==='overview'&&<ImageViewer images={shuffledImageLinks}/>}
            </div>
            
                { style !=='overview'&&
                <div className="pt-2 ">
                    <ImageViewer images={shuffledImageLinks}/>
                    <div className="flex justify-center py-5">

                    <PropagateLoader size={18} ref={spinnerRef} />
                    </div>

                <div className="pt-6">

                <Footer navType="dash"/>
                </div>

                </div>}
        </div>
    )
}

export default BriefGallery
