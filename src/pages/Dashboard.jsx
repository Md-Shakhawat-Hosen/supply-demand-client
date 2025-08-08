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
import { Bell, Download, Trees, Leaf, Droplets } from "lucide-react";
import { Helmet } from "react-helmet";

// Forest health trends (example data)
const forestHealthData = [
  { month: "Jan", healthy: 82, deforested: 18 },
  { month: "Feb", healthy: 80, deforested: 20 },
  { month: "Mar", healthy: 78, deforested: 22 },
  { month: "Apr", healthy: 77, deforested: 23 },
  { month: "May", healthy: 79, deforested: 21 },
];

// Active reforestation projects
const reforestationProjects = [
  { project: "Amazon Regen", treesPlanted: "12,500", progress: "75%" },
  { project: "Sundarbans Shield", treesPlanted: "8,200", progress: "50%" },
  { project: "Congo Greenbelt", treesPlanted: "15,000", progress: "90%" },
];

const Dashboard = () => {
  return (
    <div className="bg-[#18230F]">
      <Helmet>
        <title>ForestWatch Dashboard</title>
      </Helmet>
      <div className="max-w-7xl mx-auto min-h-screen text-white p-4 md:p-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#6cb996] mb-2">
            Welcome back, Forest Guardian 🌱
          </h1>
          <p className="text-gray-300 text-sm">
            Here’s the latest update on forest conditions and restoration
            efforts.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Healthy Forest Cover
            </h2>
            <p className="text-2xl font-bold">79% 🌳</p>
          </div>
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Trees Planted This Month
            </h2>
            <p className="text-2xl font-bold">25,700 🌱</p>
          </div>
          <div className="bg-[#255F38] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-[#1F7D53] mb-2">
              Alerts This Week
            </h2>
            <p className="text-2xl font-bold">3 ⚠️</p>
          </div>
        </div>

        {/* Forest Health Chart */}
        <div className="bg-[#27391C] rounded-xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-bold text-[#1F7D53] mb-6">
            Forest Health Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forestHealthData}>
              <CartesianGrid stroke="#3A3A3A" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="healthy"
                stroke="#1F7D53"
                strokeWidth={2}
                name="Healthy Cover %"
              />
              <Line
                type="monotone"
                dataKey="deforested"
                stroke="#E53E3E"
                strokeWidth={2}
                name="Deforested %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Reforestation Projects */}
        <div className="bg-[#27391C] rounded-xl p-6 shadow-md mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1F7D53]">
              Active Reforestation Projects
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
                  <th className="py-2 text-left">Project</th>
                  <th className="py-2 text-left">Trees Planted</th>
                  <th className="py-2 text-left">Progress</th>
                </tr>
              </thead>
              <tbody>
                {reforestationProjects.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-600">
                    <td className="py-2">{item.project}</td>
                    <td className="py-2">{item.treesPlanted}</td>
                    <td className="py-2">{item.progress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-[#255F38] rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Bell size={22} className="text-[#1F7D53] mr-2" />
            <h2 className="text-xl font-semibold">Alerts</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>🔥 Deforestation spike detected in Eastern Amazon.</li>
            <li>💧 Soil moisture levels improving in Kenya Greenbelt.</li>
            <li>🌪️ Storm damage reported in Sundarbans area.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
