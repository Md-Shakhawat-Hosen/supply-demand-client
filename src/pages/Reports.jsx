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
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import { Helmet } from "react-helmet";


const priceTrendData = [
  { month: "Jan", corn: 25, soybean: 74, rapeseed: 85 },
  { month: "Feb", corn: 26, soybean: 76, rapeseed: 87 },
  { month: "Mar", corn: 28, soybean: 78, rapeseed: 90 },
  { month: "Apr", corn: 29, soybean: 80, rapeseed: 92 },
];

const regionsStatus = [
  { region: "North", status: "Stable", icon: "✅" },
  { region: "South", status: "At Risk", icon: "⚠️" },
  { region: "East", status: "Good Supply", icon: "✅" },
  { region: "West", status: "Stable", icon: "✅" },

];





const Reports = () => {
 const [selectedCommodity, setSelectedCommodity] = useState("");
 const [selectedRegion, setSelectedRegion] = useState("");

 const commodities = ["Corn", "RBD Soybean Oil", "Rapeseed Oil"];
 const regions = ["North", "South", "East", "West"];


  return (
    <div className="bg-[#27391C]">
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <div className=" max-w-7xl mx-auto min-h-screen text-white p-4 md:p-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#6cb996] mb-2">
            Agriculture Reports
          </h1>
          <p className="text-gray-300 text-sm">
            Analyze market trends, download reports, and stay updated with the
            agricultural industry.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <select
            onChange={(e) => setSelectedCommodity(e.target.value)}
            className="p-3 rounded-lg bg-[#18230F] text-gray-300 focus:outline-none"
          >
            <option value="">Select Commodity</option>
            {commodities.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="p-3 rounded-lg bg-[#18230F] text-gray-300 focus:outline-none"
          >
            <option value="">Select Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>

          <button className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all">
            Generate Report
          </button>
        </div>

        {/* Report Summary */}
        <div className="bg-[#18230F] p-6 rounded-xl shadow-md mb-10">
          <h1 className="text-3xl font-bold text-[#6cb996] mb-4">
            April 2025 Agricultural Market Summary
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Corn supply grew steadily across northern regions, maintaining local
            market stability. Soybean oil shortages in the southern region hint
            at a potential price spike next month. Rapeseed oil continues upward
            trends, driven by high global demand. Our forecasts help farmers and
            consumers plan smarter for the upcoming seasons.
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Corn */}
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-[#1F7D53] mb-3">Corn 🌽</h2>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingUp size={18} /> <span>Demand Growth: +4%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingDown size={18} /> <span>Supply Growth: -1%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <DollarSign size={18} /> <span>Price Change: +2.5%</span>
            </div>
          </div>

          {/* RBD Soybean Oil */}
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-[#1F7D53] mb-3">
              RBD Soybean Oil 🛢️
            </h2>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingUp size={18} /> <span>Demand Growth: +5%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingDown size={18} /> <span>Supply Growth: -3%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <DollarSign size={18} /> <span>Price Change: +4%</span>
            </div>
          </div>

          {/* Rapeseed Oil */}
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-[#1F7D53] mb-3">
              Rapeseed Oil 🌾
            </h2>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingUp size={18} /> <span>Demand Growth: +3%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <TrendingDown size={18} /> <span>Supply Growth: +2%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <DollarSign size={18} /> <span>Price Change: +1.8%</span>
            </div>
          </div>
        </div>

        {/* Commodity Price Trend Chart */}
        <div className="bg-[#18230F] p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-[#1F7D53] mb-6">
            Commodity Price Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceTrendData}>
              <CartesianGrid stroke="#3A3A3A" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="corn"
                stroke="#1F7D53"
                strokeWidth={2}
                name="Corn"
              />
              <Line
                type="monotone"
                dataKey="soybean"
                stroke="#9AE6B4"
                strokeWidth={2}
                name="Soybean Oil"
              />
              <Line
                type="monotone"
                dataKey="rapeseed"
                stroke="#C6F6D5"
                strokeWidth={2}
                name="Rapeseed Oil"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Regional Supply Chain Health */}
        <div className="bg-[#255F38] p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-[#1F7D53] mb-6">
            Regional Supply Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {regionsStatus.map((region, index) => (
              <div
                key={index}
                className="bg-[#18230F] p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <MapPin size={28} className="text-[#1F7D53] mb-2" />
                <h3 className="text-lg font-semibold mb-1">{region.region}</h3>
                <p className="text-sm text-gray-300">
                  {region.icon} {region.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Personalized Report */}
        <div className="flex justify-center">
          <button className="flex items-center bg-[#1F7D53] hover:bg-[#18230F] text-white px-6 py-3 rounded-lg text-md font-semibold transition-all">
            <Download size={20} className="mr-2" />
            Download Personalized Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
