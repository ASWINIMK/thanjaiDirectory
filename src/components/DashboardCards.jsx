const DashboardCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Total Orders</p>
        <p className="text-3xl font-bold mt-2">120</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Pending Orders</p>
        <p className="text-3xl font-bold mt-2 text-yellow-500">35</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Completed Orders</p>
        <p className="text-3xl font-bold mt-2 text-green-600">70</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Customers</p>
        <p className="text-3xl font-bold mt-2">25</p>
      </div>
    </div>
  );
};

export default DashboardCards;

