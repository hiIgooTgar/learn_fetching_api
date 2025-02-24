import axios from "axios";

const api = axios.create({
  baseURL: "https://api-berita-indonesia.vercel.app/cnn/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
