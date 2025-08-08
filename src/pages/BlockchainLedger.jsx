import {
  ShieldCheck,
  MapPin,
  Leaf,
  TreePine,
  CalendarDays,
  Hash,
} from "lucide-react";

const ledgerData = [
  {
    id: "TXN001",
    species: "Mahogany",
    plantedBy: "Ranger A",
    location: "Zone 5 - North Forest",
    quantity: "50 trees",
    timestamp: "2025-04-24 10:15",
    hash: "0xabc123...def",
  },
  {
    id: "TXN002",
    species: "Teak",
    plantedBy: "Community Group B",
    location: "Zone 2 - Riverbank",
    quantity: "120 trees",
    timestamp: "2025-04-24 14:42",
    hash: "0xdef456...789",
  },
  {
    id: "TXN003",
    species: "Mango",
    plantedBy: "Volunteer C",
    location: "Zone 8 - Hilltop",
    quantity: "75 trees",
    timestamp: "2025-04-25 08:21",
    hash: "0xghi789...abc",
  },
];

const BlockchainLedger = () => {
  return (
    <div className="bg-[#0D1B0F]">
      <div className="px-4 py-6 sm:px-6 lg:px-12 max-w-6xl mx-auto text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-2">ForestWatch Ledger</h1>
        <p className="mb-6 text-sm text-gray-300">
          Secure, immutable record of reforestation activities and tree planting
          events.
        </p>

        <div className="space-y-6">
          {ledgerData?.map((txn, idx) => (
            <div
              key={txn.id}
              className="bg-[#1B2B18] rounded-lg shadow-md p-5 space-y-3 border-l-4 border-green-600"
            >
              {/* Header */}
              <div className="flex justify-between items-center text-green-500 font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Record #{idx + 1}</span>
                </div>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {txn.timestamp}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <p className="flex items-center gap-1">
                  <TreePine className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-white">Species:</span>{" "}
                  {txn.species}
                </p>

                <p className="flex items-center gap-1">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-white">
                    Planted By:
                  </span>{" "}
                  {txn.plantedBy}
                </p>

                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-white">Location:</span>{" "}
                  {txn.location}
                </p>

                <p className="flex items-center gap-1">
                  <TreePine className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-white">Quantity:</span>{" "}
                  {txn.quantity}
                </p>
              </div>

              {/* Blockchain hash */}
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                <Hash className="w-4 h-4 text-green-500" />
                <span className="truncate">Hash: {txn.hash}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainLedger;
