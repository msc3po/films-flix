function ListOfMovies ({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </li>
      ))}
    </ul>

  )
}

function NoMovies () {
  return (

    (<p>No results</p>
    )

  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0 // when i will have movies? when i have an array not empty

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />

  )
}
