import axios from "axios";

const token = localStorage.getItem("TOKEN");

export const UnauthenticatedAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  timeout: 10000,
  headers: {
    common: {
      'Content-Type': 'application/json',
    }
  }
});

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  timeout: 10000,
  headers: {
    common: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : null
    }
  }
});

API.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error?.response?.status === 401) {
    localStorage.removeItem("TOKEN");
    window.location.href = "/";
  }
  return Promise.reject(error);
});

export default API;