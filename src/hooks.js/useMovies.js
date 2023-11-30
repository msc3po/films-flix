import SearchMovies from '../mocks/search_Result.json'

const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=avengers'

export function useMovies () {
  const movies = SearchMovies.Search // where the movies are.
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
