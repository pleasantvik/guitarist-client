/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AuthHelper } from "@/helpers/auth";
import { apiBaseUrl } from "@/constants";

const Api = axios.create({
  baseURL: apiBaseUrl,
});

const authHelper = new AuthHelper();

Api.interceptors.request.use(
  (config: any) => {
    if (authHelper.isAuthenticated()) {
      config.headers["Authorization"] = `Bearer ${authHelper.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default Api;
