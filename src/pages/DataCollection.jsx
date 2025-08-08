import { useState } from "react";
import FarmerForm from "../components/FarmerForm";
import LogisticsForm from "../components/LogisticsForm";
import SubmissionCard from "../components/SubmissionCard";
import { useSubmissions } from "../context/SubmissionContext";
import { Leaf, Truck, FileText } from "lucide-react"; // For thematic icons

const DataCollection = () => {
  const { farmerData, logisticsData } = useSubmissions();
  const [selectedForm, setSelectedForm] = useState("farmer");

  return (
    <div className="bg-gradient-to-b from-green-900 via-green-800 to-green-950 min-h-screen">
      <div className="px-4 py-8 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
            <Leaf className="text-green-300" size={32} />
            ForestWatch Data Collection
          </h1>
          <p className="text-green-200 text-sm sm:text-base mt-2">
            Monitor, record, and manage reforestation efforts in real time.
          </p>
        </div>

        {/* Form Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <label className="text-white font-semibold flex items-center gap-2">
            <FileText className="text-green-300" size={20} />
            Select Data Entry Type:
          </label>
          <select
            className="w-full sm:w-64 border border-green-400 bg-green-900 text-green-100 p-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-400"
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
          >
            <option value="farmer">🌱 Forest Plantation Data</option>
            <option value="logistics">🚚 Logistics Tracking</option>
          </select>
        </div>

        {/* Active Form */}
        <div className="bg-green-800 rounded-xl shadow-lg p-6 border border-green-500">
          {selectedForm === "farmer" && <FarmerForm />}
          {selectedForm === "logistics" && <LogisticsForm />}
        </div>

        {/* Submissions */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-200 mb-4">
            🌿 Recent Submissions
          </h2>
          {farmerData.length === 0 && logisticsData.length === 0 ? (
            <p className="text-green-400 italic">
              No submissions yet. Start adding data to track reforestation
              progress.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmerData.map((entry, idx) => (
                <SubmissionCard key={`farmer-${idx}`} data={entry} />
              ))}
              {logisticsData.map((entry, idx) => (
                <SubmissionCard key={`logistics-${idx}`} data={entry} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
