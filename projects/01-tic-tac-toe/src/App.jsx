import { useState } from 'react';
import './App.css'

//Turnos
const Turns = {
  X: 'X',
  O: 'O'
}


//cuadrado del Tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }


  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {
  //tablero
  const [board, setBoard] = useState(Array(9).fill(null));

  //Saber el turno de quien
  const [turn, setTurn] = useState(Turns.X)


  //va actuualizar el estado yy pintarlo en el tablero
  const updateBoard = (index) => {
    //Cambiar de turno de X a O
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn);

  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected={turn === Turns.X}>
          {Turns.O}
        </Square>
      </section>
    </main>
  )
}

export default App
