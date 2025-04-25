
import { useState } from "react";
import FarmerForm from "../components/FarmerForm";
import LogisticsForm from "../components/LogisticsForm";
import SubmissionCard from "../components/SubmissionCard";
import { useSubmissions } from "../context/SubmissionContext";

const DataCollection = () => {
  const { farmerData, logisticsData } = useSubmissions();
  const [selectedForm, setSelectedForm] = useState("farmer");

  return (
    <div className="bg-[#27391C]">
      <div className="px-4 py-6 sm:px-6 lg:px-12 space-y-6 max-w-7xl mx-auto ">
        {/* Form Type Selector */}
        <div className="w-full sm:max-w-xs">
          <label className="block font-semibold text-gray-700 mb-2 text-sm sm:text-base">
            Select Form Type:
          </label>
          <select
            className="w-full border border-gray-300 p-2 rounded shadow-sm text-sm sm:text-base"
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
          >
            <option value="farmer">Farmer</option>
            <option value="logistics">Logistics</option>
          </select>
        </div>

        {/* Conditionally Rendered Form */}
        <div className="w-full">
          {selectedForm === "farmer" && <FarmerForm />}
          {selectedForm === "logistics" && <LogisticsForm />}
        </div>

        {/* Submissions Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
            Submissions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {farmerData.map((entry, idx) => (
              <SubmissionCard key={`farmer-${idx}`} data={entry} />
            ))}
            {logisticsData.map((entry, idx) => (
              <SubmissionCard key={`logistics-${idx}`} data={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
