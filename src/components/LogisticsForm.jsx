import { useForm } from "react-hook-form";
import { useSubmissions } from "../context/SubmissionContext";
import { Leaf, Truck, Calendar, User, MapPin } from "lucide-react";

const LogisticsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addLogisticsSubmission } = useSubmissions();

  const onSubmit = (data) => {
    addLogisticsSubmission(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gradient-to-b from-green-50 to-white p-6 rounded-2xl shadow-md space-y-4 border border-green-200 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2">
        <Leaf className="text-green-600" /> Seedling Logistics Form
      </h2>
      <p className="text-sm text-green-700">
        Track vehicle and delivery details for seedlings or forestry equipment.
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Truck className="text-green-600" size={18} />
          <input
            type="text"
            {...register("vehicleId")}
            placeholder="Vehicle ID / Number Plate"
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 p-2 rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="text-green-600" size={18} />
          <input
            type="text"
            {...register("route")}
            placeholder="Route (e.g., Khulna → Sundarbans)"
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 p-2 rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={18} />
          <input
            type="number"
            {...register("capacity")}
            placeholder="Capacity (No. of seedlings)"
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 p-2 rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="text-green-600" size={18} />
          <input
            type="date"
            {...register("eta")}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 p-2 rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <User className="text-green-600" size={18} />
          <input
            type="text"
            {...register("driver")}
            placeholder="Driver Contact"
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 p-2 rounded-lg"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
      >
        Save Logistics
      </button>
    </form>
  );
};

export default LogisticsForm;
