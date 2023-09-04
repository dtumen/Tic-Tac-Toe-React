import React, { useState } from 'react';
import './Game.css';
import Board from '../Board/Board';
import calculateWinner from '../../helper';

export default function Game() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  console.log('🚀  winner==>', winner)

  // handler:
  const handleClick = (index) => {
    const boardCopy = [...board];
console.log('boardCopy[index]', boardCopy[index])
    if (winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : '0';

    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const btnRestart = () => {
    setBoard(Array(9).fill(null))
  }


  return (
    <div className='wrapper'>
      <button 
      className="restart"
      onClick={btnRestart}
      >
        Start new game
      </button>
      <Board board={board} handleClick={handleClick} />
      <span className="gameInfo">
        {
          winner ? 'Победил: ' + winner : 'Сейчас ходит: ' + (xIsNext ? 'X' : '0')
        }
      </span>
    </div>
  )
}
