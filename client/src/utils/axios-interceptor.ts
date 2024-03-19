import { getAuth } from "./auth-helper";
export function setupAxios(axios: any) {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
    axios.defaults.headers.Accept = "application/json";
    axios.interceptors.request.use(
      (config: { headers: { Authorization: string } }) => {
        const auth = getAuth();
        if (auth) {
          config.headers.Authorization = `Bearer ${auth}`;
        }
        return config;
      },
      (err: any) => Promise.reject(err)
    );
    axios.interceptors.response.use(
      (response:any) => {
        return {
            success: true,
            data: response.data,
            error: null
        }
      },
      (error:any) => {
        return {
            success: false,
            data: null,
            error: error?.response?.data?.errors || "Application Error"
        }
      }
    )
  }