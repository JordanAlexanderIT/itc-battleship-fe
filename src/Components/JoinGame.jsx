import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const JoinGame = () => {
  const [sessionId, setSessionId] = React.useState("");

  const handleChangeSessionId = (e) => {
    setSessionId(e.target.value);
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
      <Link to={`/session/${sessionId}`}>
        <Button variant="contained" color="secondary">
          Join Game
        </Button>
      </Link>
    </Box>
  );
};

export default JoinGame;
