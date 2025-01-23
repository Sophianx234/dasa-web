import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { mediaType } from '@/services/apiServices';
export type imageViewerProps = {
  images: mediaType[]
}
function ImageViewer({images}:imageViewerProps) {

  return (
      <PhotoProvider
      speed={() => 480}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
        <div className="grid grid-cols-3 mx-3 rounded-md overflow-hidden ">
          {images.map((item:mediaType , index) =>
            (<PhotoView key={index} src={item.secure_url}
          >
              <LazyLoadImage
                    effect='blur'
                    src={item.secure_url} className='size-full object-cover object-center'
                       
         />
             
            </PhotoView>)
          )}
        </div>
      </PhotoProvider>
    );
  }
export default ImageViewer
