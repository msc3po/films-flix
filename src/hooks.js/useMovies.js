import withResults from '../mocks/search_Result.json'
import { useState } from 'react'
import withoutResults from '../mocks/no_Results.json'

const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=avengers'

export function useMovies (search) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search // where the movies are.
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(withoutResults)
    }
  }
  return { movies: mappedMovies, getMovies }
}
