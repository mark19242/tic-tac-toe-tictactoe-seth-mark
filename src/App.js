import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [playerMove, setPlayerMove] = useState("x")

 

  const moveStatus = () => {
    setPlayerMove(playerMove === "x" ? "o" : "x")
  }


  const handleGamePlay = (currentSquare) => {
    if(squares[currentSquare]=== null ) {
       squares[currentSquare] = playerMove
       moveStatus()
         
   
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