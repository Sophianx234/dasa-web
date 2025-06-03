function EventSkeleton() {
  return (
    <div className="grid grid-cols-1 pt-2 mx-8 pb-10 rounded-lg animate-pulse">
  <div className="shadow-md rounded-md pb-3 mb-4 overflow-hidden border">
    
    {/* Image with close icon */}
    <div className="relative">
      <div className="p-1 rounded-full top-0 right-1 absolute bg-gray-100">
        <div className="size-6 bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-full h-80 bg-gray-300"></div>
    </div>

    <div className="space-y-2">
      {/* "New" badge */}
      <div className="bg-gray-300 inline-block px-6 py-2 rounded ml-1 mt-1 w-20 h-6"></div>

      {/* Content section */}
      <div className="px-10 pt-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

        <div className="space-y-2 pl-2 pb-2">
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Optional placeholder for Svg / footer */}
      <div className="px-10">
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</div>

  )
}

export default EventSkeleton
