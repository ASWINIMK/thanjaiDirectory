import requests from "./httpService";

const AdminApi = {

  // ✅ LOGIN
  loginAdmin: async (body) => {
    return requests.post("/admin/login", body);
  },

  // ✅ REGISTER
  registerAdmin: async (body) => {
    return requests.post("/admin/register", body);
  },

  // ✅ DASHBOARD STATS
  getDashboardStats: async () => {
    return requests.get("/admin/dashboard");
  },

  // ✅ ALL BUSINESSES
  getAllBusinesses: async () => {
    return requests.get("/admin/businesses");
  },

  // ✅ PENDING BUSINESSES
  getPendingBusinesses: async () => {
    return requests.get("/admin/businesses/pending");
  },

  // ✅ APPROVE BUSINESS
  approveBusiness: async (id) => {
    return requests.put(`/admin/business/${id}/approve`);
  },

  // ✅ REJECT BUSINESS
  rejectBusiness: async (id) => {
    return requests.put(`/admin/business/${id}/reject`);
  },

};

export default AdminApi;
