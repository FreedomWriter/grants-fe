import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: "api goes here",
    headers: {
      Authorization: token,
    },
  });
};
