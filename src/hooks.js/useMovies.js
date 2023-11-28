const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=avengers'

export function useMovies ({ search }) {
  // mapping the object to make it more independant from the API CONTRACT

  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.title,
    year: movie.Year,
    image: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      fetch('http://www.omdbapi.com/?apikey=4287ad07&s=avengers')
        .then(res => res.json())
      .then(data => )
    
    } else {

      ;('no Results to show')
    }
  }
}
