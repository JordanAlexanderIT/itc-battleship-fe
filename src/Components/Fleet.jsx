import React from 'react';
import FourCellShip from './Ships/FourCellShip';
import ThreeCellShip from './Ships/ThreeCellShip';
import TwoCellShip from './Ships/TwoCellShip';
import OneCellShip from './Ships/OneCellShip';
/* import { v4 as uuidv4 } from 'uuid'; */

const threeCellShips = [2,3];
const twoCellShips = [4,5,6];
const oneCellShips = [7,8,9,10];

const Fleet = () => {
    return (
        <div className='FleetField'>
            <FourCellShip id={1}/>
            {threeCellShips.map(item=>{
                return <ThreeCellShip key={item} id={item}/>
            })}
            {twoCellShips.map(item=>{
                return <TwoCellShip key={item} id={item}/>
            })}
            {oneCellShips.map(item=>{
                return <OneCellShip key={item} id={item}/>
            })}
        </div>
    );
};

export default Fleet;