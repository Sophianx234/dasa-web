import { Outlet } from "react-router-dom";
import Market from "../components/Market";
import BottomNav from "../market/BottomNav";
import MarketCategory from "../market/MarketCategory";
import MarketHeader from "../market/MarketHeader";
import SearchBar from "../market/SearchBar";

function MarketPage() {
  return (
    <div className="bg-white ">
      <MarketHeader/>
      <div className="py-4">

      <SearchBar/>
      </div>
      <MarketCategory/>
      <Outlet/>
      <BottomNav/>
    </div>
  );
}

export default MarketPage;
