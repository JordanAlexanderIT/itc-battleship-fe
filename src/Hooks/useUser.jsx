import axios from "axios";
import React from "react";

const useUser = () => {
  const [userId, setUserId] = React.useState(null);
  const [header, setHeader] = React.useState(null);

  const register = async (userCredentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/signup",
        userCredentials
      );
      setUserId(response.data._id);
      console.log(response.data);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  const login = async (userCredentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        userCredentials
      );
      const userHeader = {
        headers: { Authorization: `Bearer ${response.data.token}` },
      };
      setUserId(response.data._id);
      setHeader(userHeader);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  const logout = () => {
    setUserId(null);
  };

  return { register, login, logout, userId, header };
};

export default useUser;
