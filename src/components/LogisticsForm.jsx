import { useForm } from "react-hook-form";
import { useSubmissions } from "../context/SubmissionContext";

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
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold">Logistics Form</h2>
      <input
        type="text"
        {...register("vehicleId")}
        placeholder="Vehicle ID"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        {...register("route")}
        placeholder="Route (e.g., khulna → Dhaka)"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        {...register("capacity")}
        placeholder="Capacity (kg)"
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        {...register("eta")}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        {...register("driver")}
        placeholder="Driver Contact"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default LogisticsForm;
