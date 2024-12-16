import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export type imageViewerProps = {
  images: string[]
}
function ImageViewer({images}:imageViewerProps) {

 
    return (
      <PhotoProvider>
        <div className="grid grid-cols-3 w-full rounded-md overflow-hidden ">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <LazyLoadImage
                    effect='blur'
                    src={item} 
                       
         />
             
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    );
  }
export default ImageViewer
