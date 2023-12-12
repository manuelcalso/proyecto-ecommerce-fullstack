import axiosClient from "./axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);

  // SÍ HUBO TOKEN
  if (token) {
    axiosClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    // NO HUBO TOKEN
    delete axiosClient.defaults.headers.common["x-auth-token"];
  }
};

export default getToken;
