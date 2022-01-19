import React from 'react';
import FourCellShip from '../../../../Group project/itc-battleship-fe/src/Components/Ships/FourCellShip';
import ThreeCellShip from '../../../../Group project/itc-battleship-fe/src/Components/Ships/ThreeCellShip';
import TwoCellShip from '../../../../Group project/itc-battleship-fe/src/Components/Ships/TwoCellShip';
import OneCellShip from '../../../../Group project/itc-battleship-fe/src/Components/Ships/OneCellShip';
import { useState } from 'react/cjs/react.development';

const Fleet = ({setShip, setOrientation}) => {

    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(2);
    const [counter3, setCounter3] = useState(3);
    const [counter4, setCounter4] = useState(4);

    return (
        <div className='FleetField'>
            {counter1 && <FourCellShip setShip={setShip} setCounter1 ={setCounter1} />}
            {counter2 > 0 && <ThreeCellShip setShip={setShip} setCounter2 ={setCounter2}/>}
            {counter3 > 0 && <TwoCellShip setShip={setShip} setCounter3 ={setCounter3}/>}
            {counter4 > 0 && <OneCellShip setShip={setShip} setCounter4 ={setCounter4}/>}
            <span style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around'}}>
                <span onClick={()=>{setOrientation('H')}} style={{cursor: 'pointer'}}>HOR</span>
                <span onClick={()=>{setOrientation('V')}} style={{cursor: 'pointer'}}>VER</span>
            </span>
        </div>
    );
};

export default Fleet;