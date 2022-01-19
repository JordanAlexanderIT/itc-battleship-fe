import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGameSession from "./GameSession/useGameSession.jsx";

const JoinGame = () => {
  const [sessionId, setSessionId] = React.useState("");
  const { join: joinSession } = useGameSession();
  const navigate = useNavigate();

  const handleChangeSessionId = (e) => {
    setSessionId(e.target.value);
  };

  const handleJoinGameClick = async (e) => {
    const response = await joinSession(sessionId);
    if (!response.error) navigate(`/session/${sessionId}`);
  };
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" sx={{ m: 1, p: 1 }}>
        Join another Player's lobby
      </Typography>
      <Typography variant="subtitle">
        Please enter the Session-Id, provided to you by the player who created
        the lobby.
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          m: 1,
          p: 1,
        }}
        noValidate
        autoComplete="off"
        bgcolor={"#fff"}
      >
        <TextField
          autoFocus
          margin="dense"
          id="sessionId"
          label="Session Id"
          type="text"
          name="sessionId"
          fullWidth
          variant="standard"
          onChange={handleChangeSessionId}
          value={sessionId}
        />
      </Box>
      <Button
        onClick={handleJoinGameClick}
        variant="contained"
        color="secondary"
      >
        Join Game
      </Button>
    </Box>
  );
};

export default JoinGame;
