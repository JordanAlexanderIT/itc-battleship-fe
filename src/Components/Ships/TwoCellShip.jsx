import React from 'react';
import Cell from '../Cell';
import { useDrag } from 'react-dnd';

const TwoCellShip = ({id}) => {

    const [{isDragging}, drag] = useDrag(()=> ({
        type: 'ship',
        item: {id: id},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div className='TwoCellShip'ref={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}>
           <Cell /> 
           <Cell />
        </div>
    );
};

export default TwoCellShip;