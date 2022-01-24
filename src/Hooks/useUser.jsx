import axios from "axios";
import React, { useEffect } from "react";

const useUser = () => {
  const [userId, setUserId] = React.useState(null);
  const [header, setHeader] = React.useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);

    const token = localStorage.getItem("jwt");
    const userHeader = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setHeader(userHeader);
  }, []);

  const register = async (userCredentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/register",
        userCredentials
      );
      const userHeader = {
        headers: { Authorization: `Bearer ${response.data.token}` },
      };
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("jwt", response.data.token);

      setUserId(response.data.userId);
      setHeader(userHeader);

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

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("jwt", response.data.token);

      const currentId = response.data.userId;
      setUserId(currentId);
      setHeader(userHeader);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  const logout = () => {
    setUserId(null);
    setHeader(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
  };

  return { register, login, logout, userId, header };
};

export default useUser;
