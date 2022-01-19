import React, { useEffect, useState } from "react";
import Cell from "./Cell";

  const playerField = [];
  for(let y=1;y<=10;y++) {
    for (let x=1;x<=10;x++){
      playerField.push({position: {x,y}, highlighted: ''})
    }
  }

  const PlayerField = ({ship, orientation}) => {

  const [selectedCells, setSelectedCells] = useState([]);
  const [shipsData, setShipsData] = useState([]);

  useEffect(()=>{
    let item = {
      startedPosition: selectedCells,
      size: parseInt(ship),
      orientation: orientation
    }
    setShipsData(prevState => [...prevState, item])
  },[selectedCells])

  useEffect(()=>{console.log(shipsData)},[shipsData])

  useEffect(()=>{
    if (orientation === 'H') {
      var CurrentCell = {
        x: selectedCells.x,
        y: selectedCells.y
      }
      var SecondCell = {
        x: selectedCells.x+1,
        y: selectedCells.y
      }
      var ThirdCell = {
        x: selectedCells.x+2,
        y: selectedCells.y
      }
      var FourthCell = {
        x: selectedCells.x+3,
        y: selectedCells.y
      }
    }

    if (orientation === 'V') {
      var CurrentCell = {
        x: selectedCells.x,
        y: selectedCells.y
      }
      var SecondCell = {
        x: selectedCells.x,
        y: selectedCells.y+1
      }
      var ThirdCell = {
        x: selectedCells.x,
        y: selectedCells.y+2
      }
      var FourthCell = {
        x: selectedCells.x,
        y: selectedCells.y+3
      }
    }

    for (let i=0;i<playerField.length;i++) {
   
      if((ship === '1cells' || ship === '2cells' || ship === '3cells' || ship === '4cells') && selectedCells && playerField[i].position.x === CurrentCell.x && playerField[i].position.y === CurrentCell.y) {
        playerField[i].highlighted = 'ship'
      }
      if ((ship === '2cells' || ship === '3cells' || ship === '4cells') && SecondCell && playerField[i].position.x === SecondCell.x && playerField[i].position.y === SecondCell.y) {
        playerField[i].highlighted = 'ship' 
      } 
      if ((ship === '3cells' || ship === '4cells') && ThirdCell && playerField[i].position.x === ThirdCell.x && playerField[i].position.y === ThirdCell.y) {
        playerField[i].highlighted = 'ship' 
      } 
      if (ship === '4cells' && FourthCell && playerField[i].position.x === FourthCell.x && playerField[i].position.y === FourthCell.y) {
        playerField[i].highlighted = 'ship' 
      } 
  }
},[selectedCells])

  return (
    <div className="PlayerField" >
      {playerField.map((cell, index) => {
        return <Cell key={index} position={cell.position} highlighted={cell.highlighted} setSelectedCells={setSelectedCells}/>
      })}
    </div>
  );
};

export default PlayerField;
