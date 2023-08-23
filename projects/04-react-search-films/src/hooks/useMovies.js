import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

//Custom Hook - Hace el fetching de datos de la pelicula, y el estado
export function useMovies() {
    const movies = responseMovies.Search


    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    return { movies: mappedMovies }

}
