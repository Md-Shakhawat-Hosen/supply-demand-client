import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  PackageSearch,
  MapPin,
  BarChart3,
} from "lucide-react";

const mockData = {
  farmer: {
    crop: "Tomato",
    region: "Nashik",
    currentMarketPrice: "₹30/kg",
    suggestedPrice: "₹28/kg",
    inventoryStatus: "Low",
    recommendation: "Increase supply to meet rising demand in nearby mandis.",
    marketTrend: "↑ Prices rising due to festive demand and low stock.",
    demandLevel: "High",
  },
  retailer: {
    product: "Potato",
    region: "Delhi NCR",
    currentMarketPrice: "₹32/kg",
    suggestedSellingPrice: "₹35/kg",
    currentStock: "Adequate",
    recommendation:
      "Maintain current pricing. Consider stocking onions next week.",
    marketTrend: "→ Stable with slight weekend demand spike.",
    demandLevel: "Medium",
  },
};

const MarketRecommendations = () => {
  const [userType, setUserType] = useState("farmer");
  const data = mockData[userType];

  return (
    <div className="bg-[#27391C]">
      <div className="px-4 py-6 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-8 bg-[#18230F] min-h-screen text-white">
        <h1 className="text-2xl font-bold">Market & Price Recommendations</h1>

        {/* Selector */}
        <div className="max-w-xs">
          <label className="block mb-2 font-semibold text-sm">
            Select User Type
          </label>
          <select
            className="w-full border p-2 rounded text-green-500"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="farmer ">Farmer</option>
            <option value="retailer">Retailer</option>
          </select>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Product */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53]">Product</h2>
            <p>{data.crop || data.product}</p>
          </div>

          {/* Region */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Region
            </h2>
            <p>{data.region}</p>
          </div>

          {/* Current Market Price */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53]">
              Current Market Price
            </h2>
            <p>{data.currentMarketPrice}</p>
          </div>

          {/* Suggested Price */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <DollarSign className="w-4 h-4" /> Suggested Price
            </h2>
            <p>{data.suggestedPrice || data.suggestedSellingPrice}</p>
          </div>

          {/* Inventory / Stock */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <PackageSearch className="w-4 h-4" /> Inventory Status
            </h2>
            <p>{data.inventoryStatus || data.currentStock}</p>
          </div>

          {/* Demand Level */}
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <BarChart3 className="w-4 h-4" /> Demand Level
            </h2>
            <p>{data.demandLevel}</p>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-[#255F38] p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-white mb-2">
            Recommendation
          </h2>
          <p>{data.recommendation}</p>
        </div>

        {/* Market Analysis */}
        <div className="bg-[#255F38] p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Market Trend
          </h2>
          <p>{data.marketTrend}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketRecommendations;
