const SubmissionCard = ({ data }) => (
  <div className="bg-gray-100 p-4 rounded shadow space-y-1">
    {data.cropType && (
      <p>
        <strong>Crop:</strong> {data.cropType}
      </p>
    )}
    {data.yield && (
      <p>
        <strong>Yield:</strong> {data.yield} kg
      </p>
    )}
    {data.harvestDate && (
      <p>
        <strong>Harvest Date:</strong> {data.harvestDate}
      </p>
    )}
    {data.region && (
      <p>
        <strong>Region:</strong> {data.region}
      </p>
    )}
    {data.comments && (
      <p>
        <strong>Comments:</strong> {data.comments}
      </p>
    )}
    {data.vehicleId && (
      <p>
        <strong>Vehicle:</strong> {data.vehicleId}
      </p>
    )}
    {data.route && (
      <p>
        <strong>Route:</strong> {data.route}
      </p>
    )}
    {data.capacity && (
      <p>
        <strong>Capacity:</strong> {data.capacity} kg
      </p>
    )}
    {data.eta && (
      <p>
        <strong>ETA:</strong> {data.eta}
      </p>
    )}
    {data.driver && (
      <p>
        <strong>Driver:</strong> {data.driver}
      </p>
    )}
  </div>
);

export default SubmissionCard;
