import { ShieldCheck, Link, Clock, PackageCheck, Hash } from "lucide-react";

const ledgerData = [
  {
    id: "TXN001",
    product: "Wheat",
    from: "Farmer A",
    to: "Wholesaler B",
    quantity: "200 kg",
    timestamp: "2025-04-24 10:15",
    hash: "0xabc123...def",
  },
  {
    id: "TXN002",
    product: "Wheat",
    from: "Wholesaler B",
    to: "Retailer C",
    quantity: "150 kg",
    timestamp: "2025-04-24 13:42",
    hash: "0xdef456...789",
  },
  {
    id: "TXN003",
    product: "Tomato",
    from: "Farmer X",
    to: "Co-op Y",
    quantity: "500 kg",
    timestamp: "2025-04-25 08:21",
    hash: "0xghi789...abc",
  },
];

const BlockchainLedger = () => {
  return (
    <div className="bg-[#18230F]">
      <div className="px-4 py-6 sm:px-6 lg:px-12 max-w-6xl mx-auto text-white  min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Blockchain Ledger</h1>
        <p className="mb-4 text-sm text-gray-300">
          View secured, immutable transactions of agricultural product
          movements.
        </p>

        <div className="space-y-6">
          {ledgerData.map((txn, idx) => (
            <div
              key={txn.id}
              className="bg-[#27391C] rounded-lg shadow-md p-5 space-y-2 border-l-4 border-[#1F7D53]"
            >
              <div className="flex justify-between items-center text-[#1F7D53] font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Transaction #{idx + 1}</span>
                </div>
                <span className="text-xs text-gray-400">{txn.timestamp}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <p className="flex items-center gap-1">
                  <PackageCheck className="w-4 h-4 text-[#1F7D53]" />
                  <span className="font-medium text-white">Product:</span>{" "}
                  {txn.product}
                </p>

                <p className="flex items-center gap-1">
                  <Link className="w-4 h-4 text-[#1F7D53]" />
                  <span className="font-medium text-white">From:</span>{" "}
                  {txn.from}
                </p>

                <p className="flex items-center gap-1">
                  <Link className="w-4 h-4 text-[#1F7D53]" />
                  <span className="font-medium text-white">To:</span> {txn.to}
                </p>

                <p className="flex items-center gap-1">
                  <PackageCheck className="w-4 h-4 text-[#1F7D53]" />
                  <span className="font-medium text-white">Quantity:</span>{" "}
                  {txn.quantity}
                </p>
              </div>

              <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                <Hash className="w-4 h-4 text-[#1F7D53]" />
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
