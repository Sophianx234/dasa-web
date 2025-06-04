function UserCardSkeleton() {
  return  (
    <div>
      <div className="grid relative grid-cols-[1.5fr_2fr] bg-white border shadow-sm rounded-md overflow-hidden w-full ">

        {/* Animated Placeholder for Image */}
        <div className="  bg-gray-200 animate-pulse"></div>

        {/* Right Section: Animated Info */}
        <div className="flex pt-2 relative flex-col gap-1">
          <div className="pl-2 flex flex-col gap-1 ">

            {/* Username, Email, Contact */}
            <div className="flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
              <span className="py-6 border-l border-black border-1"></span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold font-poppins bg-gray-200 h-4 w-24 animate-pulse"></span>
                <span className="text-xs bg-gray-200 h-3 w-32 mt-1 animate-pulse"></span>
                <span className="text-xs bg-gray-200 h-3 w-20 mt-1 animate-pulse"></span>
              </div>
            </div>

            {/* Anonymous Name */}
            <div className="flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
              <span className="py-4 border-l border-black border-1"></span>
              <span className="text-xs italic bg-gray-200 h-3 w-28 animate-pulse"></span>
            </div>

            {/* Gender */}
            <div className="flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
              <span className="py-4 border-l border-black border-1"></span>
              <span className="text-sm italic bg-gray-200 h-4 w-16 animate-pulse"></span>
            </div>

            {/* Hall (Optional: If you had removed it earlier) */}
            <div className="flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
              <span className="py-4 border-l border-black border-1"></span>
              <span className="text-sm italic bg-gray-200 h-4 w-20 animate-pulse"></span>
            </div>
          </div>

        

        </div>
      </div>
    </div>

  )
}

export default UserCardSkeleton
