import React, { useEffect, useState } from "react";
import AdminServices from "../services/adminServices";


const DashboardCards = () => {
  // ✅ INITIAL STATE — data illa naalum crash aagadhu
  const [data, setData] = useState({
    users: 0,
    businesses: 0,
    pending: 0,
  });

  const fetchDashboardStats = async () => {
    try {
      const res = await AdminServices.getDashboardStats();
      console.log("BACKEND DATA:", res.data); // 👈 check pannalaam
      setData(res.data);
    } catch (error) {
      console.error("Dashboard stats error", error);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Customers</p>
        <p className="text-3xl font-bold mt-2">{data.users}</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">businesses</p>
        <p className="text-3xl font-bold mt-2 text-yellow-500">{data.businesses}</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">pending usinesses</p>
        <p className="text-3xl font-bold mt-2 text-green-600">{data.pending}</p>
      </div>

      
    </div>
  );
};

export default DashboardCards;

