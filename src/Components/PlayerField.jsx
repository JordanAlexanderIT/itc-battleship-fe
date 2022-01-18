import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Cell from "./Cell";
import Ships from "./Ships/Ships";
import { shipsInfo } from "./Ships/shipsInfo";

const playerField = [];
  for (let i = 0; i < 100; i++) {
    playerField.push(i);
  }

const PlayerField = () => {

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(()=>({
    accept: 'ship',
    drop: (item) => addShipToBoard(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
  })
  }))

  const addShipToBoard = (id) => {
    const shipsList = shipsInfo.filter(ship => id === ship.id);
    setBoard(board => [...board, shipsList[0]]);
  };

  useEffect(()=>{console.log(board)},[board])

  return (
    <div className="PlayerField" ref={drop}>
      {playerField.map((cell) => {
        return <Cell key={cell} />
      })}
      <div style={{position: "fixed"}}>
      {board.map(ship => {
        return <Ships key={ship.id} type={ship.type}/>
      })}
      </div>
    </div>
  );
};

export default PlayerField;
