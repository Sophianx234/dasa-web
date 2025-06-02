
function VideoSkeleton() {
    return (
        <>
       <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3 animate-pulse w-96 mx-10 ">
  {/* Social Icons Column */}
  <div className="flex flex-col items-center gap-16  pt-2">
    <div className="gap-4 flex flex-col items-center pl-2">
      <div className="size-8 bg-gray-300 rounded-full" />
      <div className=" bg-gray-300 size-8 rounded-full" />
    </div>
    <div className="pb-10  space-y-3">
      <div className="size-8 bg-gray-300 rounded-full" />
      <div className="size-8 bg-gray-300 rounded-full shadow" />
    </div>
  </div>

  {/* Video Placeholder */}
  <div className="w-64 h-full bg-gray-100 shadow  rounded-md" />

  {/* Reactions + Delete */}
  <div className="flex flex-col justify-between relative  ">
    {/* Delete Button Placeholder */}
    <div></div>
    {/* Reaction List Placeholder */}
    <div className="w-6 h-3/5  rounded-md   bg-gray-200 shadow -translate-x-6" />
  </div>
</div>

{/* SVG Line Placeholder */}
<div className="pb-6">
        

 
</div>

        </>
    )
}

export default VideoSkeleton
