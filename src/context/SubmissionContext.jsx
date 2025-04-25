import { createContext, useState, useContext } from "react";

const SubmissionContext = createContext();

export const useSubmissions = () => useContext(SubmissionContext);

export const SubmissionProvider = ({ children }) => {
  const [farmerData, setFarmerData] = useState([]);
  const [logisticsData, setLogisticsData] = useState([]);

  const addFarmerSubmission = (data) =>
    setFarmerData((prev) => [...prev, data]);
  const addLogisticsSubmission = (data) =>
    setLogisticsData((prev) => [...prev, data]);

  return (
    <SubmissionContext.Provider
      value={{
        farmerData,
        logisticsData,
        addFarmerSubmission,
        addLogisticsSubmission,
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};
