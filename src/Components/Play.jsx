import { Box, Button, Typography } from "@mui/material";
import PlayerField from "./PlayerField";
import Fleet from './Fleet';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';


const Play = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* <Typography variant="h5" gutterBottom>
        Oh, hello! This is the Play Component
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="success"
        >
          I'm a button!
        </Button>

        
      </Box> */}
      <DndProvider backend={HTML5Backend}>
          <div className="PlayField">
            <PlayerField />
            <Fleet />
          </div>
        </DndProvider>
    </Box>
    
  );
};

export default Play;
