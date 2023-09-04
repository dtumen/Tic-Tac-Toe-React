import React from 'react';
import './Board.css';
import Square from '../Square/Square';

export default function Board({ board, handleClick }) {
  return (
    <div className='board'>
      {
        board.map((square, index) => (
          <Square 
          key={Math.random()}
          square={square} 
          handleClick={() => handleClick(index)} />
        ))
      }
    </div>
  )
}
