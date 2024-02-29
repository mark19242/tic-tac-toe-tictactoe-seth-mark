import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
   const [playerMove, setPlayerMove] = useState("x")
   const [winner, setWinner] = useState(null)

 
   const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  
    
    const checkWinner = () => {
      for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         setWinner(squares[a])
      }
     
    }
    

    return null;
  }
  
checkWinner()
   }
 
  
  
  
  
   const moveStatus = () => {
    setPlayerMove(playerMove === "x" ? "o" : "x")
  }

  const handleGamePlay = (currentSquare) => {
    if(squares[currentSquare]=== null ) {
       squares[currentSquare] = playerMove
       moveStatus()
       setSquares([...squares])
       calculateWinner()
       
    
      // } else {
      //   squares[currentSquare] === !calculateWinner
      //   return "cats game"
      }
    }
console.log(handleGamePlay)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((square, index) => {
          // console.log(square);


          return (
            <Square 
            square={square}
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