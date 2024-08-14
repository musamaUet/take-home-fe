import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STAGE === "dev"
      ? process.env.NEXT_PUBLIC_LIVE_BACKEND_BASEURL
      : process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASEURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosBackendBookingInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STAGE === "local"
      ? process.env.NEXT_PUBLIC_LOCAL_BACKEND_BOOKING
      : process.env.NEXT_PUBLIC_LIVE_BACKEND_BOOKING,
});

export const axiosBackendApiInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STAGE === "local"
      ? process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASEURL
      : process.env.NEXT_PUBLIC_LIVE_BACKEND_API,
});
