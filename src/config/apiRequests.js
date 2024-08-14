import { toast } from "react-toastify";

//@ts-ignore
const {
  axiosInstance,
  axiosBackendBookingInstance,
} = require("./axiosInstance");

export const bookingPostAdminRequest = async (
  endpoint,
  body,
  headers
) => {
  const token = localStorage.getItem("accessToken");
  return axiosBackendBookingInstance
    .post(`${endpoint}`, body, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        setTimeout(() => (window.location.href = "/"), 300);
        return;
      }

      return response?.data;
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401) {
          toast.error("Session expired!");

          localStorage.removeItem("accessToken");
          setTimeout(() => (window.location.href = "/"), 300);

          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error?.response?.data;
      }
    });
};
export const postRequest = async (
  endpoint,
  body,
  headers
) => {
  const token = localStorage.getItem("accessToken");
  return axiosInstance
    .post(`${endpoint}`, body, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        setTimeout(() => (window.location.href = "/"), 300);

        return;
      }
      return response?.data;
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401 && endpoint !== '/auth/login/admin') {
          toast.error("Session expired!");
          localStorage.removeItem("accessToken");
          setTimeout(() => (window.location.href = "/"), 300);
          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error?.response?.data;
      }
    });
};

export const putRequest = async (
  endpoint,
  body,
  headers
) => {
  const token = localStorage.getItem("accessToken");
  return axiosInstance
    .put(`${endpoint}`, body, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        setTimeout(() => (window.location.href = "/"), 300);

        return;
      }
      return response?.data;
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401) {
          toast.error("Session expired!");
          localStorage.removeItem("accessToken");
          setTimeout(() => (window.location.href = "/"), 300);

          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error.response?.data;
      }
    });
};

export const getRequest = async (
  endpoint,
  headers,
  params
) => {
  const token = localStorage.getItem("accessToken");
  return axiosInstance
    .get(`${endpoint}`, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
      params: params ?? {},
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        setTimeout(() => (window.location.href = "/"), 300);
        return;
      }
      if (response?.status !== 204) {
        return response?.data;
      } else {
        return {
          status: response?.status,
          success: false,
          message: response?.statusText,
          data: [],
        };
      }
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401) {
          toast.error("Session expired!");
          localStorage.removeItem("accessToken");
          setTimeout(() => (window.location.href = "/"), 300);

          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error.response?.data;
      }
    });
};

export const bookingGetRequestAdmin = async (
  endpoint,
  headers,
  params
) => {
  const token = localStorage.getItem("accessToken");
  return axiosBackendBookingInstance
    .get(`${endpoint}`, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
      params: params ?? {},
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        window.location.href = "/";
        return;
      }
      if (response?.status !== 204) {
        return response?.data;
      } else {
        return {
          status: response?.status,
          success: false,
          message: response?.statusText,
          data: [],
        };
      }
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401) {
          toast.error("Session expired!");
          localStorage.removeItem("accessToken");
          window.location.href = "/";
          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error.response?.data;
      }
    });
};

export const deleteRequest = async (
  endpoint,
  headers,
  params
) => {
  const token = localStorage.getItem("accessToken");
  return axiosInstance
    .delete(`${endpoint}`, {
      headers: { ...headers, Authorization: token ? `Bearer ${token}` : null },
      params: params ?? {},
    })
    .then(function (response) {
      if (response?.status == 401) {
        toast.error("Session expired!");
        localStorage.removeItem("accessToken");
        window.location.href = "/";
        return;
      } else if (response?.status !== 204) {
        return response?.data;
      } else {
        return {
          status: response?.status,
          success: false,
          message: response?.statusText,
          data: [],
        };
      }
    })
    .catch(function (error) {
      if (error.message === "Network Error") {
        return {
          status: 500,
          success: false,
          message: error?.message,
          data: {},
        };
      } else if (error?.name == "AxiosError") {
        if (error?.response?.status == 401) {
          toast.error("Session expired!");
          localStorage.removeItem("accessToken");
          window.location.href = "/";
          return;
        } else {
          return error?.response?.data;
        }
      } else {
        return error.response?.data;
      }
    });
};
