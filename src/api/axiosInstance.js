import axios from "axios";


const BASE_URL = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) || "https://heartsandmind.org/backend/public/api/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;