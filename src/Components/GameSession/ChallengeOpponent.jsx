import { ContentCopyOutlined } from "@mui/icons-material";
import { Button, Box, Typography } from "@mui/material";
import useGameSession from "./useGameSession.jsx";

function ChallengeOpponent() {
  const { create, sessionId } = useGameSession();
  async function handleChallengeOpponentClick() {
    await create();
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <Button variant="contained" onClick={handleChallengeOpponentClick}>
        Challenge a friend
      </Button>
      {renderSessionIdBox()}
    </Box>
  );
}

export default ChallengeOpponent;
