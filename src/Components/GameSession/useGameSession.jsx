import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../../Context/AppContext.jsx";

const pollingIntervalMS = 1000;
const useGameSession = (shouldPoll = false) => {
  const [sessionId, setSessionId] = useState();
  const [gameSession, setGameSession] = useState();
  const [isPolling, setIsPolling] = useState(shouldPoll);
  const { header } = useContext(AppContext);

  const populateGameSession = useCallback(
    async function () {
      try {
        const response = await axios.post(
          `http://localhost:8000/game-session/${sessionId}`,
          {},
          header
        );
        setGameSession(response.data);

        return response.data;
      } catch (err) {
        alert(`Error: ${err}`);
      }
    },
    [header, sessionId]
  );
  useEffect(() => {
    if (!isPolling) return;
    const intervalId = setInterval(async () => {
      await populateGameSession();
    }, pollingIntervalMS);
    return () => {
      clearInterval(intervalId);
    };
  }, [isPolling, populateGameSession]);

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
  const join = async (joinSessionId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/game-session/${joinSessionId}/join`,
        {},
        header
      );
      setSessionId(joinSessionId);
      return response.data;
    } catch (error) {
      alert(`Error: ${error?.response?.data}`);
      return { error: new Error(error?.response?.data) };
    }
  };
  return {
    create,
    join,
    sessionId,
    setIsPolling,
    gameSession,
    populateGameSession,
  };
};

export default useGameSession;
