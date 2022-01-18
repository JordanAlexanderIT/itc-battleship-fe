import React from 'react';
import FourCellShip from './FourCellShip';
import OneCellShip from './OneCellShip';
import ThreeCellShip from './ThreeCellShip';
import TwoCellShip from './TwoCellShip';


const Ships = ({type}) => {
    return (
        <div>
            {type === 'FourCell' && <FourCellShip />}
            {type ==='ThreeCell' && <ThreeCellShip />}
            {type ==='TwoCell' && <TwoCellShip />}
            {type ==='OneCell' && <OneCellShip />}
        </div>
    );
};

export default Ships;