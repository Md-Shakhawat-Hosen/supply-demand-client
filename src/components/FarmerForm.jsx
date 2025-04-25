import { useForm } from "react-hook-form";
import { useSubmissions } from "../context/SubmissionContext";

const FarmerForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addFarmerSubmission } = useSubmissions();

  const onSubmit = (data) => {
    addFarmerSubmission(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold">Farmer Form</h2>
      <select {...register("cropType")} className="w-full border p-2 rounded">
        <option value="Wheat">Wheat</option>
        <option value="Rice">Rice</option>
        <option value="Corn">Corn</option>
      </select>
      <input
        type="number"
        {...register("yield")}
        placeholder="Expected Yield (kg)"
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        {...register("harvestDate")}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        {...register("region")}
        placeholder="Region"
        className="w-full border p-2 rounded"
      />
      <textarea
        {...register("comments")}
        placeholder="Comments"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FarmerForm;
