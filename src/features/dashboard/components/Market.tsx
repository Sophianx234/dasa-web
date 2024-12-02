import HeaderDashboard from "./HeaderDashboard"
import MarketFeaturedList from "./MarketFeaturedList"

export type marketProps ={
    style: string
} 
function Market({style}:marketProps) {
    return (
        <>
        
        <div className="px-6  pt-10">
            { style!== 'main' &&<h1 className="dash-title pb-2">Dasa Market Center</h1>}

            <MarketFeaturedList/>
        </div>
        </>
    )
}

export default Market
