import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.REACT_APP_GRANTED_API,
    headers: {
      Authorization: token,
    },
  });
};
