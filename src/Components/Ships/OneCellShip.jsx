import React from 'react';
import Cell from '../Cell';
import { useDrag } from 'react-dnd';

const OneCellShip = ({id}) => {

    const [{isDragging}, drag] = useDrag(()=> ({
        type: 'ship',
        item: {id: id},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div className='OneCellShip' ref={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}> 
           <Cell /> 
        </div>
    );
};

export default OneCellShip;