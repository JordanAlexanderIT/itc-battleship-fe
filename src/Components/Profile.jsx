import React from "react";

import { Box, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
      <Typography variant="h6" gutterBottom>
        User profile
      </Typography>
    </Box>
  );
};

export default Profile;
