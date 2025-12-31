import axios from "axios";

const requests = axios.create({
  baseURL: "http://localhost:5000/api", 
  withCredentials: true,
});

export default requests;
