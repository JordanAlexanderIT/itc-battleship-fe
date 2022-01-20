import React from "react";
import AppContext from "../Context/AppContext";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Play from "./Play";
import axios from "axios";

const Session = () => {
  const appContext = React.useContext(AppContext);
  const { header } = appContext;
  const { sessionId } = useParams();
  return (
    <Box sx={{ m: 4 }}>
      <Play></Play>
      {/* <Typography sx={{ m: 1, p: 1 }}>
        {sessionId} will be used to make API requests along user Id
      </Typography> */}
    </Box>
  );
};

export default Session;
