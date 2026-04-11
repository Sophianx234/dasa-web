import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { mediaType } from '@/services/apiServices';
import { IoCloseOutline } from 'react-icons/io5';
import { useDeleteImage } from '@/features/utils/hooks';
import { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

export type imageViewerProps = {
  images: mediaType[];
  type?: 'normal' | 'control';
};

function ImageViewer({ images, type = 'normal' }: imageViewerProps) {
  const { handleRemoveImage } = useDeleteImage();

  const handleDelete = async (imageId: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This image will be permanently deleted.",
      icon: 'warning',
      heightAuto: false,
      backdrop: false,
      showCancelButton: true,
      confirmButtonColor: '#e8590c',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      await handleRemoveImage(imageId);
    }
  };

  return (
    <PhotoProvider
      speed={() => 480}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
      {/* CSS Columns create the Unsplash Masonry effect.
        2 columns on mobile, 3 on md screens, 4 on lg screens. 
      */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mx-3 space-y-4">
        {images.map((item: mediaType, index) => (
          <div 
            key={item._id} 
            // break-inside-avoid prevents images from being split across columns
            className="relative break-inside-avoid group cursor-pointer"
          >
            {/* Elegant control button: hidden by default, slides/fades in on hover */}
            {type === 'control' && (
              <button 
                className="absolute z-30 top-3 right-3 bg-white/90 hover:bg-red-500 hover:text-white p-1.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the image viewer from opening when clicking delete
                  handleDelete(item._id);
                }}
                aria-label="Delete image"
              >
                <IoCloseOutline className="size-5 transition-colors" />
              </button>
            )}

            <div className="overflow-hidden rounded-xl shadow-sm bg-[#33312e]/5 dark:bg-[#fef4e9]/5 relative">
              <PhotoView key={index} src={item.secure_url}>
                <div className="w-full h-full">
                  <LazyLoadImage
                    effect="blur"
                    src={item.secure_url}
                    alt="Gallery item"
                    // w-full and h-auto allows the image to scale naturally based on its native aspect ratio
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    // CRITICAL: react-lazy-load adds a span wrapper. It must be display: block to prevent layout bugs
                    wrapperClassName="w-full block" 
                  />
                </div>
              </PhotoView>

              {/* Subtle Unsplash-style dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </PhotoProvider>
  );
}

export default ImageViewer;