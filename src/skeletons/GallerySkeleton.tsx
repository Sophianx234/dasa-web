function GallerySkeleton({ type = 'normal' }) {
  
    const columnClass = type === 'normal' ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <div className={`grid ${columnClass} gap-3 mx-3 rounded-md overflow-hidden animate-pulse`}>
      {Array.from({ length: type === 'normal' ? 12 : 4 }).map((_, index) => (
        <div key={index} className="relative">
          {type === 'control' && (
            <div className="absolute z-30 right-1 top-1 bg-white rounded-full p-1 shadow-md">
              <div className="w-5 h-5 bg-red-300 rounded-full" />
            </div>
          )}

          <div className="w-full aspect-[1/2] bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default GallerySkeleton
