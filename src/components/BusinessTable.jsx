import React from "react";

const BusinessTable = ({ businesses, onApprove, onReject, onBlock }) => {
  return (
    <div className="bg-[#0f172a] rounded-lg p-6 text-white">
      <table className="w-full text-left">
        <thead className="border-b border-gray-700">
          <tr>
            <th className="py-3">Business Name</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {businesses.map((biz) => (
            <tr key={biz._id} className="border-b border-gray-800">
              <td className="py-4">{biz.businessName}</td>
              <td>{biz.ownerId?.name || "-"}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded text-sm ${
                    biz.status === "pending"
                      ? "bg-yellow-500"
                      : biz.status === "approved"
                      ? "bg-green-600"
                      : biz.status === "rejected"
                      ? "bg-red-600"
                      : "bg-gray-500"
                  }`}
                >
                  {biz.status}
                </span>
              </td>

              <td className="space-x-2">
                {biz.status === "pending" && (
                  <>
                    <button
                      onClick={() => onApprove(biz._id)}
                      className="bg-green-600 px-3 py-1 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => onReject(biz._id)}
                      className="bg-red-600 px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}

                {(biz.status === "approved" ||
                  biz.status === "rejected") && (
                  <button
                    onClick={() => onBlock(biz._id)}
                    className="bg-red-700 px-3 py-1 rounded"
                  >
                    Block
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessTable;
