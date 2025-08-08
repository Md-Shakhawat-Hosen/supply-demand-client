// src/pages/Reports.jsx

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  MapPin,
  Leaf,
  ThermometerSnowflake,
  ThermometerSun,
  TrendingUp,
  DollarSign,
  TrendingDown,
} from "lucide-react";
import { Helmet } from "react-helmet";

const priceTrendData = [
  { month: "Jan", saplings: 120, mulch: 90, fertilizer: 70 },
  { month: "Feb", saplings: 130, mulch: 85, fertilizer: 75 },
  { month: "Mar", saplings: 150, mulch: 95, fertilizer: 80 },
  { month: "Apr", saplings: 170, mulch: 100, fertilizer: 85 },
];

const regionsStatus = [
  { region: "Northern Forests", status: "Stable", icon: "✅" },
  { region: "Southern Wetlands", status: "At Risk", icon: "⚠️" },
  { region: "Eastern Reserves", status: "Healthy Growth", icon: "✅" },
  { region: "Western Hills", status: "Stable", icon: "✅" },
];

const Reports = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const products = ["Saplings", "Mulch", "Fertilizer"];
  const regions = [
    "Northern Forests",
    "Southern Wetlands",
    "Eastern Reserves",
    "Western Hills",
  ];

  return (
    <div className="bg-[#1B2A0E] min-h-screen text-white">
      <Helmet>
        <title>WatchForest Reports</title>
      </Helmet>

      <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-10">
        {/* Page Header */}
        <header className="space-y-2">
          <h1 className="text-4xl font-extrabold text-[#7EC384]">
            🌿 Forest & Agriculture Reports
          </h1>
          <p className="text-green-200 max-w-2xl">
            Monitor reforestation progress, supply chain health, and
            environmental trends affecting forest ecosystems.
          </p>
        </header>

        {/* Filters */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="bg-[#25471B] text-green-100 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Product</option>
            {products.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-[#25471B] text-green-100 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Region</option>
            {regions.map((region, idx) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>

          <button
            className="bg-[#3B6B20] hover:bg-[#2B4C14] transition-colors px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
            // Add onClick handler for real report generation logic
          >
            <Download size={20} />
            <span>Generate Report</span>
          </button>
        </section>

        {/* Monthly Overview */}
        <section className="bg-[#25471B] p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-[#7EC384]">
            April 2025 Forest Supply Summary
          </h2>
          <p className="text-green-200 leading-relaxed">
            Sapling deliveries increased steadily across northern forest zones,
            aiding reforestation efforts. Mulch supply in southern wetlands
            shows risk due to weather disturbances. Fertilizer availability
            remains stable across eastern reserves. These insights help forest
            managers and environmentalists plan upcoming actions.
          </p>
        </section>

        {/* Key Metrics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Saplings */}
          <div className="bg-[#365B20] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#7EC384] mb-4 flex items-center gap-2">
              <Leaf size={24} /> Saplings
            </h3>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingUp size={18} /> <span>Planting Rate: +6%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingDown size={18} /> <span>Loss Rate: -2%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200">
              <ThermometerSun size={18} /> <span>Survival Rate: 89%</span>
            </div>
          </div>

          {/* Mulch */}
          <div className="bg-[#365B20] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#7EC384] mb-4 flex items-center gap-2">
              <ThermometerSnowflake size={24} /> Mulch
            </h3>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingUp size={18} /> <span>Supply Growth: +3%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingDown size={18} /> <span>Demand Fluctuation: -1.5%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200">
              <ThermometerSun size={18} /> <span>Quality Index: Good</span>
            </div>
          </div>

          {/* Fertilizer */}
          <div className="bg-[#365B20] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#7EC384] mb-4 flex items-center gap-2">
              <DollarSign size={24} /> Fertilizer
            </h3>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingUp size={18} /> <span>Usage Increase: +4%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200 mb-2">
              <TrendingDown size={18} /> <span>Stock Decline: -2.5%</span>
            </div>
            <div className="flex items-center gap-3 text-green-200">
              <ThermometerSun size={18} />{" "}
              <span>Price Stability: Moderate</span>
            </div>
          </div>
        </section>

        {/* Price Trends Chart */}
        <section className="bg-[#25471B] p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7EC384] mb-6">
            Monthly Supply Trends
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={priceTrendData}>
              <CartesianGrid stroke="#3A3A3A" />
              <XAxis dataKey="month" stroke="#9AE6B4" />
              <YAxis stroke="#9AE6B4" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1B2A0E", borderRadius: 8 }}
                itemStyle={{ color: "#7EC384" }}
              />
              <Line
                type="monotone"
                dataKey="saplings"
                stroke="#7EC384"
                strokeWidth={3}
                name="Saplings"
              />
              <Line
                type="monotone"
                dataKey="mulch"
                stroke="#A8D5A3"
                strokeWidth={3}
                name="Mulch"
              />
              <Line
                type="monotone"
                dataKey="fertilizer"
                stroke="#C3E6B9"
                strokeWidth={3}
                name="Fertilizer"
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* Regional Forest Health */}
        <section className="bg-[#365B20] p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7EC384] mb-6">
            Regional Forest Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {regionsStatus.map((region, i) => (
              <div
                key={i}
                className="bg-[#1B2A0E] p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <MapPin size={36} className="text-[#7EC384] mb-3" />
                <h3 className="text-xl font-semibold mb-2">{region.region}</h3>
                <p className="text-green-200 text-lg">
                  {region.icon} {region.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Button */}
        <div className="flex justify-center">
          <button className="flex items-center bg-[#3B6B20] hover:bg-[#2B4C14] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-md">
            <Download size={24} className="mr-3" />
            Download Forest Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
