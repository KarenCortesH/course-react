import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useRef } from 'react'



function App() {
  const { movies } = useMovies()
  const inputRef = useRef()

  //Cuando hagamos clic en el buscador
  const handleSubmit = (event) =>{
    event.preventDefault()
  const inputElement = inputRef.current
  //Aqui estamos recuperando el valor del elemento
  const value = inputElement.value
  console.log(value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input ref={inputRef} placeholder='Avengers, Star Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>


      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
