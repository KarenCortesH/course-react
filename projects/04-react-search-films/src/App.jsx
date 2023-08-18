import './App.css'
import ResponseMovies from './mocks/with-results.json'
import withoutResults  from './mocks/with-results.json'

function App() {

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form className="form">
            <input placeholder='Advengers, Star Wars, The Matrix' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>
          Aqui van los resultados
        </main>
      </div>

    </>
  )
}

export default App
