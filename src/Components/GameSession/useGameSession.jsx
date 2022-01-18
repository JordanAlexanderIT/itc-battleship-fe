import axios from "axios";
import { useContext, useState } from "react";
import AppContext from "../../Context/AppContext.jsx";

const useGameSession = () => {
  const [sessionId, setSessionId] = useState();
  const { header } = useContext(AppContext);
  const create = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/game-session/create",
        {},
        header
      );
      setSessionId(response.data.id);
      return response.data;
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  return { create, sessionId };
};

export default useGameSession;
