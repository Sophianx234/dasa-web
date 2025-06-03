import MarketFeaturedSkeleton from "@/skeletons/MarketFeaturedSkeleton"
import MarketFeatured from "./MarketFeatured"
import Slider from "./Slider"

function MarketFeaturedList() {
    return (
        <div>
            <MarketFeatured/>
            {/* <MarketFeaturedSkeleton/> */}
      <Slider/>

        </div>
    )
}

export default MarketFeaturedList
