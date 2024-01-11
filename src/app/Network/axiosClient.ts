import axios from "axios";

let savedValue = ""; // Default value

// Check if localStorage is available (for example, during SSR it might not be available)
if (typeof localStorage !== "undefined") {
  savedValue = localStorage.getItem("yourLocalStorageKey") || "";
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": savedValue,
    // "X-API-Key": process.env.NEXT_PUBLIC_KEY,
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Set the X-API-Key header dynamically before each request
    config.headers["X-API-Key"] = localStorage.getItem("yourLocalStorageKey");

    try {
      // Additional logic if needed before sending the request
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
