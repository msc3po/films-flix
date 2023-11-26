import './App.css'
import { useState } from 'react'

import SearchMovies from './mocks/search_Result.json'

const API_KEY = '4287ad07'
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s'avengers'`
const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=\'avengers\''

function App () {
  const movies = SearchMovies.Search

  const [search, setSearch] = useState(false)

  const handleClick = () => {
    setSearch(!search)
  }

  return (
    <>
      {console.log(movies)}

      <header>
        <form id='searchMovies'>
          <input placeholder='Paquita Salas, Avengers, Matrix' />
          <button type='submit' onClick={handleClick}>Search</button>
        </form>
      </header>

      <main className='main'>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Type} {movie.Year}</p>
                <img src={movie.Poster} />

              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
