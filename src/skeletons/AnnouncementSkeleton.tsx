function AnnouncementSkeleton() {
  return (
    <div>
      <div className="mx-8 border-2 shadow-lg mt-4 pt-2 px-2 rounded-md mb-10 animate-pulse">
  <div className="grid grid-cols-[2fr_.5fr] pt-2 pr-1">
    {/* Profile Section */}
    <div className="flex space-x-2">
      <div className="size-12 w-14 rounded-full bg-gray-300"></div>
      <div className="space-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-3 w-48 bg-gray-200 rounded"></div>
      </div>
    </div>

    {/* Icons Section */}
    <div className="flex justify-end gap-2 relative items-start pt-1">
      <div className="size-5 bg-gray-300 rounded-full"></div>
      <div className="size-5 bg-gray-300 rounded-full"></div>
    </div>
  </div>

  {/* Message Section */}
  <div className="pt-10 space-y-3 pb-3">
    <div className="h-5 w-32 bg-gray-300 rounded flex items-center gap-2"></div>
    <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
  </div>

  <div className="space-y-2 pb-10">
    <div className="h-3 w-full bg-gray-200 rounded"></div>
    <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
  </div>

  {/* Reactions and Comments */}
  <div className="flex justify-between py-2 pr-3 items-center">
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
    <div className="h-4 w-20 bg-gray-300 rounded"></div>
  </div>

  {/* Footer Buttons */}
  <div className="flex gap-4 border-t-2 py-2 pb-3">
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
  </div>
</div>

    </div>
  )
}

export default AnnouncementSkeleton
