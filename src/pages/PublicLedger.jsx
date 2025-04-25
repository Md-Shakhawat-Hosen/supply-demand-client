import {
  Hash,
  Package,
  MapPin,
  Clock,
  CheckCheck,
  Users,
  ScanBarcode,
} from "lucide-react";

const productChain = [
  {
    batchId: "BATCH-001",
    product: "Organic Tomatoes",
    journey: [
      {
        role: "Farmer",
        name: "Rahul Kumar",
        location: "Nashik, Maharashtra",
        timestamp: "2025-04-20 09:00",
        hash: "0xa1b2c3...f4e5",
      },
      {
        role: "Wholesaler",
        name: "AgroLink Distributors",
        location: "Pune Market Yard",
        timestamp: "2025-04-21 12:30",
        hash: "0xb5c6d7...1a2b",
      },
      {
        role: "Retailer",
        name: "FreshMart",
        location: "Mumbai, Dadar",
        timestamp: "2025-04-22 16:00",
        hash: "0xc9d8e0...3c4d",
      },
      {
        role: "Consumer",
        name: "Public Access",
        location: "Transaction Recorded",
        timestamp: "2025-04-23 10:15",
        hash: "0xd3e4f5...7a6b",
      },
    ],
  },
  {
    batchId: "BATCH-002",
    product: "Basmati Rice",
    journey: [
      {
        role: "Farmer",
        name: "Anita Yadav",
        location: "Karnal, Haryana",
        timestamp: "2025-04-18 11:45",
        hash: "0xaaa111...ddd",
      },
      {
        role: "Wholesaler",
        name: "GrainEx Traders",
        location: "Delhi Narela",
        timestamp: "2025-04-19 14:20",
        hash: "0xbbb222...eee",
      },
      {
        role: "Retailer",
        name: "LocalBazaar",
        location: "South Delhi",
        timestamp: "2025-04-20 17:50",
        hash: "0xccc333...fff",
      },
    ],
  },
];

const PublicLedger = () => {
  return (
    <div className="bg-[#18230F] text-white min-h-screen px-4 py-6 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-6 text-[#1F7D53]">
        📦 Public Blockchain Ledger
      </h1>
      <p className="text-gray-300 mb-8">
        This page transparently shows the blockchain-verified journey of
        agricultural products — from farm to consumer.
      </p>

      <div className="space-y-10">
        {productChain.map((batch) => (
          <div
            key={batch.batchId}
            className="bg-[#27391C] rounded-lg p-6 shadow-lg space-y-4 border-l-4 border-[#255F38]"
          >
            <div className="flex items-center justify-between text-sm text-gray-300">
              <div className="flex gap-2 items-center">
                <ScanBarcode className="w-5 h-5 text-[#1F7D53]" />
                <span className="font-semibold">Batch ID:</span> {batch.batchId}
              </div>
              <div className="flex gap-2 items-center">
                <Package className="w-5 h-5 text-[#1F7D53]" />
                <span className="font-semibold">Product:</span> {batch.product}
              </div>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {batch.journey.map((entry, i) => (
                <div
                  key={i}
                  className="bg-[#255F38] p-4 rounded shadow text-sm space-y-2"
                >
                  <div className="flex items-center gap-2 text-[#1F7D53] font-semibold">
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
                    <Hash className="w-4 h-4 text-[#1F7D53]" />
                    <span>Hash: {entry.hash}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#1F7D53] font-medium">
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

export default PublicLedger;
