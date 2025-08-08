import { useState } from "react";
import {
  Trees,
  AlertTriangle,
  Droplets,
  MapPin,
  Leaf,
  Activity,
} from "lucide-react";

const mockData = {
  ranger: {
    forestZone: "Sundarbans East",
    dominantSpecies: "Mangrove",
    waterLevel: "Moderate",
    fireRisk: "Low",
    wildlifeActivity: "Normal",
    recommendation: "Continue patrolling; monitor mangrove density growth.",
    ecosystemTrend: "↑ Healthy regeneration observed this month.",
    alertLevel: "Low",
  },
  researcher: {
    forestZone: "Kaziranga North",
    dominantSpecies: "Sal Trees",
    waterLevel: "Low",
    fireRisk: "Medium",
    wildlifeActivity: "Increased Rhino movement",
    recommendation:
      "Deploy water conservation measures; monitor for early fire signs.",
    ecosystemTrend: "→ Stable biodiversity but risk from dry season.",
    alertLevel: "Medium",
  },
};

const ForestInsights = () => {
  const [userType, setUserType] = useState("ranger");
  const data = mockData[userType];

  return (
    <div className="bg-[#27391C]">
      <div className="px-4 py-6 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-8 bg-[#18230F] min-h-screen text-white">
        <h1 className="text-2xl font-bold">Forest Health & Monitoring</h1>

        {/* Selector */}
        <div className="max-w-xs">
          <label className="block mb-2 font-semibold text-sm">
            Select User Role
          </label>
          <select
            className="w-full border p-2 rounded text-green-500"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="ranger">Forest Ranger</option>
            <option value="researcher">Researcher</option>
          </select>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Forest Zone
            </h2>
            <p>{data.forestZone}</p>
          </div>

          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <Trees className="w-4 h-4" /> Dominant Species
            </h2>
            <p>{data.dominantSpecies}</p>
          </div>

          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <Droplets className="w-4 h-4" /> Water Level
            </h2>
            <p>{data.waterLevel}</p>
          </div>

          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> Fire Risk
            </h2>
            <p>{data.fireRisk}</p>
          </div>

          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <Activity className="w-4 h-4" /> Wildlife Activity
            </h2>
            <p>{data.wildlifeActivity}</p>
          </div>

          <div className="bg-[#27391C] p-4 rounded shadow space-y-1">
            <h2 className="font-semibold text-[#1F7D53] flex items-center gap-1">
              <Leaf className="w-4 h-4" /> Alert Level
            </h2>
            <p>{data.alertLevel}</p>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-[#255F38] p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-white mb-2">
            Conservation Recommendation
          </h2>
          <p>{data.recommendation}</p>
        </div>

        {/* Ecosystem Analysis */}
        <div className="bg-[#255F38] p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <Leaf className="w-5 h-5" /> Ecosystem Trend
          </h2>
          <p>{data.ecosystemTrend}</p>
        </div>
      </div>
    </div>
  );
};

export default ForestInsights;
