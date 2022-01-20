import { Box, Button, Typography } from "@mui/material";
import PlayerField from "./PlayerField";
import Fleet from "./Fleet";
import { useState } from "react/cjs/react.development";

const Play = () => {
  const [ship, setShip] = useState("");
  const [orientation, setOrientation] = useState("H");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Typography variant="h5">Please place your ships.</Typography>
      <div className="Play">
        <PlayerField ship={ship} orientation={orientation} />
        <Fleet
          setShip={setShip}
          setOrientation={setOrientation}
          orientation={orientation}
        />
      </div>
    </Box>
  );
};

export default Play;
