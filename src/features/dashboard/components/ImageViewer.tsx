import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export type imageViewerProps = {
  images: string[]
}
function ImageViewer({images}:imageViewerProps) {

 
    return (
      <PhotoProvider
      speed={() => 480}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
        <div className="grid grid-cols-3 w-full rounded-md overflow-hidden ">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}
          >
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
