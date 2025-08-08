import { useForm } from "react-hook-form";
import { useSubmissions } from "../context/SubmissionContext";

const TreePlantingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addFarmerSubmission } = useSubmissions();

  const onSubmit = (data) => {
    addFarmerSubmission(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-green-100"
    >
      <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
        🌱 Tree Planting Record
      </h2>

      {/* Tree Species */}
      <select
        {...register("species")}
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      >
        <option value="">Select Tree Species</option>
        <option value="Teak">Teak</option>
        <option value="Mahogany">Mahogany</option>
        <option value="Acacia">Acacia</option>
        <option value="Mango">Mango</option>
        <option value="Bamboo">Bamboo</option>
      </select>

      {/* Number of Trees */}
      <input
        type="number"
        {...register("treeCount")}
        placeholder="Number of Trees Planted"
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />

      {/* Planting Date */}
      <input
        type="date"
        {...register("plantingDate")}
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />

      {/* Location */}
      <input
        type="text"
        {...register("location")}
        placeholder="Location (GPS coordinates or region)"
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      />

      {/* Health Status */}
      <select
        {...register("healthStatus")}
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
      >
        <option value="">Health Status</option>
        <option value="Healthy">Healthy</option>
        <option value="Needs Attention">Needs Attention</option>
        <option value="Diseased">Diseased</option>
        <option value="Dead">Dead</option>
      </select>

      {/* Additional Notes */}
      <textarea
        {...register("notes")}
        placeholder="Additional notes..."
        className="w-full border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        rows={3}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full font-semibold shadow-md transition-all"
      >
        Submit Record
      </button>
    </form>
  );
};

export default TreePlantingForm;
