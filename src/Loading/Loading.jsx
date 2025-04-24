import { Loader } from "lucide-react";
const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Loader className="animate-spin h-6 w-6 text-[#1F7D53]" />
    </div>
  );
};

export default Loading;
