import axios from "axios";
import { config } from "./Constants";
const apiUrl = config.API_URL;

export const axiosHeader = () => {
  let authorization =
    "Bearer wF6WuI0UJIG1uy7ReTVQZtWyqAzFFJFU23WrWyT8KLx9KCrQJDwF8VouvE9j3ZaK";
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    // validateStatus: function (status) {
    //   return status >= 200 && status < 300; // Consider 2xx as successful, treat others as errors
    // }
  };
};

export const getRequest = (url) => {
  return axios.get(apiUrl + url, axiosHeader()).then((res) => res.data);
};

export const postRequest = (url, data) => {
  return axios
    .post(apiUrl + url, data, axiosHeader())
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
