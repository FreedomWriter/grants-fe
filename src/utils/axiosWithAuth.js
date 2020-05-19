import axios from "axios";

export const axiosWithAuth = () => {
  // const token = JSON.parse(localStorage.getItem("token"));
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: "https://grantedbackend.herokuapp.com/api",
    headers: {
      Authorization: token,
    },
  });
};
