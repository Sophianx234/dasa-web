import { increasePageNumber, setImages, setIsLoading, setNumMedia } from "@/features/slices/navSlice";
import Footer from "@/features/ui/Footer";
import { shuffleArray } from "@/features/utils/helpers";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { getGalleryResponse, mediaType } from "@/services/apiServices";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PropagateLoader } from "react-spinners";
import ImageViewer from "./ImageViewer";
export type BriefGalleryProps = {
  style: "overview" | "side";
};
function BriefGallery({ style }: BriefGalleryProps) {
  const imageLinks = [
    {
      secure_url: "https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_fbcpup",
      _id: "1",
    },
    {
      secure_url: "https://i.ibb.co/ngfp99X/IMG-20241107-WA0007.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_xjkjwz",
      _id: "2",
    },
    {
      secure_url: "https://i.ibb.co/mRnKQkX/IMG-20241107-WA0012.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_qwkjyz",
      _id: "3",
    },
    {
      secure_url: "https://i.ibb.co/Lg6TH9k/IMG-20241107-WA0014.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_wjkszp",
      _id: "4",
    },
    {
      secure_url: "https://i.ibb.co/YtTj94H/photo-14-2024-10-31-06-51-41.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph14yt",
      _id: "5",
    },
    {
      secure_url: "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph51fn",
      _id: "6",
    },
    {
      secure_url: "https://i.ibb.co/dp1NDpf/photo-50-2024-10-31-06-52-36.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph50dp",
      _id: "7",
    },
    {
      secure_url: "https://i.ibb.co/tBWtcWq/photo-37-2024-10-31-06-52-36.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph37tb",
      _id: "8",
    },
    {
      secure_url: "https://i.ibb.co/Hg2xT65/photo-40-2024-10-31-06-53-18.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph40hg",
      _id: "9",
    },
    {
      secure_url: "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph8fp",
      _id: "10",
    },
    {
      secure_url: "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_ph60xw",
      _id: "11",
    },
    {
      secure_url: "https://i.ibb.co/z4Qb9CJ/das-1.jpg",
      format: "jpg",
      public_id:
        "Dasa/media/images/user-6779a73cb1b5df55c960c388-1736508703612-549258247_das1zq",
      _id: "12",
    },
  ];
  
  const dispatch = useAppDispatch()
  
  const {page,images,numMedia,isLoading} = useAppSelector(store=>store.nav)
  const shuffledImageLinks = shuffleArray(imageLinks, 3);
  
  console.log(page)
  console.log(numMedia)
  


  async function loadMore() {
    if(!numMedia || isLoading) return
    dispatch(setIsLoading(true))
    console.log(page)
   const {data} = await axios.get(`http://localhost:8000/api/v1/media/images?field=_id,secure_url,public_id,format&page=${page}&limit=12`)
   console.log(data)
      const { images:imgs,numImages } = data as getGalleryResponse;
      console.log('media',images)

      if(!images){
        setTimeout(function(){
          dispatch(setImages(imgs))
          setIsLoading(false)
          dispatch(increasePageNumber())
          
        },2000)
        
      }else{
        dispatch(setImages([...images,...imgs]))
        setTimeout(function(){
          dispatch(setNumMedia(numImages))
          dispatch(setIsLoading(false))
          dispatch(increasePageNumber())
          
        },2000)

      }
    
    
     
  }
  

  return (
    <div>
      <div className={`mx-4  rounded-lg  pb-6 ${style === "side" && "pt-20"}`}>
        {style === "overview" && (
          <h1 className="dash-title pb-6 pt-4">Gallery</h1>
        )}

        {style === "overview" && (
          <ImageViewer images={shuffledImageLinks as mediaType[]} />
        )}
      </div>

      {style !== "overview" && (
        <>
          <InfiniteScroll
            loader={
              <div className="flex justify-center py-5">
                {numMedia ? <PropagateLoader size={18} /> : null}
              </div>
            }
            hasMore={Boolean(numMedia)}
            loadMore={loadMore}
            useWindow
          >
            <div className="pt-2 ">
             {images && <ImageViewer images={images as mediaType[]} />}
            </div>
          </InfiniteScroll>
          <div className="pt-6">
            <Footer navType="dash" />
          </div>
        </>
      )}
    </div>
  );
}

export default BriefGallery;
