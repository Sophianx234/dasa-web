import { Pagination } from "@/components/ui/pagination";
import { PaginationX } from "./Pagination";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { shuffleArray } from "@/features/utils/helpers";
import UploadButton from "../account/UploadButton";
export type BriefGalleryProps = {
    style: string
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
    
      const shuffledImageLinks = shuffleArray(imageLinks, 3)
    
    return (
        <div className="mx-4 pt-24 rounded-lg overflow-hidden pb-6">
            <h1 className="dash-title pb-6">Gallery</h1>
            <div className="grid grid-cols-3 ">

            {shuffledImageLinks.map(img=><div className="overflow-hidden"> 
                <LazyLoadImage
                    effect='blur'
                    src={img}    
         /></div>)}
            </div>
            
                { style !=='overview'&&
                <div className="pt-2">

                <PaginationX/>
                </div>}
           </div>
    )
}

export default BriefGallery
