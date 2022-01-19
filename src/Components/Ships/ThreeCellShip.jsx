import React from 'react';

const ThreeCellShip = ({setShip, setCounter2}) => {

    return (
      <div
        className="ThreeCellShip"
        onClick={() => {
          setShip("3cells");
          setCounter2(
            (prevState) => prevState - 1
          );
        }}
      ></div>
    );
};

export default ThreeCellShip;