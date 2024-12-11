import axios from "axios";

const mainURL = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://dtf-backend.vercel.app",
});

mainURL.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Xatolarni qaytaring
  }
);

export default mainURL;
