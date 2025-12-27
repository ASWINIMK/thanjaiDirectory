import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import DashboardCards from "../DashboardCards";
import Header from "../Header";

const Dashboard = () => {
  return (
      <div className="min-h-screen bg-[#0f172a]">
      <Header />
      {/* RIGHT CONTENT */}

          <div className="flex min-h-screen bg-gray-900">
      {/* LEFT SIDEBAR */}
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        {/* TOP NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="p-6">
          <DashboardCards />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
