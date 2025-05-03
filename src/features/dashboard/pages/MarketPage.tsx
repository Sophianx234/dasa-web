import { Outlet } from "react-router-dom";
import BottomNav from "../market/BottomNav";
import MarketCategory from "../market/MarketCategory";
import MarketHeader from "../market/MarketHeader";
import SearchBar from "../market/SearchBar";
import DragZone from "../market/DragZone";
import { useAppSelector } from "@/features/utils/hooks";

function MarketPage() {
  const {isOpenUploadProduct}  = useAppSelector(store=>store.nav)
  return (
    <div className="bg-white ">
      <MarketHeader/>
      <div className="py-4">

      <SearchBar/>
      </div>
      <MarketCategory/>
      {isOpenUploadProduct && <DragZone type="products"/>}
      <Outlet/>
      <BottomNav/>
    </div>
  );
}

export default MarketPage;
