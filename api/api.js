import axios from "axios";
import config from "./config";

const { API_KEY, BASE_URL } = config;

const API = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default API;
