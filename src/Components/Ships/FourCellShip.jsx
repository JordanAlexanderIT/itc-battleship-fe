import React from 'react';

const FourCellShip = ({setShip, setCounter1}) => {

    return (
      <div
        className="FourCellShip"
        onClick={() => {
          setShip("4cells");
          setCounter1("");
        }}
      ></div>
    );
};

export default FourCellShip;