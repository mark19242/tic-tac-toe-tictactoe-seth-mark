import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  // const [moveStatus, setMovestatus] = useState("x")

  const [playerOne, setPlayerOne] = useState("x")
  const [playerTwo, setPlayerTwo] = useState("o")

  // const playerMove = () => {
  //   setMovestatus(moveStatus === "x" ? "o" : "x")
  // }


  const handleGamePlay = (currentSquare) => {
    if(playerOne % 2 === 0) {
      squares[currentSquare] = "❌"
          setSquares([...squares])
    } else if(playerTwo % 2 !== 0) {
            squares[currentSquare] = "〇"
              setSquares([...squares])
    } else {
      squares[currentSquare] = "Player has already moved there"
          setSquares([...squares])
      }
    }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((squares, index) => {
          console.log(index);


          return (
            <Square 
            square={squares}
            key={index}
            index={index}
            handleGamePlay={handleGamePlay}
            // moveStatus={moveStatus}
            //playerMove={playerMove}
            
            />

          )
        })}
      </div>
    </>
  )
}

export default App