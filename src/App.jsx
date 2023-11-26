import './App.css'
import { useState } from 'react'

import SearchMovies from './mocks/search_Result.json'

const API_KEY = '4287ad07'
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s'avengers'`
const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=\'avengers\''

function App () {
  const movies = SearchMovies.Search

  const [search, setSearch] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setSearch(!search)
  }

  return (
    <>
      <header>
        <form id='searchMovies'>
          <input placeholder='Paquita Salas, Avengers, Matrix' />
          <button type='submit' onClick={handleClick}>Search</button>
        </form>
      </header>

      <main className='main'>
        <ul className='movies'>
          {movies.map((movie) => {
            const { imdbID, Title, Type, Year, Poster } = movie
            return (
              <li key={imdbID} className='movie'>
                <h3>{Title}</h3>
                <p>{Type} {Year}</p>
                <img src={Poster} alt={`Poster of ${Title}`} />

              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
