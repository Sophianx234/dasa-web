import Market from "../components/Market";
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
      <Market style="main" />
    </div>
  );
}

export default MarketPage;
