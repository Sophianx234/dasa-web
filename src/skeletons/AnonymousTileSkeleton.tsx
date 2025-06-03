function AnonymousTileSkeleton() {
  return (
    <div className="pt-5 space-y-2 animate-pulse">
  <div className="mx-8 border-2 border-gray-200 px-4 rounded-md shadow-md pt-2 pb-2">
    
    {/* Header Row */}
    <div className="flex justify-between font-mulish mb-2">
      <div className="h-5 w-24 bg-gray-300 rounded"></div>
      <div className="h-5 w-16 bg-gray-300 rounded"></div>
    </div>

    {/* Message To */}
    <div className="mb-1">
      <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
    </div>

    {/* Message Text */}
    <div className="space-y-2">
      <div className="h-3 w-full bg-gray-300 rounded"></div>
      <div className="h-3 w-11/12 bg-gray-300 rounded"></div>
      <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
    </div>

    {/* Buttons */}
    <div className="flex space-x-4 py-2">
      <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
      <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
      <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
    </div>
  </div>
</div>

  )
}

export default AnonymousTileSkeleton
