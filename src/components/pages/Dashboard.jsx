import { useState } from "react";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import DashboardCards from "../DashboardCards";
import Header from "../Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* HEADER */}
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* SIDEBAR */}
        {sidebarOpen && <Sidebar />}

        {/* RIGHT CONTENT */}
        <div className="flex flex-col flex-1">
          <Navbar />

          <div className="p-6">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
