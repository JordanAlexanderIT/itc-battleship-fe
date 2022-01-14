import { Box, Button, Typography } from "@mui/material";
const About = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        In this component, we will tell users about the game and explain the
        rules.
      </Typography>
      <Typography variant="body" gutterBottom>
        Somewhere on the page we will encourage them to register to play.
      </Typography>
    </Box>
  );
};

export default About;
