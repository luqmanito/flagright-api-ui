import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": process.env.NEXT_PUBLIC_KEY,
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    try {
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => {
    console.error("Error with Axios request interceptor:", error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    console.info(
      "\x1b[42m",
      response.status,
      response.config.url,
      response.config.params
    );
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(error);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
