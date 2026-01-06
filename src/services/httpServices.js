import axios from "axios";

const requests = axios.create({
  baseURL: "http://localhost:8080/api",
});

requests.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // 👈 FIX
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default requests;

