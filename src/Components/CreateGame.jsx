import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useGameSession from "./GameSession/useGameSession";
import { useEffect } from "react";
import gameSessionStates from "./GameSession/gameSessionStates.js";

const CreateGame = () => {
  const { create, sessionId, setIsPolling, gameSession } = useGameSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (!gameSession) return;
    if (gameSession.state !== gameSessionStates.waitingForPlayers)
      navigate(`/session/${sessionId}`);
  }, [gameSession, sessionId, navigate]);
  async function handleChallengeOpponentClick() {
    await create();
    setIsPolling(true);
    return;
  }

  function renderSessionIdBox() {
    if (!sessionId) return null;
    const challengeId = `${sessionId}`;

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            navigator.clipboard.writeText(challengeId);
          }}
          variant="outlined"
        >
          {challengeId}
          <ContentCopyOutlined></ContentCopyOutlined>
        </Button>
        <Typography variant="subtitle1" align={"left"} color={"InfoText"}>
          Copy and give this code to a friend
        </Typography>
      </Box>
    );
  }
  function renderWaitingForPlayersLoader() {
    if (!sessionId) return null;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress></CircularProgress>
        <Typography variant="subtitle1" align={"left"} color={"InfoText"}>
          Waiting for other player
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" sx={{ m: 1, p: 1 }}>
        Create Game
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle">
          From here, you can share an invitation-link to a friend to begin your
          match.
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle2">Click here to begin.</Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleChallengeOpponentClick}
      >
        Create
      </Button>
      {renderSessionIdBox()}
      {renderWaitingForPlayersLoader()}
    </Box>
  );
};

export default CreateGame;
