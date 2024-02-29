import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [playerMove, setPlayerMove] = useState("x")

  // const [playerOne, setPlayerOne] = useState("x")
  // const [playerTwo, setPlayerTwo] = useState("o")

  const moveStatus = () => {
    setPlayerMove(playerMove === "x" ? "o" : "x")
  }


  const handleGamePlay = (currentSquare) => {
    if(squares[currentSquare]=== null ) {
       squares[currentSquare] = playerMove
       moveStatus()
          setSquares([...squares])
    } else if(playerMove) {
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