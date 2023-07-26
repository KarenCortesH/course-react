import { useState } from 'react';
import confetti from "canvas-confetti"
import { Square } from './components/Square';
import { Turns } from './constants';
import { checkWinnerFrom } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal';
import './App.css'

function App() {
  //tablero
  const [board, setBoard] = useState(Array(9).fill(null));
  //console.log(board);

  //Saber el turno de quien
  const [turn, setTurn] = useState(Turns.X)

  //Seleccionar Ganador - null = no hay ganador - false= Empate
  const [winner, setWinner] = useState(null);

  //Resetear el juego desde cero
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)
  }



  //va actualizar el estado y pintar en el tablero una X o O
  const updateBoard = (index) => {
    //No se va actualizar el board , en esta posicion si ya tiene algo o tenemos uun ganador no podemos seguuir jugando
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);

    //Cambiar de turno de X a O
    const newTurn = turn == Turns.X ? Turns.O : Turns.X
    setTurn(newTurn);

    //Revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    //Aqui estamos diciendo que hay un empate y que ha terminado el juego
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
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
        <Square isSelected={turn == Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected={turn == Turns.O}>
          {Turns.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main >
  )
}

export default App
