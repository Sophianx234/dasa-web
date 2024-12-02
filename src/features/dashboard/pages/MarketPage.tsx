import Market from "../components/Market";
import MarketCategory from "../market/MarketCategory";

function MarketPage() {
  return (
    <div className="bg-white">
      
      <MarketCategory/>
      <Market style="main" />
    </div>
  );
}

export default MarketPage;
