import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#9F00C5 ",
      contrastText: "#fff ",
    },
    error: {
      main: "#F2003C",
      contrastText: "#fff",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Oh, hello! This is the Home Component
        </Typography>
        <Box>
          <Button variant="contained" color="secondary">
            I'm a button!
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
