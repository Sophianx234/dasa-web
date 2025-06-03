function WelcomeSkeleton() {
  return (
    <div className="border-2 mx-7 my-6 shadow-md rounded-md animate-pulse">
  <div className="px-2 py-2 pb-7">
    <div className="overflow-hidden flex justify-center">
      <div className="w-full h-40 bg-gray-300 rounded-md" />
    </div>

    <div className="pt-4">
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-2" />
      <div className="h-3 w-2/3 bg-gray-300 rounded" />
    </div>

    <div className="flex items-center justify-center gap-16 mt-6">
      <div className="flex flex-col items-center">
        <div className="h-5 w-6 bg-gray-300 rounded mb-1" />
        <div className="h-3 w-20 bg-gray-300 rounded" />
        <div className="h-3 w-16 bg-gray-300 rounded mt-1" />
      </div>

      <div className="flex flex-col items-center">
        <div className="h-5 w-6 bg-gray-300 rounded mb-1" />
        <div className="h-3 w-20 bg-gray-300 rounded" />
        <div className="h-3 w-16 bg-gray-300 rounded mt-1" />
      </div>
    </div>
  </div>
</div>

  )
}

export default WelcomeSkeleton
