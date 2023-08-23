function ListOfMovies({ movies }) {
    return (
        //Renderizamos una lista desordenada y vamos a mapear cada pelicula
        <ul className="movies">
            {
                movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title}></img>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron peliclas para esta búsqueda</p>
    )
}

export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}
