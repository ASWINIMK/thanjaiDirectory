import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col justify-between">
      
      {/* TOP */}
      <div>
        <h2 className="font-bold mb-6 text-lg">ADMIN PANEL</h2>

        <ul className="space-y-3 text-gray-300">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Orders</li>
          <li className="hover:text-white cursor-pointer">Products</li>
          <li className="hover:text-white cursor-pointer">Customers</li>
          <li className="hover:text-white cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* LOGOUT */}
      <Link
        to="/login"
        className="flex items-center gap-2 text-red-400 hover:text-red-500 cursor-pointer "
      >
        <FiLogOut />
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
