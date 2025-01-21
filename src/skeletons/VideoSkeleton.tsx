function VideoSkeleton() {
    return (
        <>
        <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3">
          <div className="flex   flex-col items-center  gap-16 pt-2">
            <div className="gap-4 flex flex-col items-center   pl-2">
              <div className="size-5 fill-[#ffd8a8] " ></div>
              <div className="size-5 stroke-[#ffd8a8]" ></div>
            </div>
            <div className="pb-10 space-y-3">
              <div className="size-5 fill-[#ffd8a8] " ></div>
              <div className="size-5 fill-[#ffd8a8]" ></div>
          </div>
          </div>
          
      <div></div>
      <div className="flex">
            <div className="self-end">
            </div>
          </div>
        </div>
        
        </>
    )
}

export default VideoSkeleton
