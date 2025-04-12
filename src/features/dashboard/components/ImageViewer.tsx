import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { mediaType } from '@/services/apiServices';
import { IoCloseOutline } from 'react-icons/io5';
export type imageViewerProps = {
  images: mediaType[] ;
  type?: 'normal'|'control'
}
function ImageViewer({images, type='normal'}:imageViewerProps) {

  return (
      <PhotoProvider
      speed={() => 480}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
        <div className={`grid ${type=='normal'?'grid-cols-3':'grid-cols-2'} mx-3 rounded-md overflow-hidden  `}>
          {images.map((item:mediaType , index) =>
            (
            <div className='relative  '>
            <div className='absolute z-30  right-0 '><IoCloseOutline className='size-5'/></div>
            <PhotoView key={index}  src={item.secure_url}
          >
            
              <LazyLoadImage
                    effect='blur'
                    
                    src={item.secure_url} className=' object-cover object-center
                    aspect-[1/2]'
                    
                    
                    />
             
            </PhotoView>
            </div>
            )
          )}
        </div>
      </PhotoProvider>
    );
  }
export default ImageViewer
