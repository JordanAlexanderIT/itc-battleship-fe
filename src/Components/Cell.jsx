import React, { useState, useEffect } from "react";

const Cell = ({ position, highlighted, setSelectedCells }) => {

  const [style, setStyle] = useState("cell");
  
  function handleCell() {
    setSelectedCells(position);
  }

  useEffect(()=>{
    if (highlighted === 'ship') {
      setStyle('cellActive')
    }
  },[highlighted])

  return (
    <div
      className={style}
      onClick={handleCell}
    >
    </div>
  );
};

export default Cell;
