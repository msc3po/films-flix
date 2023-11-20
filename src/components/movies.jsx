export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3> {movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} />
            </li>
          ))
}
    </ul>
  )
}

export function noRenoMoviesResult () {
  return (
    <p>Has no results</p>
  )
}