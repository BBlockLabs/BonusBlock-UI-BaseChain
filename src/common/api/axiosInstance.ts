import axios from "axios"

// Create an Axios instance with default options
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
});

export default axiosInstance;
