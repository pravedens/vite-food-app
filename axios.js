import axios from "axios";
import { userAuthStore } from "./src/stores/authStore";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

axios.interceptors.request.use(
    (config) => {
        const authStore = userAuthStore();
        const token = authStore.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
);

export default axios;