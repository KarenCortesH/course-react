import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useRef, useState } from 'react'



function App() {
  const { movies } = useMovies()
  //Creamos los estados para ver lo que esta pintando de forma controlada
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  //Cuando hagamos clic en el buscador
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log( { query })
  }
 //Cuando el estado se actualiza automaticamente lo vamos a ver en el input
  const handleChange = (event) => {
    setQuery(event.target.value)

  }

  //
  useEffect(() =>{
    if(query === '') {
      setError ("No se puede buscar una pelicula vacia")
      return
    }
    if(query.match (/^\d+$/))
    {
      setError("No se puede buscar una pelicula con numero")
      return
    }
    setError(null)
  }, [query])
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input name="query" value={query} onChange={handleChange} placeholder='Avengers, Star Wars, The Matrix' />
          <button type='submit'>Buscar</button>
          {/* Aqui ponemos el error */}
          {error && <p style={{color:'red'}}>{error}</p>}
        </form>
      </header>


      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
