import {
  Hash,
  Trees,
  MapPin,
  Clock,
  CheckCheck,
  Users,
  Leaf,
} from "lucide-react";

const reforestationBatches = [
  {
    batchId: "FOREST-001",
    species: "Neem Trees",
    journey: [
      {
        role: "Plantation Team",
        name: "Green Roots NGO",
        location: "Sundarbans, West Bengal",
        timestamp: "2025-04-10 08:30",
        hash: "0xa1b2c3...f4e5",
      },
      {
        role: "Community Volunteers",
        name: "Village Eco Warriors",
        location: "Local Plantation Site",
        timestamp: "2025-04-11 10:00",
        hash: "0xb5c6d7...1a2b",
      },
      {
        role: "Forest Department",
        name: "Sundarbans Division",
        location: "Regional Office",
        timestamp: "2025-04-12 15:45",
        hash: "0xc9d8e0...3c4d",
      },
      {
        role: "Public Access",
        name: "Open Ledger",
        location: "Blockchain Verified",
        timestamp: "2025-04-13 09:10",
        hash: "0xd3e4f5...7a6b",
      },
    ],
  },
  {
    batchId: "FOREST-002",
    species: "Bamboo",
    journey: [
      {
        role: "Plantation Team",
        name: "EcoCare Initiative",
        location: "Kaziranga, Assam",
        timestamp: "2025-04-15 07:15",
        hash: "0xaaa111...ddd",
      },
      {
        role: "Local Community",
        name: "Kaziranga Green Group",
        location: "Village Plantation Zone",
        timestamp: "2025-04-16 09:50",
        hash: "0xbbb222...eee",
      },
      {
        role: "Forest Monitoring Unit",
        name: "Kaziranga Dept.",
        location: "Monitoring Station",
        timestamp: "2025-04-17 14:20",
        hash: "0xccc333...fff",
      },
    ],
  },
];

const ForestWatchLedger = () => {
  return (
    <div className="bg-[#18230F] text-white min-h-screen px-4 py-6 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-6 text-[#1F7D53] flex items-center gap-2">
        <Trees className="w-7 h-7" />
        ForestWatch Ledger
      </h1>
      <p className="text-gray-300 mb-8">
        Transparent blockchain-verified journey of reforestation batches — from
        planting to community stewardship.
      </p>

      <div className="space-y-10">
        {reforestationBatches.map((batch) => (
          <div
            key={batch.batchId}
            className="bg-[#27391C] rounded-lg p-6 shadow-lg space-y-4 border-l-4 border-[#255F38]"
          >
            <div className="flex items-center justify-between text-sm text-gray-300 flex-wrap gap-2">
              <div className="flex gap-2 items-center">
                <Leaf className="w-5 h-5 text-[#1F7D53]" />
                <span className="font-semibold">Batch ID:</span> {batch.batchId}
              </div>
              <div className="flex gap-2 items-center">
                <Trees className="w-5 h-5 text-[#1F7D53]" />
                <span className="font-semibold">Tree Species:</span>{" "}
                {batch.species}
              </div>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {batch.journey.map((entry, i) => (
                <div
                  key={i}
                  className="bg-[#255F38] p-4 rounded shadow text-sm space-y-2 hover:bg-[#2F7A4D] transition"
                >
                  <div className="flex items-center gap-2 text-[#A4EEC4] font-semibold">
                    <Users className="w-4 h-4" /> {entry.role}
                  </div>
                  <div>
                    <span className="text-gray-300">Name:</span> {entry.name}
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <MapPin className="w-4 h-4" /> {entry.location}
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <Clock className="w-4 h-4" /> {entry.timestamp}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 truncate">
                    <Hash className="w-4 h-4 text-[#A4EEC4]" />
                    <span>Hash: {entry.hash}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#A4EEC4] font-medium">
                    <CheckCheck className="w-4 h-4" /> Verified
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForestWatchLedger;
