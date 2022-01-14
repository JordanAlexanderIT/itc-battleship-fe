import { Box, Button, Typography } from "@mui/material";
const Admin = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Oh, hello! This is the Admin Component
      </Typography>
      <Box>
        <Button variant="contained" color="success">
          I'm a button!
        </Button>
      </Box>
    </Box>
  );
};

export default Admin;
