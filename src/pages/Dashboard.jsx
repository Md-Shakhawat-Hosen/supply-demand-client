// src/pages/Dashboard.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Bell, Download } from "lucide-react";
import { Helmet } from "react-helmet";

const demandSupplyData = [
  { month: "Jan", demand: 400, supply: 420 },
  { month: "Feb", demand: 380, supply: 410 },
  { month: "Mar", demand: 420, supply: 430 },
  { month: "Apr", demand: 450, supply: 400 },
  { month: "May", demand: 480, supply: 470 },
];

const marketPrices = [
  { commodity: "Corn", price: "25 BDT", change: "+3.2%" },
  { commodity: "RBD Soybean Oil", price: "75 BDT", change: "-1.5%" },
  { commodity: "Rapeseed Oil", price: "88 BDT", change: "+0.8%" },
];

const Dashboard = () => {
  return (
    <div className="bg-[#27391C]">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="max-w-7xl mx-auto  min-h-screen text-white p-4 md:p-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#6cb996] mb-2">
            Welcome back, Farmer!
          </h1>
          <p className="text-gray-300 text-sm">
            Here's the latest agriculture market update tailored for you.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Top Demand
            </h2>
            <p className="text-2xl font-bold">Corn 🌽</p>
          </div>
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Biggest Price Drop
            </h2>
            <p className="text-2xl font-bold">RBD Soybean Oil 🛢️</p>
          </div>
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Market Alert
            </h2>
            <p className="text-2xl font-bold">Drought Risk 🌾</p>
          </div>
        </div>

        {/* Demand-Supply Chart */}
        <div className="bg-[#18230F] rounded-xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-bold text-[#1F7D53] mb-6">
            Demand vs Supply Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandSupplyData}>
              <CartesianGrid stroke="#3A3A3A" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#1F7D53"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="supply"
                stroke="#E2E8F0"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Real-Time Market Prices */}
        <div className="bg-[#18230F] rounded-xl p-6 shadow-md mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1F7D53]">
              Real-Time Market Prices
            </h2>
            <button className="flex items-center bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
              <Download size={18} className="mr-2" />
              Export
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-300">
              <thead>
                <tr>
                  <th className="py-2 text-left">Commodity</th>
                  <th className="py-2 text-left">Latest Price</th>
                  <th className="py-2 text-left">Change</th>
                </tr>
              </thead>
              <tbody>
                {marketPrices.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-600">
                    <td className="py-2">{item.commodity}</td>
                    <td className="py-2">{item.price}</td>
                    <td className="py-2">{item.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-[#255F38] rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Bell size={22} className="text-[#1F7D53] mr-2" />
            <h2 className="text-xl font-semibold">Alerts</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>🔥 Drought may impact Corn yield in North region.</li>
            <li>🚀 Rapeseed Oil prices rising due to export restrictions.</li>
            <li>💧 Favorable weather expected for Soybean crops next month.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
