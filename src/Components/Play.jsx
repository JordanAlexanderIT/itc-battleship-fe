import { Box, Button, Typography } from "@mui/material";
import PlayerField from "./PlayerField";
import Fleet from "./Fleet";
import { useState } from 'react/cjs/react.development';

const Play = () => {

  const [ship, setShip] = useState('');
  const [orientation, setOrientation] = useState('H');

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <div className='Play'>
      <PlayerField ship={ship} orientation={orientation}/>
      <Fleet setShip={setShip} setOrientation={setOrientation}/>
    </div>
    </Box>
  );
};

export default Play;
