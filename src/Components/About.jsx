import { Box, Typography, Divider } from "@mui/material";
import useWindow from "../Hooks/useWindow";
import eximg1 from "../img/battleship1.jpg";
import eximg2 from "../img/battleship_station.png";

const About = () => {
  const { width } = useWindow();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: width < 800 ? "column" : "row",
        p: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ m: 1, p: 3 }}>
        <Typography variant="h2">Object of the Game</Typography>
        <Typography variant="h6">
          Be the first to sink all five of your opponent's ships.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h4">Prepare for Battle!</Typography>
        <Typography variant="body">
          You and your opponent will face off against each other but neither of
          you can see the other's ocean grid.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="subtitle1" align={"left"}>
          Rules for placing ships:
          <ul>
            <li>Place each ship in any horizontal or vertical position</li>
            <li>
              Do not place a ship so that any part of it over-laps another ship
            </li>
            <li>
              Do not change the position of any ship once the game has begun
            </li>
          </ul>
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h4">How to Play</Typography>
        <Typography variant="subtitle1">
          You and your opponent will alternate turns, making one 'shot' per turn
          to try and hit each other's ships.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h4">Make your shot!</Typography>
        <Typography variant="subtitle1" align={"left"}>
          On your turn, pick a target on the grid according to letter and number
          (ex. E6). When you decide to end your turn, you will find out whether
          your shot is a hit or miss on your opponent.
        </Typography>
        <Typography variant="subtitle1" align={"left"}>
          Once all the grids in any one ship are filled with red squares, it has
          been sunk.
        </Typography>
      </Box>
      <Box sx={{ m: 1, p: 1 }}>
        <Box sx={{ my: 1, border: 4, borderRadius: 2 }}>
          <img alt="Kaboom" src={eximg1} className="about-img" />
        </Box>
        <Box sx={{ my: 1, border: 4, borderRadius: 2 }}>
          <img alt="Kaboom" src={eximg2} className="about-img" />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
