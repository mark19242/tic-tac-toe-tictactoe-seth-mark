import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
   const [playerMove, setPlayerMove] = useState("X")
   const [winner, setWinner] = useState(null)


   const restartGame = () => {
    window.location.reload()
  }

// code for checking if theres a winner/ tie game
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
      let tieGame = true
      for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a])
        setTimeout(() => {
          alert("You Win!!!")
        window.location.href = 'https://youtube.com/shorts/KabwIEv37h4?si=P1yoKpnE4LronQXn'

        }, "1000");
        return
      } 
      if (squares[a] === null || squares[b] === null || squares[c] === null) { //if it finds an empty square, it can't be a tie
        tieGame = false
      }
    }
    if (tieGame) {
      setWinner("tie")
      setTimeout(() => {
        alert("Cats Game")
        window.location.href = 'https://youtube.com/shorts/KabwIEv37h4?si=P1yoKpnE4LronQXn'
      }, "1000");
    }
  }
    checkWinner()
   }
  
 
  
  
  
// code for player 1(X) / player 2(O)
   const moveStatus = () => {
    setPlayerMove(playerMove === "X" ? "O" : "X")
  }

  const handleGamePlay = (currentSquare) => {
    if(squares[currentSquare]=== null ) {
       squares[currentSquare] = playerMove
       moveStatus()
       setSquares([...squares])
       calculateWinner()
      }
    }

    

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <p>Current Player: {playerMove}</p>
      <div className='board'>
        {squares.map((square, index) => {
          return (
            <Square 
            square={square}
            key={index}
            index={index}
            handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
        <button className='btn' type="button" onClick={restartGame}>Play Again</button>
    </>
  )
}
export default App