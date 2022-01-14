import axios from "axios";
import React from "react";

const useUser = () => {
  const [userId, setUserId] = React.useState(null);
  const [header, setHeader] = React.useState(null);

  const register = async (userCredentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/register",
        userCredentials
      );
      setUserId(response.data.userId);
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
      const currentId = response.data.userId;
      setUserId(currentId);
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
