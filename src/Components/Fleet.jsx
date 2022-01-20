import React from "react";
import FourCellShip from "../Components/Ships/FourCellShip";
import ThreeCellShip from "../Components/Ships/ThreeCellShip";
import TwoCellShip from "../Components/Ships/TwoCellShip";
import OneCellShip from "../Components/Ships/OneCellShip";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const Fleet = ({ setShip, setOrientation, orientation }) => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(2);
  const [counter3, setCounter3] = useState(3);
  const [counter4, setCounter4] = useState(4);

  return (
    <div className="FleetField">
      {counter1 && <FourCellShip setShip={setShip} setCounter1={setCounter1} />}
      {counter2 > 0 && (
        <ThreeCellShip setShip={setShip} setCounter2={setCounter2} />
      )}
      {counter3 > 0 && (
        <TwoCellShip setShip={setShip} setCounter3={setCounter3} />
      )}
      {counter4 > 0 && (
        <OneCellShip setShip={setShip} setCounter4={setCounter4} />
      )}
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <span
          onClick={() => {
            setOrientation("H");
          }}
          style={{ cursor: "pointer" }}
        >
          <Button
            variant="contained"
            color="success"
            disabled={orientation === "H"}
          >
            Horizontal
          </Button>
        </span>
        <span
          onClick={() => {
            setOrientation("V");
          }}
          style={{ cursor: "pointer" }}
        >
          <Button
            variant="contained"
            color="success"
            disabled={orientation === "V"}
          >
            Vertical
          </Button>
        </span>
      </span>
      <div>
        {counter1 > 0 ? <>{counter1} Battleship left to place</> : null}
      </div>
      <div>
        {counter2 > 0 ? <>{counter2} Destroyer(s) left to place</> : null}
      </div>
      <div>
        {counter3 > 0 ? <>{counter3} Frigate(s) left to place</> : null}
      </div>
      <div>
        {counter4 > 0 ? <>{counter4} Submarine(s) left to place</> : null}
      </div>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" color="secondary">
          End Turn
        </Button>
      </Box>
    </div>
  );
};

export default Fleet;
