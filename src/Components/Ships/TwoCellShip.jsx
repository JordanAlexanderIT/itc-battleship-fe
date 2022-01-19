import React from 'react';

const TwoCellShip = ({setShip, setCounter3}) => {

    return (
      <div
        className="TwoCellShip"
        onClick={() => {
          setShip("2cells");
          setCounter3(
            (prevState) => prevState - 1
          );
        }}
      ></div>
    );
};

export default TwoCellShip;