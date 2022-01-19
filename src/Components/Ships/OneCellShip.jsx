import React from 'react';

const OneCellShip = ({setShip, setCounter4}) => {

    return (
      <div
        className="OneCellShip"
        onClick={() => {
          setShip("1cells");
          setCounter4(
            (prevState) => prevState - 1
          );
        }}
      ></div>
    );
};

export default OneCellShip;