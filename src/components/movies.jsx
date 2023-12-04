function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`${movie.title} poster`} />
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
