import React from "react";

const FourCellShip = ({ setShip, setCounter1 }) => {
  return (
    <div
      alt="Battleship"
      className="FourCellShip"
      onClick={() => {
        setShip("4cells");
        setCounter1("");
      }}
    ></div>
  );
};

export default FourCellShip;
