import { useState ,useEffect} from "react";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import DashboardCards from "../DashboardCards";
import Header from "../Header";
import BusinessTable from "../BusinessTable";
import AdminServices from "../../services/adminServices";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
  fetchBusinesses();
}, []);

const fetchBusinesses = async () => {
  const res = await AdminServices.getAllBusinesses();
  setBusinesses(res.data);
};

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
          <div className="p-6">
    <BusinessTable
      businesses={businesses}
      onApprove={async (id) => {
        await AdminServices.approveBusiness(id);
        fetchBusinesses();
      }}
      onReject={async (id) => {
        await AdminServices.rejectBusiness(id);
        fetchBusinesses();
      }}
      onBlock={async (id) => {
        await AdminServices.blockBusiness(id);
        fetchBusinesses();
      }}
    />
  </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
