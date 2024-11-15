import HeaderDashboard from "./HeaderDashboard"
import MarketFeaturedList from "./MarketFeaturedList"

export type marketProps ={
    style: string
} 
function Market({style}:marketProps) {
    return (
        <>
        {style !== 'overview'&&  <HeaderDashboard/>}
        <div className="px-6  pt-10">
            <h1 className="dash-title pb-2">Dasa Market Center</h1>

            <MarketFeaturedList/>
        </div>
        </>
    )
}

export default Market
