const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="font-bold mb-4">ADMIN PANEL</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Products</li>
        <li>Customers</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
